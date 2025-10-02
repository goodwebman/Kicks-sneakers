import { useScrollTop } from '@shared/hooks/use-scroll-top';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../../../6_shared/constants/routes';
import { Button } from '../../../../6_shared/ui/buttons/button';
import type { SneakerDto } from '../../model/types';
import { getClasses } from './styles/get-classes';

export const SneakerCard = ({
  sneaker,
  className,
}: {
  sneaker: SneakerDto;
  className?: string;
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${Routes.sneakers.root}/${sneaker.id}`);
  };
  const {
    cnRoot,
    cnImageWrapper,
    cnImage,
    cnTitle,
    cnBadge,
    cnPrice,
    cnButtonWrapper,
    cnButtonInner,
  } = getClasses({
    className,
  });


  return (
    <div className={cnRoot}>
      <div className={cnImageWrapper}>
        <span className={cnBadge}>New</span>
        <img
          draggable="false"
          className={cnImage}
          src={sneaker.images[0]}
          alt={sneaker.name}
        />
      </div>

      <h1 className={cnTitle}>
        {sneaker.name} {sneaker.categories}
      </h1>
      <div style={cnButtonWrapper}>
        <Button
          onClick={handleClick}
          variant="secondary"
          size="large"
          fullWidth
        >
          <div className={cnButtonInner}>
            VIEW PRODUCT - <span className={cnPrice}>${sneaker.price}</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
