import classNames from 'classnames/bind';
import classes from './text-button.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
  size?: 'small' | 'medium' | 'large';
};

export const getClasses = ({ className, size = 'medium' }: Args) => {
  const cnRoot = cn('button', size, className);

  return {
    cnRoot,
  };
};
