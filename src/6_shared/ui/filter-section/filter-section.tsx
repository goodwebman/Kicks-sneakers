import { useState, type ReactNode } from 'react';
import { getClasses } from './styles/get-styles'
import SvgChevronUp from '../icons/chevron-up'


type FilterSectionProps = {
  label: string;
  children: ReactNode;
  className?: string;
};

export const FilterSection = ({ label, children, className }: FilterSectionProps) => {
  const [visible, setVisible] = useState(true);

  const { cnRoot, cnHeader, cnLabel, cnChevron } = getClasses({
    chevronPosition: visible,
    className,
  });

  return (
    <div className={cnRoot}>
      <div className={cnHeader} onClick={() => setVisible(prev => !prev)}>
        <h1 className={cnLabel}>{label.toUpperCase()}</h1>
        <SvgChevronUp className={cnChevron} />
      </div>

      {visible && <div>{children}</div>}
    </div>
  );
};
