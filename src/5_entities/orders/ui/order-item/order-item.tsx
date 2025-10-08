import type { CartItem } from '@entities/cart/model/types';
import { getClasses } from './styles/get-classes';

type OrderItemProps = {
  sneaker: CartItem;
  className?: string;
  onClick: () => void;
};

export const OrderItem = ({ sneaker, className, onClick }: OrderItemProps) => {
  const {
    cnRoot,
    cnImageWrapper,
    cnImage,
    cnInfo,
    cnName,
    cnMeta,
    cnMetaRow,
    cnValue,
    cnPrice,
  } = getClasses({ className });

  return (
    <div className={cnRoot} onClick={onClick}>
      <div className={cnImageWrapper}>
        <img
          src={sneaker.images[0]}
          alt={sneaker.name}
          draggable="false"
          className={cnImage}
        />
      </div>

      <div className={cnInfo}>
        <h3 className={cnName}>{sneaker.name}</h3>

        <div className={cnMeta}>
          <div className={cnMetaRow}>
            <span>Категории:</span>
            <span className={cnValue}>{sneaker.categories.join(', ')}</span>
          </div>
          <div className={cnMetaRow}>
            <span>Пол:</span>
            <span className={cnValue}>{sneaker.gender}</span>
          </div>
          <div className={cnMetaRow}>
            <span>Цвет:</span>
            <span className={cnValue}>{sneaker.color}</span>
          </div>
          <div className={cnMetaRow}>
            <span>Размер:</span>
            <span className={cnValue}>{sneaker.size}</span>
          </div>
          <div className={cnMetaRow}>
            <span>Кол-во:</span>
            <span className={cnValue}>{sneaker.quantity}</span>
          </div>
        </div>

        <div className={cnPrice}>${sneaker.price}</div>
      </div>
    </div>
  );
};
