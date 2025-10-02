import classNames from 'classnames/bind';
import type { ButtonSize } from '../../types';
import classes from './icon-button.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
  size?: ButtonSize;
};

export const getClasses = ({ className, size = 'medium' }: Args = {}) => {
  const cnRoot = cn('button', size, className);
  const cnIcon = cn('icon');

  return {
    cnRoot,
    cnIcon,
  };
};
