import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem } from '@entities/cart/model/types';
import type { CheckoutFormData } from './types';

interface CheckoutState {
  userId: string | null;
  formData: CheckoutFormData;
  items: CartItem[];
}

const initialState: CheckoutState = {
  userId: null,
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    deliveryOptions: {
      type: 'standart',
      price: 6.99,
    },
  },
  items: [],
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<string | null>) {
      state.userId = action.payload;
    },

    updateForm(state, action: PayloadAction<Partial<CheckoutFormData>>) {
      state.formData = { ...state.formData, ...action.payload };
    },

    clearCheckout(state) {
      state.userId = null;
      state.formData = initialState.formData;
      state.items = [];
    },

    setCheckoutItems(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },

    setDeliveryOptions(
      state,
      action: PayloadAction<{ type: 'standart' | 'store'; price: number }>
    ) {
      state.formData.deliveryOptions = action.payload;
    },
  },

  selectors: {
    selectUserId: state => state.userId,
    selectFormData: state => state.formData,
    selectCheckoutItems: state => state.items,
  },
});

export const {
  setUserId,
  updateForm,
  clearCheckout,
  setCheckoutItems,
  setDeliveryOptions,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
