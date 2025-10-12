import type { FC } from 'react';
import { getClasses } from './styles/get-styles';

interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
}

export const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  disabled = false,
  onChange,
  className,
  style,
  label,
}) => {
  const { cnRoot, cnBox, cnLabel } = getClasses({
    className,
    checked,
    disabled,
  });

  const handleClick = () => {
    if (disabled) return;
    onChange?.(!checked);
  };

  return (
    <div className={cnRoot} style={style} onClick={handleClick}>
      <div className={cnBox}></div>
      {label && <span className={cnLabel}>{label}</span>}
    </div>
  );
};
