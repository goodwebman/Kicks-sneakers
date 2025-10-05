import type { CartItem } from '@entities/cart/model/types';
import type { CheckoutFormData } from '@entities/checkout/model/types';

export type StatusType = 'pending' | 'processing' | 'delivered';

export type OrderType = {
  id: string;
  userId: string;
  items: CartItem[];
  formData: CheckoutFormData;
  createdAt: string;
  status: StatusType;
};

export type OrdersState = {
  list: OrderType[];
};
