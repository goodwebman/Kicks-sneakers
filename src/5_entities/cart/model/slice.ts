import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, CartState } from './types';

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addSneaker: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;

      const existing = state.items.find(
        i =>
          i.sneakerId === item.sneakerId &&
          i.color === item.color &&
          i.size === item.size,
      );

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeSneaker: (
      state,
      action: PayloadAction<{ sneakerId: number; color: string; size: number }>,
    ) => {
      state.items = state.items.filter(
        i =>
          !(
            i.sneakerId === action.payload.sneakerId &&
            i.color === action.payload.color &&
            i.size === action.payload.size
          ),
      );
    },
    clearCart: state => {
      state.items = [];
    },
  },
  selectors: {
    getSneakers: state => state.items,
    cartItemsQuantity: state =>
      state.items.reduce((total, item) => total + item.quantity, 0),
    totalPrice: state =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
  },
});

export const { addSneaker, removeSneaker, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
