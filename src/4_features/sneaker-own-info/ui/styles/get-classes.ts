import classNames from 'classnames/bind';
import classes from './sneaker-own-info.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  return {
    cnTitle: cn('title'),
    cnPrice: cn('price'),
    cnColors: cn('colors'),
    cnSizeList: cn('size__list'),
    cnSizeItem: cn('size__item'),
    cnSizeItemSelected: cn('size__item--selected'),
    cnSizeItemDisabled: cn('size__item--disabled'),
    cnSizeLabel: cn('size__label'),
    cnColorLabel: cn('color__label'),
    cnActionsWrapper: cn('actions__wrapper'),
    cnSubInfo: cn('subInfo'),
    cnSubInfoLabel: cn('subInfo__label'),
    cnSubInfoParts: cn('subInfo__parts'),
    cnSubList: cn('subInfo__list'),
  };
};
