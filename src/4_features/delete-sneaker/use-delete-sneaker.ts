import { sneakersApi } from '@entities/sneaker/api/sneaker-api';
import { jsonApiInstance } from '@shared/api/json-api-instance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export const useDeleteSneaker = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) =>
      await jsonApiInstance(`/sneakers/${id}`, {
        method: 'DELETE',
      }),
    onSuccess: () => {
      toast.success('The sneaker has been removed!', { position: 'top-center' });
      queryClient.invalidateQueries({ queryKey: [sneakersApi.baseKey] });
    },
  });
};
