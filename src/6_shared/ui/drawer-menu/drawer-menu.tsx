import { Routes } from '@shared/constants/routes';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
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
        <Link to={Routes.sneakers.root} onClick={onClose}>
          <TextButton label="All sneakers 🔥" />
        </Link>
      </nav>
    </>
  );
};
