import classNames from 'classnames/bind';
import classes from './you-may-also-like.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnHeader = cn('header');
  const cnHeaderButtons = cn('header__buttons');
  const cnHeadeTitle = cn('header__title');
  const cnSneakersWrapper = cn('sneakersWrapper')
  return { cnHeader, cnHeaderButtons, cnHeadeTitle, cnSneakersWrapper };
};
