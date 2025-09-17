import classNames from 'classnames/bind';
import classes from './checkbox.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
};

export const getClasses = ({ className, checked, disabled }: Args) => {
  const cnRoot = cn('checkbox', { disabled }, className);
  const cnBox = cn('box', { checked, disabled });
 
  const cnLabel = cn('label');

  return {
    cnRoot,
    cnBox,
   
    cnLabel,
  };
};