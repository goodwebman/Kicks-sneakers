import classNames from 'classnames/bind';
import classes from './reset-filter.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnResetButton = cn('reset-button');
  const cnIcon = cn('reset-button__icon');

  return {
    cnResetButton,
    cnIcon,
  };
};
