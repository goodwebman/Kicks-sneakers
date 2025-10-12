import { useLocation } from 'react-router-dom';
import { AddSneakerForm } from '@features/add-sneaker/ui/add-sneaker-form/add-sneaker-form';
import { EditSneakerForm } from '@features/edit-sneaker/ui/edit-sneaker-form/edit-sneaker-form'


export const AdminPage = () => {
  const location = useLocation();
  const state = location.state as { mode?: 'edit' | 'add'; sneakerId?: string };

  if (state?.mode === 'edit' && state.sneakerId) {
    return <EditSneakerForm sneakerId={state.sneakerId} />;
  }

  return <AddSneakerForm />;
};
