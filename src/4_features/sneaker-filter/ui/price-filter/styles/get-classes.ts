import classNames from 'classnames/bind';
import classes from './price-filter.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnContainer = cn('container');
  const cnValues = cn('values');
  const cnSlider = cn('slider');

  return {
    cnContainer,
    cnValues,
    cnSlider,
  };
};
