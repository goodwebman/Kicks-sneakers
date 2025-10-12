import { z } from 'zod';

export const orderSchema = z.object({
  email: z.string().email('Enter a valid email'),
  firstName: z.string().min(1, 'Enter your first name'),
  lastName: z.string().min(1, 'Enter your last name'),
  address: z.string().min(1, 'Enter delivery address'),
  phone: z
    .string()
    .min(10, 'Enter a valid phone number')
    .regex(/^[0-9+() -]+$/, 'Invalid phone number format'),
});

export type OrderFormValues = z.infer<typeof orderSchema>;