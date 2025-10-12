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
    cnPlaceholder,
    cnTitle,
    cnBadge,
    cnPrice,
    cnButtonWrapper,
    cnButtonInner,
  } = getClasses({ className });

  const imageUrl = sneaker.images?.[0];
  const hasImage = Boolean(imageUrl);

  return (
    <div className={cnRoot}>
      <div className={cnImageWrapper}>
        <span className={cnBadge}>New</span>

        {hasImage ? (
          <img
            draggable="false"
            className={cnImage}
            src={imageUrl}
            alt={sneaker.name}
            onError={e => {
              e.currentTarget.style.display = 'none';
              const placeholder = e.currentTarget.parentElement?.querySelector(
                `.${cnPlaceholder}`,
              ) as HTMLElement | null;
              if (placeholder) placeholder.style.display = 'flex';
            }}
          />
        ) : (
          <div className={cnPlaceholder}>Фото нет :(</div>
        )}
      </div>

      <h1 className={cnTitle}>{sneaker.name}</h1>

      <div className={cnButtonWrapper}>
        <Button onClick={onClick} variant="secondary" size="large" fullWidth>
          <div className={cnButtonInner}>
            VIEW PRODUCT – <span className={cnPrice}>${sneaker.price}</span>
          </div>
        </Button>
      </div>
    </div>
  );
};
