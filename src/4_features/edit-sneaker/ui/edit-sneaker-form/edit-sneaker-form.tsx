import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/buttons/button';
import { Checkbox } from '@shared/ui/checkbox/checkbox';
import { Input } from '@shared/ui/input/input';
import { Select } from '@shared/ui/select/select';
import {
  type SneakerCrudFormValues,
  SneakerCrudSchema,
} from '@shared/utils/validation/sneaker-crud-schema/sneaker-crud-schema';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { sneakersApi } from '@entities/sneaker/api/sneaker-api';
import { useUpdateSneaker } from '@features/edit-sneaker/model/use-update-sneaker';
import {
  AVAILABLE_SIZES,
  CATEGORIES,
  GENDERS,
  SNEAKER_COLORS,
  SneakerColor,
} from '@features/sneaker-filters/model/constants';
import { Routes } from '@shared/constants/routes';
import { useNavigate } from 'react-router-dom';
import { getClasses } from './styles/get-classes';

type EditSneakerFormProps = {
  sneakerId: string;
};

export const EditSneakerForm = ({ sneakerId }: EditSneakerFormProps) => {
  const { data: sneaker } = useSuspenseQuery(
    sneakersApi.getSneakerById(sneakerId),
  );
  const updateSneaker = useUpdateSneaker();
  const [preview, setPreview] = useState<string | null>(null);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SneakerCrudFormValues>({
    resolver: zodResolver(SneakerCrudSchema),
    defaultValues: {
      price: 0,
      name: '',
      gender: 'unisex',
      categories: [],
      sizes: [],
      colors: [],
      images: undefined,
    },
  });

  useEffect(() => {
    if (sneaker) {
      reset({
        price: sneaker.price ?? 0,
        name: sneaker.name ?? '',
        gender: sneaker.gender ?? 'unisex',
        colors: (sneaker.colors || []).filter(
          (c): c is SneakerCrudFormValues['colors'][number] =>
            SNEAKER_COLORS.includes(c as any),
        ),
        categories: (sneaker.categories || []).filter(
          (c): c is SneakerCrudFormValues['categories'][number] =>
            CATEGORIES.includes(c as any),
        ),
        sizes: (sneaker.sizes || []).filter(
          (s): s is SneakerCrudFormValues['sizes'][number] =>
            AVAILABLE_SIZES.includes(s as any),
        ),
        images: undefined,
      });

      if (sneaker.images?.length) {
        setPreview(sneaker.images[0]);
      }
    }
  }, [sneaker, reset]);

  const onSubmit = async (data: SneakerCrudFormValues) => {
    await updateSneaker.mutateAsync({ id: sneakerId, ...data });
    navigate(Routes.sneakers.root);
  };

  const {
    cnRoot,
    cnLabel,
    cnError,
    cnCheckboxGroup,
    cnImageUpload,
    cnImageLabel,
    cnImageWrapper,
    cnImageInput,
    cnImageButton,
    cnImagePreview,
  } = getClasses({
    selectedColors: sneaker?.colors || [],
  });

  return (
    <form className={cnRoot} onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="price"
        control={control}
        title="Цена"
        placeholder="Введите цену"
        type="number"
        error={errors.price}
      />
      {errors.price && <p className={cnError}>{errors.price.message}</p>}

      <Input
        name="name"
        control={control}
        title="Название"
        placeholder="Введите название"
        error={errors.name}
      />
      {errors.name && <p className={cnError}>{errors.name.message}</p>}

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <div>
            <Select
              label="Пол"
              labelClassName={cnLabel}
              options={GENDERS.map(g => ({ label: g, value: g }))}
              value={field.value}
              onChange={field.onChange}
            />
            {errors.gender && (
              <p className={cnError}>{errors.gender.message}</p>
            )}
          </div>
        )}
      />

      <Controller
        name="colors"
        control={control}
        render={({ field }) => {
          const selectedColors = field.value as SneakerColor[];

          const toggleColor = (color: SneakerColor) => {
            const newValue = selectedColors.includes(color)
              ? selectedColors.filter(v => v !== color)
              : [...selectedColors, color];
            field.onChange(newValue);
          };

          const { cnColorList, getColorItem } = getClasses({
            selectedColors,
          });

          return (
            <div>
              <label className={cnLabel}>Цвета</label>
              <ul className={cnColorList}>
                {SNEAKER_COLORS.map(color => (
                  <li
                    key={color}
                    className={getColorItem(color)}
                    onClick={() => toggleColor(color)}
                  />
                ))}
              </ul>
              {errors.colors && (
                <p className={cnError}>{errors.colors.message}</p>
              )}
            </div>
          );
        }}
      />

      <Controller
        name="categories"
        control={control}
        render={({ field }) => (
          <div>
            <label className={cnLabel}>Категории</label>
            <div className={cnCheckboxGroup}>
              {CATEGORIES.map(category => (
                <Checkbox
                  key={category}
                  label={category}
                  checked={field.value.includes(category)}
                  onChange={checked => {
                    const newValue = checked
                      ? [...field.value, category]
                      : field.value.filter(v => v !== category);
                    field.onChange(newValue);
                  }}
                />
              ))}
            </div>
            {errors.categories && (
              <p className={cnError}>{errors.categories.message}</p>
            )}
          </div>
        )}
      />

      <Controller
        name="sizes"
        control={control}
        render={({ field }) => (
          <div>
            <label className={cnLabel}>Размеры</label>
            <div className={cnCheckboxGroup}>
              {AVAILABLE_SIZES.map(size => (
                <Checkbox
                  key={size}
                  label={size.toString()}
                  checked={field.value.includes(size)}
                  onChange={checked => {
                    const newValue = checked
                      ? [...field.value, size]
                      : field.value.filter(v => v !== size);
                    field.onChange(newValue);
                  }}
                />
              ))}
            </div>
            {errors.sizes && <p className={cnError}>{errors.sizes.message}</p>}
          </div>
        )}
      />

      <Controller
        name="images"
        control={control}
        render={({ field }) => (
          <div className={cnImageUpload}>
            <label className={cnImageLabel}>Изображение</label>
            <div className={cnImageWrapper}>
              <label htmlFor="file-upload" className={cnImageButton}>
                Выбрать файл
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                className={cnImageInput}
                onChange={e => {
                  const file = e.target.files?.[0];
                  field.onChange(file);
                  if (file) setPreview(URL.createObjectURL(file));
                }}
              />
              {preview && (
                <img src={preview} alt="preview" className={cnImagePreview} />
              )}
            </div>
            {errors.images && (
              <p className={cnError}>{errors.images.message}</p>
            )}
          </div>
        )}
      />

      <Button type="submit" disabled={isSubmitting}>
        {updateSneaker.isPending ? 'Сохранение...' : 'Сохранить изменения'}
      </Button>
    </form>
  );
};
