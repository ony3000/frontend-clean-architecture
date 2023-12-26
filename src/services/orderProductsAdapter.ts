import { orderProducts } from '../application/orderProducts';
import { OrderProductsService } from '../application/ports';
import { dateTimeSource } from './dateTimeAdapter';
import { useNotifier } from './notificationAdapter';
import { usePayment } from './paymentAdapter';
import { useCartStorage, useOrdersStorage } from './storageAdapter';

export function useOrderProducts(): OrderProductsService {
  const notifier = useNotifier();
  const payment = usePayment();
  const orderStorage = useOrdersStorage();
  const cartStorage = useCartStorage();

  return {
    orderProducts: (user, cart) =>
      orderProducts(user, cart, {
        notifier,
        payment,
        orderStorage,
        cartStorage,
        dateTimeSource,
      }),
  };
}
