import classNames from 'classnames/bind';
import classes from './sneaker-card.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};
const cnButtonWrapper: React.CSSProperties = {
  marginTop: 'auto',
  display: 'flex',
  width: '100%',
};

export const getClasses = ({ className }: Args) => {
  const cnRoot = cn('card', className);
  const cnImageWrapper = cn('imageWrapper');
  const cnImage = cn('image');
  const cnBadge = cn('badge');
  const cnTitle = cn('title');
  const cnButton = cn('button');

  const cnButtonInner = cn('button_inner');
  const cnPrice = cn('price');

  return {
    cnRoot,
    cnImageWrapper,
    cnImage,
    cnBadge,
    cnTitle,
    cnPrice,
    cnButtonInner,
    cnButton,
    cnButtonWrapper,
  };
};
