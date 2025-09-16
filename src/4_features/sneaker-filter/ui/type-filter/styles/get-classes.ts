import classNames from 'classnames/bind';
import classes from './footer.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
};

export const getClasses = ({ className }: Args) => {
  return {};
};
