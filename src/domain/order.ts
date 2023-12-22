import { Cart } from './cart';
import { Product, totalPrice } from './product';
import { User } from './user';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export type Order = {
  user: UniqueId;
  products: Product[];
  created: DateTimeString;
  status: OrderStatus;
  total: PriceCents;
};

export function createOrder(
  user: User,
  cart: Cart,
  created: DateTimeString,
): Order {
  return {
    user: user.id,
    products: cart.products,
    status: 'new',
    created,
    total: totalPrice(cart.products),
  };
}
