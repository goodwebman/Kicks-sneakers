import type { FC, ReactNode } from 'react';
import { getClasses } from './styles/get-classes';
import type { ButtonSize } from '../types';

interface IconButtonProps {
  size?: ButtonSize;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  /** если true — рендерится только иконка без обертки и стилей */
  iconOnly?: boolean;
  title?: string;
}

export const IconButton: FC<IconButtonProps> = ({
  size = 'medium',
  icon,
  onClick,
  className,
  disabled = false,
  iconOnly = false,
  title,
}) => {
  const { cnRoot, cnIcon, cnIconOnly } = getClasses({ size, className, disabled, iconOnly });

  if (iconOnly) {
    return (
      <span
        className={cnIconOnly}
        onClick={!disabled ? onClick : undefined}
        role="button"
        aria-disabled={disabled}
        title={title}
      >
        {icon}
      </span>
    );
  }

  return (
    <button className={cnRoot} onClick={onClick} disabled={disabled} title={title}>
      <span className={cnIcon}>{icon}</span>
    </button>
  );
};
