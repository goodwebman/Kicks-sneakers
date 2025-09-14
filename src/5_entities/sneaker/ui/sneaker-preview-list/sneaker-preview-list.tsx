import { useSuspenseQuery } from '@tanstack/react-query';

import { sneakersApi } from '../../api/sneaker-api';
import { SneakerCard } from '../sneaker-card/sneaker-card';
import { getClasses } from './styles/get-classes';

export const SneakerPreviewList = () => {
  const { data: sneakers } = useSuspenseQuery(sneakersApi.getPreview());
  const { cnRoot } = getClasses();

  return (
    <div className={cnRoot}>
      {sneakers.map(s => (
        <SneakerCard sneaker={s} key={s.id} />
      ))}
    </div>
  );
};
