import {
  AVAILABLE_SIZES,
  CATEGORIES,
  GENDERS,
  SNEAKER_COLORS,
} from '@features/sneaker-filters/model/constants';
import { z } from 'zod';

export const SneakerCrudSchema = z.object({
  price: z
    .number()
    .min(1, { message: 'Price cannot be less than $1' })
    .max(1000, { message: 'Price cannot exceed $1000' }),
  name: z
    .string()
    .trim()
    .min(3, { message: 'Sneaker name must be at least 3 characters' })
    .max(40, { message: 'Sneaker name cannot exceed 40 characters' }),
  gender: z.enum(GENDERS),
  colors: z
    .array(z.enum(SNEAKER_COLORS))
    .min(1, { message: 'Select at least one color' }),
  categories: z
    .array(z.enum(CATEGORIES))
    .min(1, { message: 'Select at least one category' }),
  sizes: z
    .array(z.union(AVAILABLE_SIZES.map(s => z.literal(s))))
    .min(1, { message: 'Select at least one size' }),
  images: z
    .custom<File>(
      value => value instanceof File && value.type.startsWith('image/'),
      { message: 'Upload a valid image' },
    )
    .optional(),
});

export type SneakerCrudFormValues = z.infer<typeof SneakerCrudSchema>;
