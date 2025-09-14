import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getClasses } from './styles/get-classes';

export const SneakerCardSkeleton = ({ className }: { className?: string }) => {
  const {
    cnRoot,
    cnImageWrapper,
    cnImage,
    cnTitle,
    cnButtonWrapper,
    cnButton,
  } = getClasses({ className });

  return (
    <div className={cnRoot}>
      <div className={cnImageWrapper}>
        <Skeleton
          className={cnImage}
          baseColor="var(--color-skeleton-base)"
          highlightColor="var(--color-skeleton-highlight)"
        />
      </div>

      <Skeleton
        className={cnTitle}
        baseColor="var(--color-skeleton-base)"
        highlightColor="var(--color-skeleton-highlight)"
      />

      <div className={cnButtonWrapper}>
        <Skeleton
          className={cnButton}
          baseColor="var(--color-skeleton-base)"
          highlightColor="var(--color-skeleton-highlight)"
        />
      </div>
    </div>
  );
};
