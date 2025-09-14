import classNames from 'classnames/bind';
import classes from './sneaker-preview-list.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('previewList');

  return {
    cnRoot,
  };
};
