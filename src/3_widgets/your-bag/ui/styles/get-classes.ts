import classNames from 'classnames/bind';
import classes from './your-bag.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('root');
  const cnImageWrapper = cn('imageWrapper');
  const cnTitle = cn('title');
  const cnSuptitle = cn('suptitle');
  const cnInfoWrapper = cn('infoWrapper');
  const cnSneakers = cn('sneakers');
  const cnDetailsWrapper = cn('detailsWrapper');
  const cnDetails = cn('details');
  const cnDetailsTop = cn('details__top');
  const cnDetailsName = cn('details__top__name');
  const cnDetailsPrice = cn('details__top__price');
  const cnDetailsPriceMobile = cn('details__top__price-mobile')
  const cnDetailsMidle = cn('details__midle');
  const cnDetailsFooter = cn('details__footer');
  const cnActions = cn('actions');
  const cnActionsSigns = cn('actions__signs');
  const cnActionsSignsEmpty = cn('actions__signs-empty');
  const cnActionsWrapper = cn('actions__wrapper');
  const cnEmptyWrapper = cn('emptyWrapper');
  const cnEmptyImage = cn('emptyImage');
  const cnEmptyTitle = cn('emptyTitle');
  const cnEmptySubtitle = cn('emptySubtitle');

  return {
    cnRoot,
    cnImageWrapper,
    cnTitle,
    cnSneakers,
    cnSuptitle,
    cnInfoWrapper,
    cnDetailsWrapper,
    cnDetails,
    cnDetailsTop,
    cnDetailsMidle,
    cnDetailsFooter,
    cnDetailsName,
    cnDetailsPrice,
    cnActions,
    cnActionsWrapper,
    cnEmptyWrapper,
    cnEmptyImage,
    cnEmptyTitle,
    cnEmptySubtitle,
    cnActionsSigns,
    cnActionsSignsEmpty,
    cnDetailsPriceMobile
  };
};
