import classNames from 'classnames/bind';
import classes from './sneakers-list-with-pagination.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args = {}) => {
  const cnWrapper = cn('wrapper', className);
  const cnGrid = cn('grid');

  return { cnWrapper, cnGrid };
};
