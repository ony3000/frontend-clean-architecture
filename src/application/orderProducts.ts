import { Cart } from '../domain/cart';
import { createOrder } from '../domain/order';
import { User } from '../domain/user';
import {
  NotificationService,
  PaymentService,
  OrdersStorageService,
  CartStorageService,
  DateTimeService,
} from './ports';

type Dependencies = {
  notifier: NotificationService;
  payment: PaymentService;
  orderStorage: OrdersStorageService;
  cartStorage: CartStorageService;
  dateTimeSource: DateTimeService;
};

// Ideally, we would pass a command as an argument,
// which would encapsulate all input data.
export async function orderProducts(
  user: User,
  cart: Cart,
  {
    notifier,
    payment,
    orderStorage,
    cartStorage,
    dateTimeSource,
  }: Dependencies,
) {
  // Here we can validate the data before creating the order.

  const createdOn = dateTimeSource.currentDatetime();
  const order = createOrder(user, cart, createdOn);

  // The use case function doesn't call third-party services directly,
  // instead, it relies on the interfaces we declared earlier.
  const paid = await payment.tryPay(order.total);
  if (!paid) return notifier.notify("The payment wasn't successful 🤷");

  // And here we can save the order on the server, if necessary.

  const { orders } = orderStorage;
  orderStorage.updateOrders([...orders, order]);
  cartStorage.emptyCart();
}
