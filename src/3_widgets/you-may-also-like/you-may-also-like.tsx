import { sneakersApi } from '@entities/sneaker/api/sneaker-api';
import { SneakerCard } from '@entities/sneaker/ui/sneaker-card/sneaker-card';
import { IconButton } from '@shared/ui/buttons/icon-button';
import SvgChevronLeft from '@shared/ui/icons/chevron-left';
import SvgChevronRight from '@shared/ui/icons/chevron-right';
import { useSuspenseQuery } from '@tanstack/react-query';
import { usePagination } from './model/use-pagination';
import { getClasses } from './styles/get-classes';
import { useNavigate } from 'react-router-dom'
import { Routes } from '@shared/constants/routes'

export const YouMayAlsoLike = () => {
  const { cnHeadeTitle, cnHeader, cnHeaderButtons, cnSneakersWrapper } =
    getClasses();

  const { data: sneakers } = useSuspenseQuery(sneakersApi.getList());

  const { visibleItems, canPrev, canNext, handlePrev, handleNext } =
    usePagination(sneakers, 4);

  const navigate = useNavigate();
  const handleClick = (sneakerId: number) => {
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
          <SneakerCard onClick={() => handleClick(sneaker.id)} sneaker={sneaker} key={sneaker.id} />
        ))}
      </div>
    </div>
  );
};
