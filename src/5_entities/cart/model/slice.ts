import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, CartState } from './types';

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
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
    removeItem: (
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
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
