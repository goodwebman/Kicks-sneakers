import { sneakersApi } from '@entities/sneaker/api/sneaker-api';
import type { SneakerDto } from '@entities/sneaker/model/types';
import { jsonApiInstance } from '@shared/api/json-api-instance';
import { generateId } from '@shared/lib/scripts/uuid-custom';
import type { SneakerCrudFormValues } from '@shared/utils/validation/sneaker-crud-schema/sneaker-crud-schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateSneaker = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: SneakerCrudFormValues) => {
      const defaultPreviews = [
        '/assets/preview1.png',
        '/assets/preview2.png',
        '/assets/preview3.png',
      ];
      let mainImageUrl = '';
      if (data.images instanceof File) {
        mainImageUrl = URL.createObjectURL(data.images);
      }
      const sneakerToSave: SneakerDto = {
        id: generateId(),
        ...data,
        images: [mainImageUrl, ...defaultPreviews],
      };

      const response = await jsonApiInstance<SneakerDto>('/sneakers', {
        method: 'POST',
        json: sneakerToSave,
      });

      return response;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [sneakersApi.baseKey] });
    },
  });
};
