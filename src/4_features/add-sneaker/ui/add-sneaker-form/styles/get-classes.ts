import classNames from 'classnames/bind';
import classes from './add-sneaker-form.module.scss';

const cn = classNames.bind(classes);

type Args = {
  selectedColors?: string[];
};

export const getClasses = ({ selectedColors = [] }: Args = {}) => {
  const cnRoot = cn('root');

  // Общие стили
  const cnLabel = cn('label');
  const cnError = cn('error');

  // Цвета
  const cnColorList = cn('color__list');
  const getColorItem = (color: string) =>
    cn('color__item', `color__item--${color}`, {
      'color__item--selected': selectedColors.includes(color),
    });

  // Чекбоксы
  const cnCheckboxGroup = cn('checkbox__group');

  // Изображения
  const cnImageUpload = cn('image__upload');
  const cnImageLabel = cn('image__label');
  const cnImageWrapper = cn('image__wrapper');
  const cnImageInput = cn('image__input');
  const cnImageButton = cn('image__button');
  const cnImagePreview = cn('image__preview');

  return {
    cnRoot,
    cnLabel,
    cnError,
    cnColorList,
    getColorItem,
    cnCheckboxGroup,
    cnImageUpload,
    cnImageLabel,
    cnImageWrapper,
    cnImageInput,
    cnImageButton,
    cnImagePreview,
  };
};
