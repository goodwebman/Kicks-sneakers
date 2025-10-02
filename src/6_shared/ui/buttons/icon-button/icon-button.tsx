import type { FC, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';
import type { ButtonSize } from '../types'

interface IconButtonProps {
  size?: ButtonSize;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  size = 'medium',
  icon,
  onClick,
  className,
}) => {
  const { cnRoot, cnIcon } = getClasses({ size, className });

  return (
    <button className={cnRoot} onClick={onClick}>
      <span className={cnIcon}>{icon}</span>
    </button>
  );
};
