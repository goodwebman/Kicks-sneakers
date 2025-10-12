import { type FC, type ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getClasses } from './styles/get-classes'


type Props = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export const Modal: FC<Props> = ({ isOpen, onClose, title, children }) => {
  const { cnOverlay, cnModal, cnHeader, cnBody, cnClose } = getClasses();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (typeof document === 'undefined') return null;
  const modalRoot = document.getElementById('modal-root') || document.body;

  return isOpen
    ? ReactDOM.createPortal(
        <div className={cnOverlay} onClick={onClose}>
          <div
            className={cnModal}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <div className={cnHeader}>
                <h2>{title}</h2>
                <button className={cnClose} onClick={onClose}>
                  ✕
                </button>
              </div>
            )}
            <div className={cnBody}>{children}</div>
          </div>
        </div>,
        modalRoot
      )
    : null;
};
