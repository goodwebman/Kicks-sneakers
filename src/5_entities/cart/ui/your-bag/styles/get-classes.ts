import classNames from 'classnames/bind';
import classes from './your-bag.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('root');
  const cnImageWrapper = cn('imageWrapper');
  const cnTitle = cn('title');
  const cnSuptitle = cn('suptitle');
  const cnInfoWrapper = cn('infoWrapper');
  const cnSneakers = cn('sneakers')
  const cnDetailsWrapper = cn('detailsWrapper');
  const cnDetails = cn('details');
  const cnDetailsTop = cn('details__top');
  const cnDetailsName = cn('details__top__name');
  const cnDetailsPrice = cn('details__top__price');
  const cnDetailsMidle = cn('details__midle');
  const cnDetailsFooter = cn('details__footer');
  const cnActions = cn('actions')
  const cnActionsWrapper = cn('actions__wrapper')
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
    cnActionsWrapper
  };
};
