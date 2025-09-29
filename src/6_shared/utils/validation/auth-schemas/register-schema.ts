import { z } from 'zod';
export const registerSchema = z.object({
  email: z.string().min(3, { message: 'Почта хуйня' }),
  password: z
    .string()
    .min(4, { message: 'Пароль должен содержать минимум 4 символа' }),

  name: z.string().min(2, { message: 'Имя должено быть длинее 2-х символов' }),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
