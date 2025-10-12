import cn from 'classnames';
import { useEffect, useState, type FC } from 'react';
import type { CartItem } from '../../../../5_entities/cart/model/types';
import type { SneakerDto } from '../../../../5_entities/sneaker/model/types';
import { Button } from '../../../../6_shared/ui/buttons/button';

import { RadioButton } from '../../../../6_shared/ui/radio-button/radio-button';

import { useDeleteSneakerModal } from '@features/sneaker-own-info/model/use-delete-sneaker-modal';
import { useAddToCart } from '../../model/use-add-to-cart';
import { useBuyNow } from '../../model/use-buy-now';
import { DeleteSneakerModal } from '../delete-sneaker-modal/delete-sneaker-modal';
import { getClasses } from './styles/get-classes';

export const SneakerOwnInfo: FC<SneakerDto> = ({
  id,
  sizes,
  colors,
  price,
  name,
  images,
  categories,
  gender,
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ состояние модалки

  const {
    cnTitle,
    cnPrice,
    cnColors,
    cnSizeList,
    cnSizeItem,
    cnSizeItemSelected,
    cnSizeItemDisabled,
    cnSizeLabel,
    cnColorLabel,
    cnActionsWrapper,
    cnSubInfo,
    cnSubInfoLabel,
    cnSubInfoParts,
    cnSubList,
  } = getClasses();

  const allSizes = Array.from({ length: 10 }, (_, i) => 38 + i);
  const { addSneakerToCart } = useAddToCart();
  const { buySneakerNow } = useBuyNow();
  const { isOpen, open, close } = useDeleteSneakerModal();

  const handleAddToCart = () => {
    if (!selectedSize) return;

    const item: CartItem = {
      sneakerId: id,
      images,
      name,
      price,
      gender,
      categories,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    };

    addSneakerToCart(item);
  };

  const handleBuyItNow = () => {
    if (!selectedSize) return;

    const item: CartItem = {
      sneakerId: id,
      images,
      name,
      price,
      gender,
      categories,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    };

    buySneakerNow(item);
  };

  const handleDelete = () => {
    // ⚙️ Здесь вставь логику удаления кроссовка
    console.log('Sneaker deleted:', id);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const firstAvailable = allSizes.find(s => sizes.includes(s)) ?? null;
    setSelectedSize(firstAvailable);
  }, [sizes]);

  return (
    <div>
      <h1 className={cnTitle}>
        {name} {categories.join(' ')}
      </h1>
      <h2 className={cnPrice}>${price}</h2>

      <h3 className={cnColorLabel}>COLOR</h3>
      <div className={cnColors}>
        {colors.map(c => (
          <RadioButton
            key={c}
            value={c}
            color={c}
            name="colors"
            checked={selectedColor === c}
            onChange={() => setSelectedColor(c)}
          />
        ))}
      </div>

      <h3 className={cnSizeLabel}>SIZE</h3>
      <div className={cnSizeList}>
        {allSizes.map(s => {
          const isAvailable = sizes.includes(s);
          const isSelected = selectedSize === s;

          return (
            <div
              key={s}
              className={cn(cnSizeItem, {
                [cnSizeItemSelected]: isSelected,
                [cnSizeItemDisabled]: !isAvailable,
              })}
              onClick={() => isAvailable && setSelectedSize(s)}
            >
              {s}
            </div>
          );
        })}
      </div>

      <div className={cnActionsWrapper}>
        <Button fullWidth variant="secondary" onClick={handleAddToCart}>
          ADD TO CART
        </Button>
        <Button fullWidth onClick={handleBuyItNow}>
          BUY IT NOW
        </Button>

        {/* ✅ Кнопка удаления */}
        <Button fullWidth onClick={() => setIsModalOpen(true)}>
          DELETE SNEAKER
        </Button>
      </div>

      <DeleteSneakerModal
        isOpen={isOpen}
        onClose={close}
        onConfirm={() => console.log('Удалено')}
        sneakerName={name}
      />

      <div className={cnSubInfo}>
        <h1 className={cnSubInfoLabel}>About the product</h1>
        <p className={cnSubInfoParts}>Shadow Navy / Army Green</p>
        <p className={cnSubInfoParts}>
          This product is excluded from all promotional discounts and offers.
        </p>
        <ul>
          <li className={cnSubList}>
            Pay over time in interest-free installments with Affirm, Klarna or
            Afterpay.
          </li>
          <li className={cnSubList}>
            Join adiClub to get unlimited free standard shipping, returns, &
            exchanges.
          </li>
        </ul>
      </div>
    </div>
  );
};
