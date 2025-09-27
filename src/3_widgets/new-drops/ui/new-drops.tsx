import { Routes } from '@shared/constants/routes';
import { Suspense, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { SneakerCardSkeleton } from '../../../5_entities/sneaker/ui/sneaker-card-skeleton/sneaker-card-skeleton';
import { SneakerPreviewList } from '../../../5_entities/sneaker/ui/sneaker-preview-list/sneaker-preview-list';
import { Button } from '../../../6_shared/ui/buttons/button';
import { getClasses } from './styles/get-classes';

type NewDropsProps = {
  className?: string;
};

export const NewDrops: FC<NewDropsProps> = ({ className }) => {
  const { cnRoot, cnTitle, cnRootInfo, cnGridContainer } = getClasses({
    className,
  });

  const navigate = useNavigate();

  return (
    <section className={cnRoot}>
      <div className={cnRootInfo}>
        <p className={cnTitle}>Don't miss out new drops</p>
        <Button
          onClick={() => navigate(Routes.sneakers.root)}
          size="large"
          title="SHOP NEW DROPS"
        />
      </div>
      <Suspense
        fallback={
          <div className={cnGridContainer}>
            {Array.from({ length: 4 }).map((_, i) => (
              <SneakerCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        <SneakerPreviewList />
      </Suspense>
    </section>
  );
};
