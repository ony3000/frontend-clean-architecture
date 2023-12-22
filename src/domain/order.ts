import { Cart } from './cart';
import { totalPrice } from './product';
import { User } from './user';

export type OrderStatus = 'new' | 'delivery' | 'completed';

export type Order = {
  user: UniqueId;
  cart: Cart;
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
    cart,
    user: user.id,
    status: 'new',
    created,
    total: totalPrice(cart.products),
  };
}
