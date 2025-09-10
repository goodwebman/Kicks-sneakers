import clsx from 'clsx';
import type { FC } from 'react';
import type { ButtonSize } from '../types';
import styles from './text-button.module.scss';

interface TextButtonProps {
  size?: ButtonSize;
  label: string;
  onClick?: () => void;
}

export const TextButton: FC<TextButtonProps> = ({
  size = 'medium',
  label,
  onClick,
}) => {
  return (
    <button className={clsx(styles.button, styles[size])} onClick={onClick}>
      {label}
    </button>
  );
};
