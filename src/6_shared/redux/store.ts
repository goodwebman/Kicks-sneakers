import type { ThunkAction, UnknownAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { sneakerFiltersSlice } from '../../4_features/sneaker-filter/model/slice';

// Корректно объединяем слайсы
const rootReducer = combineReducers({
  sneakerFilter: sneakerFiltersSlice.reducer,
  // другие слайсы можно добавить здесь
});

// Конфигурация persistor
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['sneakerFilter'],
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

// Типизированный dispatch
export type AppDispatch = typeof store.dispatch;

// Типизированный thunk
export type AppThunk<R = void> = ThunkAction<
  R,
  ReturnType<typeof rootReducer>,
  unknown,
  UnknownAction
>;

// Хуки с типами
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof rootReducer>
> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppStore = () => useStore<typeof store>();

// Создаём persistor
export const persistor = persistStore(store);
