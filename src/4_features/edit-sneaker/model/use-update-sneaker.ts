import { sneakersApi } from '@entities/sneaker/api/sneaker-api';
import { jsonApiInstance } from '@shared/api/json-api-instance';
import type { SneakerCrudFormValues } from '@shared/utils/validation/sneaker-crud-schema/sneaker-crud-schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useUpdateSneaker = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: { id: string } & SneakerCrudFormValues) => {
 
      const payload = {
        ...data,
        images: data.images ? [data.images] : undefined, 
      };

      return jsonApiInstance(`/sneakers/${data.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    },

    onSuccess: () => {
      toast.success('Кроссовок изменён!', { position: 'top-center' });
      queryClient.invalidateQueries({ queryKey: [sneakersApi.baseKey] });
    },

    onError: (err) => {
      console.error('Ошибка PATCH:', err);
      toast.error('Ошибка при изменении кроссовка!', { position: 'top-center' });
    },
  });
};
