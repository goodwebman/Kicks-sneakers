import { Link } from 'react-router-dom';
import type { SneakerDto } from '../../model/types';

export const SneakerCard = ({ sneaker }: { sneaker: SneakerDto }) => (
  <Link to={`/sneakers/${sneaker.id}`} className="border rounded p-2">
    <img
      src={sneaker.images[0]}
      alt={sneaker.name}
      className="w-full h-40 object-cover"
    />
    <h3 className="font-bold">{sneaker.name}</h3>
    <p>{sneaker.price} ₽</p>
  </Link>
);
