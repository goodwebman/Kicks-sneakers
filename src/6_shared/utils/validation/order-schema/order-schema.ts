import { z } from 'zod';
export const orderSchema = z.object({
  email: z.string().email('Введите корректный email'),
  firstName: z.string().min(1, 'Введите имя'),
  lastName: z.string().min(1, 'Введите фамилию'),
  address: z.string().min(1, 'Введите адрес доставки'),
  phone: z
    .string()
    .min(10, 'Введите корректный номер')
    .regex(/^[0-9+() -]+$/, 'Некорректный формат номера'),
});

export type OrderFormValues = z.infer<typeof orderSchema>;
