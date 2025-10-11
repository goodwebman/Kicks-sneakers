import { sneakersApi } from '@entities/sneaker/api/sneaker-api';
import { SneakerCard } from '@entities/sneaker/ui/sneaker-card/sneaker-card';
import { Routes } from '@shared/constants/routes';
import { IconButton } from '@shared/ui/buttons/icon-button';
import SvgChevronLeft from '@shared/ui/icons/chevron-left';
import SvgChevronRight from '@shared/ui/icons/chevron-right';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { usePagination } from './model/use-pagination';
import { getClasses } from './styles/get-classes';

export const YouMayAlsoLike = () => {
  const { cnHeadeTitle, cnHeader, cnHeaderButtons, cnSneakersWrapper } =
    getClasses();

  const { data: sneakers } = useSuspenseQuery(sneakersApi.getList());
  const { id: currentSneakerId } = useParams<{ id: string }>();
  const filteredSneakers = currentSneakerId
    ? sneakers.filter(s => s.id !== currentSneakerId)
    : sneakers;

  const { visibleItems, canPrev, canNext, handlePrev, handleNext } =
    usePagination(filteredSneakers, 4);

  const navigate = useNavigate();
  const handleClick = (sneakerId: string) => {
    navigate(`${Routes.sneakers.root}/${sneakerId}`);
  };

  return (
    <div>
      <div className={cnHeader}>
        <h1 className={cnHeadeTitle}>You may also like</h1>
        <div className={cnHeaderButtons}>
          <IconButton
            size="small"
            onClick={handlePrev}
            disabled={!canPrev}
            icon={<SvgChevronLeft width={20} height={20} />}
          />
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={!canNext}
            icon={<SvgChevronRight width={20} height={20} />}
          />
        </div>
      </div>

      <div className={cnSneakersWrapper}>
        {visibleItems.map(sneaker => (
          <SneakerCard
            onClick={() => handleClick(sneaker.id)}
            sneaker={sneaker}
            key={sneaker.id}
          />
        ))}
      </div>
    </div>
  );
};
