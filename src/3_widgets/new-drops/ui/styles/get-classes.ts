import classNames from 'classnames/bind';
import classes from './new-drops.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args) => {
  const cnTitle = cn('title', className);
  const cnRoot = cn('root')
  const cnRootInfo = cn('info');
  const cnGridContainer = cn('gridContainer')

  return {
    cnTitle,
    cnRootInfo,
    cnGridContainer,
    cnRoot
  };
};
