import classNames from 'classnames/bind';
import classes from './filter-section.module.scss';

const cn = classNames.bind(classes);

type Args = {
  className?: string;
  chevronPosition: boolean;
};

export const getClasses = ({ className, chevronPosition }: Args) => {
  const cnRoot = cn('container', className);
  const cnHeader = cn('header');
  const cnLabel = cn('label');
  const cnChevron = cn('chevron', { 'chevron--open': chevronPosition });

  return { cnRoot, cnHeader, cnLabel, cnChevron };
};
