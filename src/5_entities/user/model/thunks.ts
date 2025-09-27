import { createAsyncThunk } from '@reduxjs/toolkit';
import { jsonApiInstance } from '@shared/api/json-api-instance';
import type { CreateUserDto, User } from './types';

export const createUser = createAsyncThunk<User, CreateUserDto>(
  'user/createUser',
  async newUser => {
    return await jsonApiInstance<User>('/users', {
      method: 'POST',
      json: newUser,
    });
  },
);

export const loginUser = createAsyncThunk<
  User,
  { email: string; password: string }
>('auth/loginUser', async ({ email, password }) => {
  const users = await jsonApiInstance<User[]>('/users', { method: 'GET' });
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    throw new Error('Invalid credentials');
  }

  return user;
});

export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
  return true;
});
