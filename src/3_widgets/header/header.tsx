import { type FC, useState } from 'react';
import { TextButton } from '../../6_shared/ui/buttons/text-button/text-button';
import { DrawerMenu } from '../../6_shared/ui/drawer-menu/drawer-menu';
import SvgCart from '../../6_shared/ui/icons/cart';
import SvgLogo from '../../6_shared/ui/icons/logo';
import SvgSearch from '../../6_shared/ui/icons/search';
import SvgUser from '../../6_shared/ui/icons/user';
import styles from './header.module.scss';

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.allSneakers}>
        <TextButton label="All sneakers 🔥" />
      </div>

      <button
        className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`}
        onClick={() => setIsMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <a className={styles.logo} href="/">
        <SvgLogo width={132} height={32} />
      </a>

      <div className={styles.right_side}>
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
