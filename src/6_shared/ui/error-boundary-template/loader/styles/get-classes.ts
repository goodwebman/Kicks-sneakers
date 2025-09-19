import classNames from 'classnames/bind';
import classes from './loader.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args) => {
  const cnRoot = cn('root', className);
  const cnWrapper = cn('wrapper');
  const cnCircle = cn('circle');
  const cnText = cn('text');

  return {
    cnRoot,
    cnWrapper,
    cnCircle,
    cnText,
  };
};
