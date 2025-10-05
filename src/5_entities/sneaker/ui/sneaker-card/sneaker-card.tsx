import { Button } from '@shared/ui/buttons/button';
import type { SneakerDto } from '../../model/types';
import { getClasses } from './styles/get-classes';

type SneakerCardProps = {
  sneaker: SneakerDto;
  className?: string;
  onClick: () => void;
};

export const SneakerCard = ({
  sneaker,
  className,
  onClick,
}: SneakerCardProps) => {
  const {
    cnRoot,
    cnImageWrapper,
    cnImage,
    cnTitle,
    cnBadge,
    cnPrice,
    cnButtonWrapper,
    cnButtonInner,
  } = getClasses({ className });

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
        <Button onClick={onClick} variant="secondary" size="large" fullWidth>
          <div className={cnButtonInner}>
            VIEW PRODUCT - <span className={cnPrice}>${sneaker.price}</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
