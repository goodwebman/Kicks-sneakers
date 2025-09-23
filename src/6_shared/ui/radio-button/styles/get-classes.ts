
import classNames from 'classnames/bind';
import classes from './radio-button.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => ({
  cnRoot: cn('root'),
  cnInput: cn('input'),
  cnCustom: cn('custom'),
  cnLabel: cn('label'),
});
