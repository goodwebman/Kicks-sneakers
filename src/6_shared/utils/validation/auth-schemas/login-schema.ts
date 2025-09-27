import { z } from 'zod';
export const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: 'Почта хуйня' }),
  password: z
    .string()
    .min(4, { message: 'Пароль должен содержать минимум 4 символа' }),
});

export type RegisterFormValues = z.infer<typeof loginSchema>;
