import classNames from 'classnames/bind';
import classes from './delete-sneaker-modal.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => ({
  cnRoot: cn('root'),
  cnText: cn('text'),
  cnButtons: cn('buttons'),

});
