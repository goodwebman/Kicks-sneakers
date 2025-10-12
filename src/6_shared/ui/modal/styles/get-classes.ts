import classNames from 'classnames/bind';
import classes from '../modal.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => ({
  cnOverlay: cn('overlay'),
  cnModal: cn('modal'),
  cnHeader: cn('header'),
  cnBody: cn('body'),
  cnClose: cn('close'),
});
