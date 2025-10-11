import { useSuspenseQuery } from '@tanstack/react-query';
import { sneakersApi } from '../../../5_entities/sneaker/api/sneaker-api';
import type { SneakerDto } from '../../../5_entities/sneaker/model/types';
import { useAppSelector } from '../../../6_shared/redux/store';

export const useFilteredSneakers = (page: number) => {
  const filters = useAppSelector(state => state.sneakerFilter);

  const { data: sneakers = [] } = useSuspenseQuery({
    ...sneakersApi.getList(),
    select: data => data.toReversed(),
  });

  const filteredData = sneakers.filter((sneaker: SneakerDto) => {
    if (filters.genders.length && !filters.genders.includes(sneaker.gender)) {
      return false;
    }
    if (
      filters.colors.length &&
      !filters.colors.some(c => sneaker.colors.includes(c))
    ) {
      return false;
    }
    if (
      filters.sizes.length &&
      !filters.sizes.some(s => sneaker.sizes.includes(s))
    ) {
      return false;
    }
    if (
      filters.categories.length &&
      !filters.categories.some(c => sneaker.categories.includes(c))
    ) {
      return false;
    }
    if (filters.priceRange.from && sneaker.price < filters.priceRange.from) {
      return false;
    }
    if (filters.priceRange.to && sneaker.price > filters.priceRange.to) {
      return false;
    }
    return true;
  });

  const pageSize = 9;
  const pages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const paginated = filteredData.slice((page - 1) * pageSize, page * pageSize);

  return {
    data: paginated,
    total: filteredData.length,
    pages,
  };
};
