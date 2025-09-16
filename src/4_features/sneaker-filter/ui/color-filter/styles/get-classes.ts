import classNames from 'classnames/bind';
import classes from './color-filter.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
  selectedColors: string[]
};

export const getClasses = ({ className, selectedColors }: Args) => {
  const cnRoot = cn('container', className);
  const cnLabel = cn('label');
  const cnHeader = cn('header');
  const cnColorList = cn('color__list');
   const getColorItem = (color: string) =>
    cn('color__item', `color__item--${color}`, { 'color__item--selected': selectedColors.includes(color) });

  return { cnRoot, cnLabel, cnHeader, cnColorList, getColorItem };
};
