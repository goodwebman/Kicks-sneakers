import classNames from 'classnames/bind';
import classes from './products-page.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  return {
    cnRoot: cn('container'),
    cnFilterDesktop: cn('filterDesktop'),
    cnFilterMobile: cn('filterMobile'),
  };
};
