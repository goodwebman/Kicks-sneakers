import type { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../../6_shared/redux/store';

export const ReduxProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
