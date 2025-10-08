import classNames from 'classnames/bind';
import classes from './orders-page.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('root');
  const cnTitle = cn('title');
  const cnList = cn('list');
  const cnCard = cn('card');
  const cnSneaker = cn('sneaker')
  const cnCardInfo = cn('card-info');
  const cnOrderId = cn('order-id');
  const cnMeta = cn('meta');
  const cnStatus = (status: string) => cn('status', `status--${status}`);
  const cnItems = cn('items');
  const cnDelivery = cn('delivery');
  const cnEmpty = cn('empty')

  return {
    cnRoot,
    cnSneaker,
    cnTitle,
    cnList,
    cnCard,
    cnCardInfo,
    cnOrderId,
    cnMeta,
    cnStatus,
    cnItems,
    cnDelivery,
    cnEmpty
  };
};
