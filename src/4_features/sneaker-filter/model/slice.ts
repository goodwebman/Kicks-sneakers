import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SneakerFilterState } from './types';

const initialState: SneakerFilterState = {
  genders: [],
  colors: [],
  sizes: [],
  categories: [],
  priceRange: {},
};

export const sneakerFiltersSlice = createSlice({
  name: 'sneakerFilter',
  initialState,
  reducers: {
    toggleGender: (state, action: PayloadAction<string>) => {
      state.genders.includes(action.payload)
        ? (state.genders = state.genders.filter(g => g !== action.payload))
        : state.genders.push(action.payload);
    },
    toggleColor: (state, action: PayloadAction<string>) => {
      state.colors.includes(action.payload)
        ? (state.colors = state.colors.filter(c => c !== action.payload))
        : state.colors.push(action.payload);
    },
    toggleSize: (state, action: PayloadAction<number>) => {
      state.sizes.includes(action.payload)
        ? (state.sizes = state.sizes.filter(s => s !== action.payload))
        : state.sizes.push(action.payload);
    },
    toggleCategories: (state, action: PayloadAction<string>) => {
      state.categories.includes(action.payload)
        ? (state.categories = state.categories.filter(
            c => c !== action.payload,
          ))
        : state.categories.push(action.payload);
    },
    setPriceRange: (
      state,
      action: PayloadAction<{ from?: number; to?: number }>,
    ) => {
      state.priceRange = action.payload;
    },
  },
  selectors: {
    selectGenders: state => state.genders,
    selectColors: state => state.colors,
    selectSizes: state => state.sizes,
    selectCategories: state => state.categories,
    selectPriceRange: state => state.priceRange,
  },
});

export const {
  toggleGender,
  toggleColor,
  toggleSize,
  toggleCategories,
  setPriceRange,
} = sneakerFiltersSlice.actions;
