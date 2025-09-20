import classNames from 'classnames/bind';
import classes from './products-filter-mobile.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  return {
    cnButton: cn('button'),
    cnModal: cn('modal'),
    cnModalHeader: cn('modalHeader'),
    cnModalContent: cn('modalContent'),
  };
};
