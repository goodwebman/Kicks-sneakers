import classNames from 'classnames/bind';
import classes from './input.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
  isSuccess?: boolean;
  isError?: boolean;
  disabled?: boolean;
};

export const getClasses = ({
  className,
  isSuccess,
  isError,
  disabled,
}: Args) => {
  const cnWrapper = cn('wrapper', className);
  const cnTitle = cn('title');
  const cnRoot = cn('root', {
    success: isSuccess,
    error: isError,
    disabled,
  });
  const cnInput = cn('input');
  const cnHelper = cn('helper', { error: isError });
  const cnIconBtn = cn('iconBtn');
  const cnEyeIcon = cn('eyeIcon');

  return {
    cnWrapper,
    cnTitle,
    cnRoot,
    cnInput,
    cnHelper,
    cnIconBtn,
    cnEyeIcon,
  };
};
