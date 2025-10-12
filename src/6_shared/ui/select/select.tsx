import type { FC } from 'react';
import { useState } from 'react';
import { getClasses } from './styles/get-classes';

export interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  labelClassName?: string; // ✅ добавляем сюда
}

export const Select: FC<SelectProps> = ({
  options,
  value,
  placeholder = 'Выберите значение',
  disabled = false,
  onChange,
  className,
  style,
  label,
  labelClassName, // ✅ сюда
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || '');

  const { cnRoot, cnLabel, cnTrigger, cnDropdown, cnOption } = getClasses({
    className,
    isOpen,
    disabled,
    labelClassName, // ✅ передаём сюда
  });

  const handleSelect = (val: string) => {
    setSelected(val);
    onChange?.(val);
    setIsOpen(false);
  };

  return (
    <div className={cnRoot} style={style}>
      {label && <span className={cnLabel}>{label}</span>}
      <div
        className={cnTrigger}
        onClick={() => !disabled && setIsOpen(prev => !prev)}
      >
        {selected
          ? options.find(o => o.value === selected)?.label
          : placeholder}
      </div>

      {isOpen && (
        <div className={cnDropdown}>
          {options.map(opt => (
            <div
              key={opt.value}
              className={cnOption({ active: opt.value === selected })}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
