import { Suspense, useState } from 'react';
import { useFilteredSneakers } from '../../4_features/sneaker-filters/model/use-sneakers-filter';
import { SneakerCardSkeleton } from '../../5_entities/sneaker/ui/sneaker-card-skeleton/sneaker-card-skeleton';
import { SneakerCard } from '../../5_entities/sneaker/ui/sneaker-card/sneaker-card';
import { NoSneakersCard } from '../../6_shared/ui/products/no-sneakers-card/no-sneakers-card';
import { PaginationWidget } from '../pagination/pagination';

export const SneakersListWithPagination = () => {
  const [page, setPage] = useState(1);
  const { data: filteredSneakers, pages } = useFilteredSneakers(page);

  return (
    <div style={{ maxWidth: 1500, margin: '0 auto', padding: 20 }}>
      <Suspense
        fallback={
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: 20,
            }}
          >
            {Array.from({ length: 9 }).map((_, i) => (
              <SneakerCardSkeleton key={i} />
            ))}
          </div>
        }
      >
        {filteredSneakers.length === 0 ? (
          <NoSneakersCard />
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginTop: 20,
            }}
          >
            {filteredSneakers.map(sneaker => (
              <SneakerCard key={sneaker.id} sneaker={sneaker} />
            ))}
          </div>
        )}
      </Suspense>

      <PaginationWidget
        currentPage={page}
        totalPages={pages}
        onChange={setPage}
      />
    </div>
  );
};
