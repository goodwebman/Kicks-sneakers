import { Link } from 'react-router-dom';
import type { SneakerDto } from '../../model/types';
import { getClasses } from './style/get-classes';

export const SneakerCard = ({
  sneaker,
  className,
}: {
  sneaker: SneakerDto;
  className: string;
}) => {
  const { cnRoot, cnImage, cnInfo, cnTitle, cnPrice, cnColors, cnSizes } =
    getClasses({ className });
  return (
    <Link to={`/sneakers/${sneaker.id}`} className={cnRoot}>
      <img src={sneaker.images[0]} alt={sneaker.name} className={cnImage} />
      <div className={cnInfo}>
        <h3 className={cnTitle}>{sneaker.name}</h3>
        <p className={cnPrice}>${sneaker.price}</p>
        <p className={cnColors}>Цвета: {sneaker.colors.join(', ')}</p>
        <p className={cnSizes}>Размеры: {sneaker.sizes.join(', ')}</p>
      </div>
    </Link>
  );
};
