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
    .min(1, { message: 'Цена не может быть меньше 1$' })
    .max(1000, { message: 'Цена не может быть больше 1000$' }),
  name: z
    .string()
    .trim()
    .min(3, { message: 'Минимальное название кроссовка 3 символа' })
    .max(40, { message: 'Максимальное название кроссовка 40 символов' }),
  gender: z.enum(GENDERS),
  colors: z.array(z.enum(SNEAKER_COLORS)).min(1,{ message: 'Выберите хотя бы один цвет' }),
  categories: z
    .array(z.enum(CATEGORIES))
    .min(1, { message: 'Выберите хотя бы одну категорию' }),

  sizes: z
    .array(z.union(AVAILABLE_SIZES.map(s => z.literal(s))))
    .min(1, { message: 'Выберите хотя бы один размер' }),
  images: z
  .custom<File>(
    value => value instanceof File && value.type.startsWith('image/'),
    { message: 'Загрузите корректное изображение' },
  )
  .optional(),
});

export type SneakerCrudFormValues = z.infer<typeof SneakerCrudSchema>;
