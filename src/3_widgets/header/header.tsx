import { type FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { TextButton } from '../../6_shared/ui/buttons/text-button/text-button';
import { DrawerMenu } from '../../6_shared/ui/drawer-menu/drawer-menu';
import SvgCart from '../../6_shared/ui/icons/cart';
import SvgLogo from '../../6_shared/ui/icons/logo';
import SvgUser from '../../6_shared/ui/icons/user';
import { getClasses } from './styles/get-classes';
import { Routes } from '@shared/constants/routes';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cnRoot, cnAllSneakers, cnBurger, cnBurgerOpen, cnLogo, cnRightSide } =
    getClasses();
  const navigate = useNavigate();

  return (
    <header className={cnRoot}>
      <div className={cnAllSneakers}>
        <TextButton
          onClick={() => navigate(Routes.sneakers.root)}
          label="All sneakers 🔥"
        />
      </div>

      <button
        className={isMenuOpen ? cnBurgerOpen : cnBurger}
        onClick={() => setIsMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <Link className={cnLogo} to={Routes.root}>
        <SvgLogo width={132} height={32} />
      </Link>

      <div className={cnRightSide}>
        <Link to={Routes.auth}>
          <SvgUser width={25} height={25} />
        </Link>
        <Link to={Routes.cart}>
          <SvgCart width={25} height={25} />
        </Link>
      </div>

      <DrawerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};
