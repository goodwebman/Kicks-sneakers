import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(3, { message: 'Email is invalid' }),
  password: z.string().min(4, { message: 'Password must be at least 4 characters' }),
});

export type LoginFormValues = z.infer<typeof loginSchema>;