import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cn = classNames.bind(styles);

type Args = {
  className?: string;
  cartSneakers?: number;
};

export const getClasses = ({ className, cartSneakers = 0 }: Args = {}) => {
  const cnRoot = cn('header', className);
  const cnAllSneakers = cn('allSneakers');
  const cnBurger = cn('burger');
  const cnBurgerOpen = cn('burger', 'open');
  const cnLogo = cn('logo');
  const cnRightSide = cn('right_side');
  const cnMenu = cn('menu');
  const cnMenuOpen = cn('menu_open');
  const cnCart = cn('cart', { 'cart--has-items': cartSneakers > 0 });

  return {
    cnRoot,
    cnAllSneakers,
    cnBurger,
    cnBurgerOpen,
    cnLogo,
    cnRightSide,
    cnMenu,
    cnMenuOpen,
    cnCart,
  };
};
