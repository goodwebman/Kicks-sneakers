import classNames from 'classnames/bind';
import classes from './sneaker-card.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args) => {
  const cnRoot = cn('card', className);
  const cnImage = cn('card__image');
  const cnInfo = cn('card__info');
  const cnTitle = cn('card__title');
  const cnPrice = cn('card__price');
  const cnColors = cn('card__colors');
  const cnSizes = cn('card__sizes');

  return {
    cnRoot,
    cnImage,
    cnInfo,
    cnTitle,
    cnPrice,
    cnColors,
    cnSizes,
  };
};
