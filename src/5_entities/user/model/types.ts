export type User = {
  id: number;
  email: string;
  name: string;
  password: string;
};

export type CreateUserDto = {
  email: string;
  name: string;
  password: string;
};

export type AuthState =
  | { type: 'idle' }
  | { type: 'pending' }
  | { type: 'succeeded'; user: User }
  | { type: 'failed'; error: string };
