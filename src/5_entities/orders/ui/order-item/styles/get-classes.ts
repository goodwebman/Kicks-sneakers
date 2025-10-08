import classNames from 'classnames';
import styles from './order-item.module.scss';

export const getClasses = (props?: { className?: string }) => {
  const { className } = props || {};

  return {
    cnRoot: classNames(styles.root, className),
    cnImageWrapper: styles.imageWrapper,
    cnImage: styles.image,
    cnInfo: styles.info,
    cnName: styles.name,
    cnMeta: styles.meta,
    cnMetaRow: styles.metaRow,
    cnValue: styles.value,
    cnPrice: styles.price,
  };
};
