import classNames from 'classnames/bind';
import classes from './sneaker-card.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args) => {
  const cnRoot = cn('card', className);
  const cnImageWrapper = cn('imageWrapper');
  const cnImage = cn('image');
  const cnPlaceholder = cn('placeholder');
  const cnBadge = cn('badge');
  const cnTitle = cn('title');
  const cnPrice = cn('price');
  const cnButtonInner = cn('button_inner');
  const cnButtonWrapper = cn('button_wrapper');

  return {
    cnRoot,
    cnImageWrapper,
    cnImage,
    cnPlaceholder,
    cnBadge,
    cnTitle,
    cnPrice,
    cnButtonInner,
    cnButtonWrapper,
  };
};
