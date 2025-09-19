import type { FC } from 'react';
import { getClasses } from './styles/get-classes';

interface NoSneakersCardProps {
  className?: string;
}

export const NoSneakersCard: FC<NoSneakersCardProps> = ({ className }) => {
  const { cnRoot, cnIcon, cnTitle, cnText } = getClasses({ className });

  return (
    <div className={cnRoot}>
      <div className={cnIcon}>👟</div>
      <div className={cnTitle}>No sneakers found</div>
      <div className={cnText}>
        Try adjusting your filters or check back later for new arrivals.
      </div>
    </div>
  );
};
