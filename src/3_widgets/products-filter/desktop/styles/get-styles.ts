import classNames from 'classnames/bind';
import classes from './products-filter.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('container');
  const cnTitle = cn('title');
  return { cnRoot, cnTitle };
};
