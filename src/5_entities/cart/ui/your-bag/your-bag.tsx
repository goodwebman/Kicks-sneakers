import type { CartItem } from '@entities/cart/model/types';
import { useRemoveSneaker } from '@entities/cart/model/use-remove-sneaker';
import SvgTrash from '@shared/ui/icons/trash';
import type { FC } from 'react';
import { formatPrice } from './../../lib/format-price';
import { getClasses } from './styles/get-classes';

type YourBagProps = {
  sneakers: CartItem[];
};

export const YourBag: FC<YourBagProps> = ({ sneakers }) => {
  const {
    cnRoot,
    cnImageWrapper,
    cnSuptitle,
    cnTitle,
    cnInfoWrapper,
    cnDetailsWrapper,
    cnDetails,
    cnDetailsFooter,
    cnDetailsMidle,
    cnDetailsTop,
    cnDetailsName,
    cnDetailsPrice,
    cnSneakers,
    cnActionsWrapper,
    cnActions,
  } = getClasses();

  const { handleRemove } = useRemoveSneaker();

  return (
    <div className={cnRoot}>
      <div className={cnInfoWrapper}>
        <h1 className={cnTitle}>Your Bag</h1>
        <p className={cnSuptitle}>
          Items in your bag not reserved- check out now to make them yours.
        </p>
      </div>
      <div className={cnSneakers}>
        {sneakers.map(sneaker => (
          <div className={cnDetailsWrapper}>
            <img className={cnImageWrapper} src={sneaker.images[0]} />
            <div className={cnDetails}>
              <div className={cnDetailsTop}>
                <h1 className={cnDetailsName}>{sneaker.name}</h1>
                <span className={cnDetailsPrice}>
                  ${formatPrice(sneaker.price)}
                </span>
              </div>
              <div className={cnDetailsMidle}>
                <h2>
                  {sneaker.gender} {sneaker.categories}
                </h2>
                <h2>{sneaker.color}</h2>
              </div>
              <div className={cnDetailsFooter}>
                <h2>Size {sneaker.size}</h2>
                <h2>Quantity {sneaker.quantity}</h2>
              </div>
              <div className={cnActionsWrapper}>
                <SvgTrash
                  onClick={() =>
                    handleRemove({
                      sneakerId: sneaker.sneakerId,
                      color: sneaker.color,
                      size: sneaker.size,
                    })
                  }
                  className={cnActions}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
