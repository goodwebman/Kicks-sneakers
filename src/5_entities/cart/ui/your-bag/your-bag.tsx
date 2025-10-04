import type { CartItem } from '@entities/cart/model/types';
import { useRemoveSneaker } from '@entities/cart/model/use-remove-sneaker';

import { useMinusQuantity } from '@entities/cart/model/use-minus-quantity';
import { usePlusQuantity } from '@entities/cart/model/use-plus-quantity';
import { Routes } from '@shared/constants/routes';
import SvgDarkMinus from '@shared/ui/icons/dark-minus';
import SvgDarkPlus from '@shared/ui/icons/dark-plus';
import SvgTrash from '@shared/ui/icons/trash';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from './../../lib/format-price';
import { getClasses } from './styles/get-classes';
import { YourBagEmpty } from './your-bag-empty';

type YourBagProps = {
  sneakers: CartItem[];
  isEmpty: boolean;
};

export const YourBag: FC<YourBagProps> = ({ sneakers, isEmpty }) => {
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
    cnActionsSigns,
    cnActionsSignsEmpty,
    cnDetailsPriceMobile
  } = getClasses();

  const { handleRemove } = useRemoveSneaker();
  const { handleMinus } = useMinusQuantity();
  const { handlePlus } = usePlusQuantity();
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`${Routes.sneakers.root}/${id}`);
  };

  if (isEmpty) {
    return <YourBagEmpty />;
  }

  return (
    <div className={cnRoot}>
      <div className={cnInfoWrapper}>
        <h1 className={cnTitle}>Your Bag</h1>
        <p className={cnSuptitle}>
          Items in your bag not reserved - check out now to make them yours.
        </p>
      </div>
      <div className={cnSneakers}>
        {sneakers.map(sneaker => (
          <div
            key={`${sneaker.sneakerId}-${sneaker.size}`}
            className={cnDetailsWrapper}
          >
            <img
              onClick={() => handleClick(sneaker.sneakerId)}
              className={cnImageWrapper}
              src={sneaker.images[0]}
              alt={sneaker.name}
            />
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
              <span className={cnDetailsPriceMobile}>
                ${formatPrice(sneaker.price)}
              </span>
              <div className={cnActionsWrapper}>
                {sneaker.quantity >= 2 ? (
                  <SvgDarkMinus
                    onClick={() =>
                      handleMinus({
                        sneakerId: sneaker.sneakerId,
                        color: sneaker.color,
                        size: sneaker.size,
                      })
                    }
                    className={cnActionsSigns}
                  />
                ) : (
                  <div className={cnActionsSignsEmpty}></div>
                )}

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
                <SvgDarkPlus
                  onClick={() =>
                    handlePlus({
                      sneakerId: sneaker.sneakerId,
                      color: sneaker.color,
                      size: sneaker.size,
                    })
                  }
                  className={cnActionsSigns}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
