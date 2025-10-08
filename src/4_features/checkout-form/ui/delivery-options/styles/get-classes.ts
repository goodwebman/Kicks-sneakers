import classNames from 'classnames/bind';
import classes from './delivery-options.module.scss';

const cn = classNames.bind(classes);

export const getClasses = (activeOption?: string) => {
  const cnRoot = cn('root');
  const cnButton = cn('button');
  const cnTitle = cn('title');
  const cnOption = cn('option');
  const cnOptionItem = (value: string) =>
    cn('option__item', { 'option__item--active': activeOption === value });
  const cnOptionHeader = cn('option__header');
  const cnOptionTitle = cn('option__title');
  const cnOptionDescription = cn('option__description');
  const cnOptionPrice = cn('option__price');
  const cnOptionPriceFree = cn('option__price-free');
  const cnCheckboxGroup = cn('checkbox-group');

  return {
    cnRoot,
    cnButton,
    cnTitle,
    cnOption,
    cnOptionItem,
    cnOptionHeader,
    cnOptionTitle,
    cnOptionDescription,
    cnOptionPrice,
    cnOptionPriceFree,
    cnCheckboxGroup,
  };
};
