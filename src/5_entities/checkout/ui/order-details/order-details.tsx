import { formatPrice } from '@entities/cart/lib/format-price';
import type { CartItem } from '@entities/cart/model/types';
import type { FC } from 'react';
import { getClasses } from './styles/get-classes';

type OrderDetailsProps = {
  sneakers: CartItem[];
};

export const OrderDetails: FC<OrderDetailsProps> = ({ sneakers }) => {
  const {
    cnRoot,
    cnImageWrapper,
    cnDetailsWrapper,
    cnDetails,
    cnDetailsFooter,
    cnDetailsMidle,
    cnDetailsTop,
    cnDetailsName,
    cnDetailsPrice,
    cnTitle,
    cnSneakers,
  } = getClasses();
  return (
    <div className={cnRoot}>
      <h1 className={cnTitle}>Order Details</h1>
      <div className={cnSneakers}>
        {sneakers.map(sneaker => (
          <div
            key={`${sneaker.sneakerId}-${sneaker.size}`}
            className={cnDetailsWrapper}
          >
            <img
              className={cnImageWrapper}
              src={sneaker.images[0]}
              alt={sneaker.name}
            />
            <div className={cnDetails}>
              <div className={cnDetailsTop}>
                <h1 className={cnDetailsName}>{sneaker.name}</h1>
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
              <span className={cnDetailsPrice}>
                ${formatPrice(sneaker.price)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
