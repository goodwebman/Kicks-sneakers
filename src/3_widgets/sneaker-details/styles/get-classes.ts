import classNames from 'classnames/bind';
import classes from './sneaker-details.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  return {
    cnRoot: cn('root')
  };
};
