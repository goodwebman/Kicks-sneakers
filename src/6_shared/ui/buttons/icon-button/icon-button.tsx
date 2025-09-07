import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import type { ButtonSize } from '../types';
import styles from './icon-button.module.scss';

interface IconButtonProps {
  size?: ButtonSize;
  icon: ReactNode;
  onClick?: () => void;
}

export const IconButton: FC<IconButtonProps> = ({
  size = 'medium',
  icon,
  onClick,
}) => {
  return (
    <button className={clsx(styles.button, styles[size])} onClick={onClick}>
      {icon}
    </button>
  );
};
