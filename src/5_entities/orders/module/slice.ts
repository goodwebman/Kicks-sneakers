import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { OrdersState, OrderType } from './types';

const initialState: OrdersState = {
  list: [],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<OrderType>) {
      state.list.push(action.payload);
    },
    clearOrders(state) {
      state.list = [];
    },
  },

  selectors: {
    selectAllOrders: state => state.list,
    selectUserOrders: (state, userId: string) =>
      state.list.filter(order => order.userId === userId),
  },
});

export const { addOrder, clearOrders } = ordersSlice.actions;
export default ordersSlice.reducer;
