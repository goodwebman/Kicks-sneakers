import type { FC } from 'react';
import type { ButtonSize } from '../types';
import { getClasses } from './styles/get-classes'


interface TextButtonProps {
  size?: ButtonSize;
  label: string;
  onClick?: () => void;
  className?: string;
}

export const TextButton: FC<TextButtonProps> = ({
  size = 'medium',
  label,
  onClick,
  className,
}) => {
  const { cnRoot } = getClasses({ className, size });

  return (
    <button className={cnRoot} onClick={onClick}>
      {label}
    </button>
  );
};
