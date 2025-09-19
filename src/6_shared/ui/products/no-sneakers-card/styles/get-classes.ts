import classNames from 'classnames/bind';
import classes from './no-sneakers-card.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args) => {
  const cnRoot = cn('root', className);
  const cnIcon = cn('icon');
  const cnTitle = cn('title');
  const cnText = cn('text');

  return {
    cnRoot,
    cnIcon,
    cnTitle,
    cnText,
  };
};
