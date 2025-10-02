import classNames from 'classnames/bind';
import classes from './cart-page.module.scss';

const cn = classNames.bind(classes);

export const getClasses = ({ isEmpty }: { isEmpty: boolean }) => {
  const cnCart = cn('cart', {
    'cart--empty': isEmpty,
    'cart--filled': !isEmpty,
  });

  return {
    cnCart,
  };
};
