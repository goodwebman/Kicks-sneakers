import { useScrollTop } from '@shared/hooks/use-scroll-top';
import { useSuspenseQuery } from '@tanstack/react-query';
import { YouMayAlsoLike } from '@widgets/you-may-also-like/you-may-also-like';
import { useParams } from 'react-router-dom';
import { SneakerOwnInfo } from '../../4_features/sneaker-own-info/ui/sneaker-own-info';
import { sneakersApi } from '../../5_entities/sneaker/api/sneaker-api';
import { SneakerPhotoPreviewer } from '../../5_entities/sneaker/ui/sneaker-photo-previewer/sneaker-photo-previewer';
import { getClasses } from './styles/get-classes';

export const SneakerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const sneakerId = id;

  const { data } = useSuspenseQuery(sneakersApi.getSneakerById(sneakerId!));

  useScrollTop(0, [id]);

  const { cnRoot } = getClasses();
  return (
    <>
      <div className={cnRoot}>
        <SneakerPhotoPreviewer images={data.images} />
        <SneakerOwnInfo {...data} />
      </div>
      <YouMayAlsoLike />
    </>
  );
};
