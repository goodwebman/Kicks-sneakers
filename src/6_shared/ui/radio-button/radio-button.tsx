import type { FC, InputHTMLAttributes } from 'react';
import { getClasses } from './styles/get-classes';

type Props = {
  label?: string;
  color?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const RadioButton: FC<Props> = ({ label, color, ...props }) => {
  const { cnRoot, cnInput, cnCustom, cnLabel } = getClasses();

  return (
    <label className={cnRoot}>
      <input type="radio" className={cnInput} {...props} />
      <span
        className={cnCustom}
        style={color ? { backgroundColor: `var(--color-${color})` } : {}}
      />
      {label && <span className={cnLabel}>{label}</span>}
    </label>
  );
};
