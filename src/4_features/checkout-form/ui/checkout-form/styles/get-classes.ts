import classNames from 'classnames/bind';
import classes from './checkout-form.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('root');
  const cnTitle = cn('title');
  const cnContact = cn('contact');
  const cnContactTitle = cn('contact__title');
  const cnContactInput = cn('contact__input');
  const cnContactSuptitle = cn('contact__suptitle');
  const cnShipping = cn('shipping');
  const cnShippingTitle = cn('shipping__title');
  const cnShippingNames = cn('shipping__names');
  const cnShippingInputNumber = cn('shipping__input__number');

  return {
    cnRoot,
    cnTitle,
    cnContact,
    cnContactInput,
    cnContactTitle,
    cnContactSuptitle,
    cnShipping,
    cnShippingTitle,
    cnShippingNames,
    cnShippingInputNumber
  };
};
