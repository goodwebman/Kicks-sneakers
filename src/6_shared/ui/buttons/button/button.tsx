import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import type { ButtonSize, ButtonVariant } from '../types';
import styles from './Button.module.scss';

interface ButtonProps {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  leftIcon,
  rightIcon,
  onClick,
}) => {
  return (
    <button
      className={clsx(styles.button, styles[size], styles[variant])}
      onClick={onClick}
    >
      {leftIcon && (
        <span className={clsx(styles.icon, styles.left)}>{leftIcon}</span>
      )}
      {children}
      {rightIcon && (
        <span className={clsx(styles.icon, styles.right)}>{rightIcon}</span>
      )}
    </button>
  );
};
