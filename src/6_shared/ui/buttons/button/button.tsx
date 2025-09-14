import type { FC, ReactNode } from 'react';
import type { ButtonSize, ButtonVariant } from '../types';
import { getClasses } from './styles/get-classes';

interface ButtonProps {
  title: string | ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  title,
  size = 'medium',
  variant = 'primary',
  leftIcon,
  rightIcon,
  onClick,
  className,
  style,
  fullWidth = false,
}) => {
  const { cnRoot, cnTitle, cnLeftIcon, cnRightIcon } = getClasses({
    className,
    size,
    variant,
    fullWidth,
  });

  return (
    <button className={cnRoot} style={style} onClick={onClick}>
      {leftIcon && <span className={cnLeftIcon}>{leftIcon}</span>}
      <p className={cnTitle}>{title}</p>
      {rightIcon && <span className={cnRightIcon}>{rightIcon}</span>}
    </button>
  );
};
