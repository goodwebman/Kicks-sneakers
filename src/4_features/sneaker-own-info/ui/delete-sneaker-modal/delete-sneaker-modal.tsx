import { Button } from '@shared/ui/buttons/button';
import { Modal } from '@shared/ui/modal/modal';
import { type FC } from 'react';
import { getClasses } from './styles/get-classes';

type DeleteSneakerModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  sneakerName?: string;
};

export const DeleteSneakerModal: FC<DeleteSneakerModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  sneakerName,
}) => {
  const { cnRoot, cnText, cnButtons } = getClasses();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Подтверждение удаления">
      <div className={cnRoot}>
        <p className={cnText}>
          Вы уверены, что хотите удалить{' '}
          <b>{sneakerName || 'этот кроссовок'}</b>?
        </p>

        <div className={cnButtons}>
          <Button  variant="danger" onClick={onConfirm}>
            Удалить
          </Button>
          <Button  variant="secondary" onClick={onClose}>
            Отмена
          </Button>
        </div>
      </div>
    </Modal>
  );
};
