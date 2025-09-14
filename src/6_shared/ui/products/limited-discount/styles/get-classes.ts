import classNames from 'classnames/bind';
import classes from './limited-discount.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('root');
  const cnHeadline = cn('headline');
  const cnDiscount = cn('discount');
  const cnSuptitle = cn('suptitle');
 

  return {
    cnRoot,
    cnHeadline,
    cnDiscount,
    cnSuptitle,
  };
};
