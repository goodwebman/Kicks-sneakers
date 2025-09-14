import classNames from 'classnames/bind';
import classes from './sneaker-card-skeleton.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args) => {
  const cnRoot = cn('skeletonCard', className);
  const cnImageWrapper = cn('imageWrapper');

  const cnImage = cn('imageSkeleton');
  const cnTitle = cn('titleSkeleton');
  const cnButtonWrapper = cn('buttonWrapper');
  const cnButton = cn('buttonSkeleton');

  return {
    cnRoot,
    cnImageWrapper,
    cnImage,
    cnTitle,
    cnButtonWrapper,
    cnButton,
  };
};
