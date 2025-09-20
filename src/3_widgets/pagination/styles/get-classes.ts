import classNames from 'classnames/bind';
import classes from './pagination.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
  isActive?: boolean;
  isDisabled?: boolean;
  isPrev?: boolean;
  isNext?: boolean;
};

export const getClasses = ({
  className,
  isActive,
  isDisabled,
  isPrev,
  isNext,
}: Args = {}) => {
  const cnWrapper = cn('wrapper', className);
  const cnButton = cn('button', {
    'button--active': isActive,
    'button--disabled': isDisabled,
    'button--prev': isPrev,
    'button--next': isNext,
  });
    const cnEllipsis = cn('ellipsis');

  return { cnWrapper, cnButton, cnEllipsis };
};
