import { type FC } from 'react';
import { TextButton } from '../buttons/text-button/text-button';
import styles from './drawer-menu.module.scss';

interface DrawerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DrawerMenu: FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlay_show : ''}`}
        onClick={onClose}
      />

      <nav className={`${styles.menu} ${isOpen ? styles.menu_open : ''}`}>
        <TextButton label="All sneakers 🔥" />
        <TextButton label="New arrivals" />
        <TextButton label="Sale" />
      </nav>
    </>
  );
};
