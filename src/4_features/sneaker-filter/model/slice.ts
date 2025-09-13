import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../../../6_shared/redux/store';
import type { SneakerFilterState } from './types';

const initialState: SneakerFilterState = {
  genders: [],
  colors: [],
  sizes: [],
  types: [],
  priceRange: {},
};

export const sneakerFiltersSlice = createSlice({
  name: 'sneakerFilter',
  initialState,
  reducers: {
    toggleGender: (state, action: PayloadAction<string>) => {
      if (state.genders.includes(action.payload)) {
        state.genders.filter(g => g !== action.payload);
      } else {
        state.genders.push(action.payload);
      }
    },

    toggleColor: (state, action: PayloadAction<string>) => {
      if (state.colors.includes(action.payload)) {
        state.colors.filter(c => c !== action.payload);
      } else {
        state.colors.push(action.payload);
      }
    },
    toggleSize: (state, action: PayloadAction<number>) => {
      if (state.sizes.includes(action.payload)) {
        state.sizes.filter(s => s !== action.payload);
      } else {
        state.sizes.push(action.payload);
      }
    },
    toggleTypes: (state, action: PayloadAction<string>) => {
      if (state.types.includes(action.payload)) {
        state.types.filter(t => t !== action.payload);
      } else {
        state.types.push(action.payload);
      }
    },

    setPriceRange: (
      state,
      action: PayloadAction<{ from?: number; to?: number }>,
    ) => {
      state.priceRange = action.payload;
    },
  },
}).injectInto(rootReducer);
