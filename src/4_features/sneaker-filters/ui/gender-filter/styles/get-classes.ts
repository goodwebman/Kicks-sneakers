import classNames from 'classnames/bind';
import classes from './gender-filter.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('container');
  return { cnRoot };
};
