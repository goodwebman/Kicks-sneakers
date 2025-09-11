import { type FC, useState } from 'react';
import { TextButton } from '../../6_shared/ui/buttons/text-button/text-button';
import { DrawerMenu } from '../../6_shared/ui/drawer-menu/drawer-menu';
import SvgCart from '../../6_shared/ui/icons/cart';
import SvgLogo from '../../6_shared/ui/icons/logo';
import SvgSearch from '../../6_shared/ui/icons/search';
import SvgUser from '../../6_shared/ui/icons/user';
import { getClasses } from './styles/get-classes';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cnRoot, cnAllSneakers, cnBurger, cnBurgerOpen, cnLogo, cnRightSide } =
    getClasses();

  return (
    <header className={cnRoot}>
      <div className={cnAllSneakers}>
        <TextButton label="All sneakers 🔥" />
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

      <a className={cnLogo} href="/">
        <SvgLogo width={132} height={32} />
      </a>

      <div className={cnRightSide}>
        <a href="">
          <SvgSearch width={25} height={25} />
        </a>
        <a href="">
          <SvgUser width={25} height={25} />
        </a>
        <a href="">
          <SvgCart width={25} height={25} />
        </a>
      </div>

      <DrawerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};
