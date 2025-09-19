import classNames from 'classnames/bind';
import classes from './size-filter.module.scss';

const cn = classNames.bind(classes);

type Args = {
  selectedSizes: number[];
  availableSizes: number[];
};

export const getClasses = ({ selectedSizes, availableSizes }: Args) => {
  const cnSizeList = cn('size__list');

  const getSizeItem = (size: number) =>
    cn('size__item', {
      'size__item--selected': selectedSizes.includes(size),
      'size__item--disabled': !availableSizes.includes(size),
    });

  return { cnSizeList, getSizeItem };
};
