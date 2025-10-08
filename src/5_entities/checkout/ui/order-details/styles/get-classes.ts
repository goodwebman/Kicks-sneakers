import classNames from 'classnames/bind';
import classes from './order-details.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('root');
  const cnImageWrapper = cn('imageWrapper');
  const cnTitle = cn('title');
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
  


  return {
    cnRoot,
    cnImageWrapper,
    cnTitle,
    cnSneakers,
    cnDetailsWrapper,
    cnDetails,
    cnDetailsTop,
    cnDetailsMidle,
    cnDetailsFooter,
    cnDetailsName,
    cnDetailsPrice,
    cnActions,
    cnDetailsPriceMobile
  };
};
