import classNames from 'classnames/bind';
import classes from './auth-switcher.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('root');
  return { cnRoot };
};
