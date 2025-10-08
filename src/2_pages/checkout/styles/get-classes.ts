import classNames from 'classnames/bind';
import classes from './checkout-page.module.scss';

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn('root');
  const cnAside = cn('aside');
  const cnOrderSummaryWrapper = cn('order-summary-wrapper');
  const cnOrderDetailsWrapper = cn('order-details-wrapper');

  return {
    cnRoot,
    cnAside,
    cnOrderSummaryWrapper,
    cnOrderDetailsWrapper
  };
};
