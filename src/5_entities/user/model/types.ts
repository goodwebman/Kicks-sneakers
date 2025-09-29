type UserPermission = 'regular' | 'admin';

export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  permission: UserPermission;
};

export type LoginData = {
  email: string;
  password: string;
};

export type RegisterData = {
  email: string;
  name: string;
  password: string;
};

export type AuthState =
  | { type: 'idle' }
  | { type: 'pending' }
  | { type: 'succeeded'; user: User }
  | { type: 'failed'; error: string };
