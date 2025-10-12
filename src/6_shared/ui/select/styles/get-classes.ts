import classNames from 'classnames/bind';
import classes from './select.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
  isOpen?: boolean;
  disabled?: boolean;
  labelClassName?: string;
};

export const getClasses = ({ className, isOpen, disabled, labelClassName }: Args) => {
  const cnRoot = cn('select', { disabled, open: isOpen }, className);

  const cnLabel = cn('label', labelClassName);

  const cnTrigger = cn('trigger', { disabled });
  const cnDropdown = cn('dropdown', { open: isOpen });
  const cnOption = (args?: { active?: boolean }) => cn('option', args);

  return {
    cnRoot,
    cnLabel,
    cnTrigger,
    cnDropdown,
    cnOption,
  };
};
