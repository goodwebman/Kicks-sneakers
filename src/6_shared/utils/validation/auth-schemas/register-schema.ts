import { z } from 'zod';
export const registerSchema = z.object({
  email: z.string().min(3, { message: 'Email is invalid' }),
  password: z.string().min(4, { message: 'Password must be at least 4 characters' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;