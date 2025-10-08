import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '@shared/redux/store';


const selectOrdersState = (state: RootState) => state.orders;

const selectAllOrders = createSelector(
  [selectOrdersState],
  ordersState => ordersState.list
);


const selectUserOrders = createSelector(
  [selectAllOrders, (_: RootState, userId: string) => userId],
  (orders, userId) => orders.filter(order => order.userId === userId)
);


const selectOrderTotalPrice = createSelector(
  [selectAllOrders, (_: RootState, orderId: string) => orderId],
  (orders, orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (!order) return 0;

    const itemsTotal = order.items.reduce(
      (sum, item) => sum + item.price * (item.quantity ?? 1),
      0
    );
    const delivery = order.formData?.deliveryOptions?.price ?? 0;

    return itemsTotal + delivery;
  }
);

export const ordersSelectors = {
  selectAllOrders,
  selectUserOrders,
  selectOrderTotalPrice,
};
