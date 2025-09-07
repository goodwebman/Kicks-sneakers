import type { FC } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2025 My Company</p>
    </footer>
  );
};
