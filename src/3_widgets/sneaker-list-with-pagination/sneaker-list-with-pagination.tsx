import { Suspense, useState } from 'react';
import { useFilteredSneakers } from '../../4_features/sneaker-filters/model/use-sneakers-filter';
import { SneakerCardSkeleton } from '../../5_entities/sneaker/ui/sneaker-card-skeleton/sneaker-card-skeleton';
import { SneakerCard } from '../../5_entities/sneaker/ui/sneaker-card/sneaker-card';
import { NoSneakersCard } from '../../6_shared/ui/products/no-sneakers-card/no-sneakers-card';

import { useScrollTop } from '@shared/hooks/use-scroll-top';
import { Pagination } from '../pagination/pagination';
import { getClasses } from './styles/get-styles';

export const SneakersListWithPagination = () => {
  const [page, setPage] = useState(1);

  const { data: filteredSneakers, pages } = useFilteredSneakers(page);
  const ListEmpty = filteredSneakers.length === 0;

  useScrollTop(280, [page]);

  const { cnWrapper, cnGrid } = getClasses();

  return (
    <div className={cnWrapper}>
      <Suspense
        fallback={
          <div className={cnGrid}>
            {Array.from({ length: 9 }).map((_, i) => (
              <SneakerCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        {ListEmpty ? (
          <NoSneakersCard />
        ) : (
          <div className={cnGrid}>
            {filteredSneakers.map(sneaker => (
              <SneakerCard key={sneaker.id} sneaker={sneaker} />
            ))}
          </div>
        )}
      </Suspense>
      {!ListEmpty && (
        <Pagination currentPage={page} totalPages={pages} onChange={setPage} />
      )}
    </div>
  );
};
