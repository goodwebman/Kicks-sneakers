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
      action: PayloadAction<{ sneakerId: string; color: string; size: number }>,
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

    minusQuantity: (
      state,
      action: PayloadAction<{ sneakerId: string; color: string; size: number }>,
    ) => {
      const { sneakerId, color, size } = action.payload;

      const existing = state.items.find(
        i => i.sneakerId === sneakerId && i.color === color && i.size === size,
      );

      if (existing) {
        if (existing.quantity > 1) {
          existing.quantity -= 1;
        }
      }
    },
    plusQuantity: (
      state,
      action: PayloadAction<{ sneakerId: string; color: string; size: number }>,
    ) => {
      const { sneakerId, color, size } = action.payload;

      const existing = state.items.find(
        i => i.sneakerId === sneakerId && i.color === color && i.size === size,
      );

      if (existing) {
        existing.quantity += 1;
      }
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

export const {
  addSneaker,
  removeSneaker,
  clearCart,
  minusQuantity,
  plusQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
