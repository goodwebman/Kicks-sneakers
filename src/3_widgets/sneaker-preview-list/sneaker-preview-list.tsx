import { useSuspenseQuery } from '@tanstack/react-query';

import { sneakersApi } from '@entities/sneaker/api/sneaker-api';
import { SneakerCard } from '@entities/sneaker/ui/sneaker-card/sneaker-card';
import { Routes } from '@shared/constants/routes';
import { useNavigate } from 'react-router-dom';
import { getClasses } from './styles/get-classes';

export const SneakerPreviewList = () => {
  const { data: sneakers } = useSuspenseQuery(sneakersApi.getPreview());
  const { cnRoot } = getClasses();

  const navigate = useNavigate();
  const handleClick = (sneakerId: string) => {
    navigate(`${Routes.sneakers.root}/${sneakerId}`);
  };

  return (
    <div className={cnRoot}>
      {sneakers.map(s => (
        <SneakerCard onClick={() => handleClick(s.id)} sneaker={s} key={s.id} />
      ))}
    </div>
  );
};
