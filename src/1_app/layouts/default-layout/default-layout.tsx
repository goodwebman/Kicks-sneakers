import type { FC, PropsWithChildren } from 'react';

import { Footer } from '../../../3_widgets/footer/footer';
import { Header } from '../../../3_widgets/header/header';
import styles from './default-layout.module.scss';

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
