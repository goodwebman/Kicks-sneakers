import { useCreateSneaker } from '@features/add-sneaker/model/use-create-sneaker';
import {
  AVAILABLE_SIZES,
  CATEGORIES,
  GENDERS,
  SNEAKER_COLORS,
  SneakerColor,
} from '@features/sneaker-filters/model/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@shared/ui/buttons/button';
import { Checkbox } from '@shared/ui/checkbox/checkbox';
import { Input } from '@shared/ui/input/input';
import { Select } from '@shared/ui/select/select';
import {
  SneakerCrudSchema,
  type SneakerCrudFormValues,
} from '@shared/utils/validation/sneaker-crud-schema/sneaker-crud-schema';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
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
  const createSneakerMutation = useCreateSneaker();

  const onSubmit = async (data: SneakerCrudFormValues) => {
    try {
      await createSneakerMutation.mutateAsync(data);
      reset();
      setPreview(null);
      toast.success('Кроссовок добавлен', { position: 'top-center' });
    } catch (error) {
      toast.error(`Кроссовок не добавлен, ${error}`, {
        position: 'top-center',
      });
    }
  };

  const { cnRoot, cnLabel, cnError, cnCheckboxGroup, cnImageUpload, cnImageLabel, cnImageWrapper, cnImageInput, cnImageButton, cnImagePreview } =
    getClasses();

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

      <Input
        name="name"
        control={control}
        title="Название"
        placeholder="Введите название"
        error={errors.name}
      />

      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <div>
            <Select
              labelClassName={cnLabel}
              label="Пол"
              options={GENDERS.map(g => ({ label: g, value: g }))}
              value={field.value}
              onChange={field.onChange}
            />
            {errors.gender && <p className={cnError}>{errors.gender.message}</p>}
          </div>
        )}
      />

      {/* Цвета */}
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

          // ✅ передаём выбранные цвета
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
              {errors.colors && <p className={cnError}>{errors.colors.message}</p>}
            </div>
          );
        }}
      />

      {/* Категории */}
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
            {errors.categories && <p className={cnError}>{errors.categories.message}</p>}
          </div>
        )}
      />

      {/* Размеры */}
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

      {/* Изображения */}
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
                <img
                  src={preview}
                  alt="Предпросмотр"
                  className={cnImagePreview}
                />
              )}
            </div>
            {errors.images && <p className={cnError}>{errors.images.message}</p>}
          </div>
        )}
      />

      <Button
        type="submit"
        disabled={isSubmitting || createSneakerMutation.isPending}
      >
        {createSneakerMutation.isPending ? 'Добавление...' : 'Добавить кроссовок'}
      </Button>
    </form>
  );
};
