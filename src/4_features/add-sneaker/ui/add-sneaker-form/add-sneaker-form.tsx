import {
  AVAILABLE_SIZES,
  CATEGORIES,
  GENDERS,
  SNEAKER_COLORS,
} from '@features/sneaker-filters/model/constants';
import { zodResolver } from '@hookform/resolvers/zod';

import { jsonApiInstance } from '@shared/api/json-api-instance';
import { Button } from '@shared/ui/buttons/button';
import { Input } from '@shared/ui/input/input';
import {
  SneakerCrudSchema,
  type SneakerCrudFormValues,
} from '@shared/utils/validation/sneaker-crud-schema/sneaker-crud-schema';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { getClasses } from './styles/get-classes';

export const AddSneakerForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SneakerCrudFormValues>({
    resolver: zodResolver(SneakerCrudSchema),
    defaultValues: {
      price: undefined,
      name: '',
      gender: GENDERS[0],
      categories: [],
      sizes: [],
      colors: [],
      images: undefined,
    },
  });

  const [preview, setPreview] = useState<string | null>(null);
  const { cnRoot } = getClasses();

  const onSubmit = async (data: SneakerCrudFormValues) => {
    try {
      const defaultPreviews = [
        '/assets/preview1.png',
        '/assets/preview2.png',
        '/assets/preview3.png',
      ];

      let mainImageUrl = '';

      if (data.images instanceof File) {
        mainImageUrl = URL.createObjectURL(data.images);
      }

      const sneakerToSave = {
        ...data,
        images: [mainImageUrl, ...defaultPreviews],
      };

      await jsonApiInstance('/sneakers', {
        method: 'POST',
        json: sneakerToSave,
      });

      alert('✅ Кроссовок успешно добавлен!');
      reset();
      setPreview(null);
    } catch (error) {
      console.error('Ошибка при сохранении кроссовка:', error);
      alert('❌ Не удалось сохранить кроссовок');
    }
  };

  return (
    <form className={cnRoot} onSubmit={handleSubmit(onSubmit)}>
      {/* Цена */}
      <Input
        name="price"
        control={control}
        title="Цена"
        placeholder="Введите цену"
        type="number"
        error={errors.price}
      />

      {/* Название */}
      <Input
        name="name"
        control={control}
        title="Название"
        placeholder="Введите название"
        error={errors.name}
      />

      {/* Пол */}
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <div>
            <label>Пол</label>
            <select {...field}>
              {GENDERS.map(g => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>
        )}
      />

      <Controller
        name="colors"
        control={control}
        render={({ field }) => (
          <div>
            <label>Цвета</label>
            {SNEAKER_COLORS.map(c => (
              <div key={c}>
                <input
                  type="checkbox"
                  checked={field.value.includes(c)}
                  onChange={() => {
                    const newValue = field.value.includes(c)
                      ? field.value.filter(v => v !== c)
                      : [...field.value, c];
                    field.onChange(newValue);
                  }}
                />
                <span>{c}</span>
              </div>
            ))}
            {errors.categories && <p>{errors.categories.message}</p>}
          </div>
        )}
      />

      {/* Категории */}
      <Controller
        name="categories"
        control={control}
        render={({ field }) => (
          <div>
            <label>Категории</label>
            {CATEGORIES.map(c => (
              <div key={c}>
                <input
                  type="checkbox"
                  checked={field.value.includes(c)}
                  onChange={() => {
                    const newValue = field.value.includes(c)
                      ? field.value.filter(v => v !== c)
                      : [...field.value, c];
                    field.onChange(newValue);
                  }}
                />
                <span>{c}</span>
              </div>
            ))}
            {errors.categories && <p>{errors.categories.message}</p>}
          </div>
        )}
      />

      {/* Размеры */}
      <Controller
        name="sizes"
        control={control}
        render={({ field }) => (
          <div>
            <label>Размеры</label>
            {AVAILABLE_SIZES.map(s => (
              <div key={s}>
                <input
                  type="checkbox"
                  checked={field.value.includes(s)}
                  onChange={() => {
                    const newValue = field.value.includes(s)
                      ? field.value.filter(v => v !== s)
                      : [...field.value, s];
                    field.onChange(newValue);
                  }}
                />
                <span>{s}</span>
              </div>
            ))}
            {errors.sizes && <p>{errors.sizes.message}</p>}
          </div>
        )}
      />

      {/* Изображение */}
      <Controller
        name="images"
        control={control}
        render={({ field }) => (
          <div>
            <label>Изображение</label>
            <input
              type="file"
              accept="image/*"
              onChange={e => {
                const file = e.target.files?.[0];
                field.onChange(file);
                if (file) setPreview(URL.createObjectURL(file));
              }}
            />
            {preview && (
              <img
                src={preview}
                alt="Предпросмотр"
                style={{ width: 120, marginTop: 8, borderRadius: 8 }}
              />
            )}
            {errors.images && (
              <p style={{ color: 'red' }}>{errors.images.message}</p>
            )}
          </div>
        )}
      />

      <Button type="submit" disabled={isSubmitting}>
        Добавить кроссовок
      </Button>
    </form>
  );
};
