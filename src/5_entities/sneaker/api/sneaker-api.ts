import { queryOptions } from '@tanstack/react-query';
import { jsonApiInstance } from '../../../6_shared/api/json-api-instance';
import type { SneakerDto } from '../model/types';

export const sneakersApi = {
  baseKey: 'sneakers',
  getPreview: () =>
    queryOptions({
      queryKey: [sneakersApi.baseKey, 'preview'],
      queryFn: meta =>
        jsonApiInstance<SneakerDto[]>(`/sneakers?_limit=4`, {
          signal: meta.signal,
        }),
    }),

  getList: () =>
    queryOptions({
      queryKey: [sneakersApi.baseKey, 'list'],
      queryFn: meta =>
        jsonApiInstance<SneakerDto[]>(`/sneakers`, {
          signal: meta.signal,
        }),
    }),

  getSneakerById: (id: string) =>
    queryOptions({
      queryKey: [sneakersApi.baseKey, id],
      queryFn: meta =>
        jsonApiInstance<SneakerDto>(`/sneakers/${id}`, {
          signal: meta.signal,
        }),
    }),
};
