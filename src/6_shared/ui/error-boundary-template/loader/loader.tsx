import type { FC } from 'react';
import { getClasses } from './styles/get-classes'


interface LoaderProps {
  className?: string;
  text?: string;
}

export const Loader: FC<LoaderProps> = ({ className, text = 'LOADING...' }) => {
  const { cnRoot, cnWrapper, cnCircle, cnText } = getClasses({ className });

  return (
    <div className={cnRoot}>
      <div className={cnWrapper}>
        <div className={cnCircle}></div>
        <div className={cnCircle}></div>
        <div className={cnCircle}></div>
        <div className={cnText}>{text}</div>
      </div>
    </div>
  );
};
