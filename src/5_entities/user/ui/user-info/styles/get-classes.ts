import classNames from 'classnames/bind';
import classes from './user-info.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  return {
    cnRoot: cn('root'),
    cnImageWrapper: cn('imageWrapper'),
    cnTextWrapper: cn('textWrapper'),
    cnName: cn('name'),
    cnEmail: cn('email'),
    cnPermission: cn('permission'),
  };
};
