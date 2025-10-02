import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import type { ButtonSize, ButtonVariant } from '../types';
import { getClasses } from './styles/get-classes';

type CustomButtonProps = {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  fullWidth?: boolean;
};

type ButtonProps = CustomButtonProps & ComponentPropsWithoutRef<'button'>;

export const Button: FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'primary',
  leftIcon,
  rightIcon,
  onClick,
  className,
  style,
  fullWidth = false,
  ...props
}) => {
  const { cnRoot, cnTitle, cnLeftIcon, cnRightIcon } = getClasses({
    className,
    size,
    variant,
    fullWidth,
  });

  return (
    <button className={cnRoot} style={style} onClick={onClick} {...props}>
      {leftIcon && <span className={cnLeftIcon}>{leftIcon}</span>}
      <span className={cnTitle}>{children}</span>
      {rightIcon && <span className={cnRightIcon}>{rightIcon}</span>}
    </button>
  );
};
