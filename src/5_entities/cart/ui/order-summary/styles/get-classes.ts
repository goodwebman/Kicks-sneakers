import classNames from 'classnames/bind';
import classes from './order-summary.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('root');
  const cnMainInfo = cn('main-info');
  const cnTitle = cn('title');
  const cnItems = cn('items');

  return {
    cnRoot,
    cnMainInfo,
    cnTitle,
    cnItems,
  };
};
