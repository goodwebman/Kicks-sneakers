import type { FC, ReactNode } from 'react';
import type { ButtonSize } from '../types';
import { getClasses } from './styles/get-classes';

interface IconButtonProps {
  size?: ButtonSize;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const IconButton: FC<IconButtonProps> = ({
  size = 'medium',
  icon,
  onClick,
  className,
  disabled = false,
}) => {
  const { cnRoot, cnIcon } = getClasses({ size, className, disabled });

  return (
    <button className={cnRoot} onClick={onClick} disabled={disabled}>
      <span className={cnIcon}>{icon}</span>
    </button>
  );
};

