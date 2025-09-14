import { queryOptions } from '@tanstack/react-query';

import { jsonApiInstance } from '../../../6_shared/api/json-api-instance';
import type { PaginatedResult, SneakerDto } from '../model/types';

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

  getList: (
    page: number,
    filters: Record<string, string | number | undefined>,
  ) =>
    queryOptions({
      queryKey: [sneakersApi.baseKey, 'list', page, filters],
      queryFn: meta => {
        const params = new URLSearchParams({
          _page: String(page),
          _per_page: '12',
          ...Object.fromEntries(
            Object.entries(filters).filter(([, v]) => v !== undefined),
          ),
        });
        return jsonApiInstance<PaginatedResult<SneakerDto>>(
          `/sneakers?${params.toString()}`,
          { signal: meta.signal },
        );
      },
    }),

  getSneakerById: (id: number) => {
    queryOptions({
      queryKey: [sneakersApi.baseKey, id],
      queryFn: meta =>
        jsonApiInstance<SneakerDto>(`/sneakers/${id}`, {
          signal: meta.signal,
        }),
    });
  },
};
