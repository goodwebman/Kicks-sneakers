import { configureStore, combineReducers, type ThunkAction, type UnknownAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore, type TypedUseSelectorHook } from 'react-redux';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { sneakerFiltersSlice } from '../../4_features/sneaker-filters/model/slice';
import { cartSlice } from '../../5_entities/cart/model/slice';
import { userSlice } from '@entities/user/model/slice';
import { checkoutSlice } from '@entities/checkout/model/slice';
import { ordersSlice } from '@entities/orders/module/slice';

const rootReducer = combineReducers({
  sneakerFilter: sneakerFiltersSlice.reducer,
  cart: cartSlice.reducer,
  user: userSlice.reducer,
  checkout: checkoutSlice.reducer,
  orders: ordersSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sneakerFilter', 'cart', 'user', 'checkout', 'orders'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// ✅ правильный тип RootState — из store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<R = void> = ThunkAction<
  R,
  RootState,
  unknown,
  UnknownAction
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppStore = () => useStore<typeof store>();

export const persistor = persistStore(store);
