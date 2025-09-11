import classNames from 'classnames/bind';
import styles from './header.module.scss';

const cn = classNames.bind(styles);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args = {}) => {
  const cnRoot = cn('header', className);
  const cnAllSneakers = cn('allSneakers');
  const cnBurger = cn('burger');
  const cnBurgerOpen = cn('burger', 'open'); 
  const cnLogo = cn('logo');
  const cnRightSide = cn('right_side');
  const cnMenu = cn('menu');
  const cnMenuOpen = cn('menu_open');

  return {
    cnRoot,
    cnAllSneakers,
    cnBurger,
    cnBurgerOpen,
    cnLogo,
    cnRightSide,
    cnMenu,
    cnMenuOpen,
  };
};
