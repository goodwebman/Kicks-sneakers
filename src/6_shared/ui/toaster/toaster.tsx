import { Toaster as HotToaster } from 'react-hot-toast';
import { getClasses } from './styles/get-classes';

export const Toaster = () => {
  const { cnRoot, cnSuccess, cnError, cnDefault } = getClasses();

  return (
    <HotToaster
      position="top-right"
      toastOptions={{
        className: cnRoot,

        success: {
          className: `${cnRoot} ${cnSuccess}`,
          icon: '✅',
        },
        error: {
          className: `${cnRoot} ${cnError}`,
          icon: '❌',
        },
        blank: {
          className: `${cnRoot} ${cnDefault}`,
          icon: 'ℹ️',
        },
      }}
    />
  );
};
