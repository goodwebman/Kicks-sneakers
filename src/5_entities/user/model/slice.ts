import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { createUser, loginUser, logoutUser } from './thunks';
import type { AuthState, User } from './types';

const initialState: AuthState = { type: 'idle' };

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as AuthState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createUser.pending, _ => {
        return { type: 'pending' };
      })
      .addCase(createUser.fulfilled, (_, action: PayloadAction<User>) => {
        return { type: 'succeeded', user: action.payload };
      })
      .addCase(createUser.rejected, (_, action) => {
        return {
          type: 'failed',
          error: action.error.message || 'Failed to register',
        };
      });

    builder
      .addCase(loginUser.pending, (): AuthState => ({ type: 'pending' }))
      .addCase(loginUser.fulfilled, (_, action: PayloadAction<User>) => {
        return { type: 'succeeded', user: action.payload };
      })
      .addCase(loginUser.rejected, (_, action) => {
        return {
          type: 'failed',
          error: action.error.message || 'Failed to login',
        };
      });

    builder.addCase(logoutUser.fulfilled, () => ({ type: 'idle' }));
  },
  selectors: {
    selectUser: state => (state.type === 'succeeded' ? state.user : undefined),
    selectAuthStatus: state => state.type,
    selectAuthError: state =>
      state.type === 'failed' ? state.error : undefined,
  },
});

export default userSlice.reducer;
