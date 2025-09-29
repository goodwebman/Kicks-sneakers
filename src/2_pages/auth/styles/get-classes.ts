import classNames from 'classnames/bind';
import classes from './auth.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  return {
    cnRoot: cn('root'),
  
  };
};
