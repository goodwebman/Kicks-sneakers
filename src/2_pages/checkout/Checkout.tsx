import { checkoutSlice, setUserId } from '@entities/checkout/model/slice';
import { OrderDetails } from '@entities/checkout/ui/order-details/order-details';
import { userSlice } from '@entities/user/model/slice';
import { CheckoutFormContainer } from '@features/checkout-form/ui/checkout-form-container/checkout-form-container';
import { useAppDispatch, useAppSelector } from '@shared/redux/store';
import { OrderSummary } from '@widgets/order-summary/ui/order-summary';
import { useEffect } from 'react';
import { getClasses } from './styles/get-classes';

export const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const checkoutItems = useAppSelector(
    checkoutSlice.selectors.selectCheckoutItems,
  );
  const user = useAppSelector(userSlice.selectors.selectUser);

  const { cnRoot, cnAside, cnOrderSummaryWrapper, cnOrderDetailsWrapper } = getClasses();

  useEffect(() => {
    if (user?.id) {
      dispatch(setUserId(user.id));
    }
  }, [user, dispatch]);

  return (
    <div className={cnRoot}>
      <CheckoutFormContainer />
      <div className={cnAside}>
        <div className={cnOrderSummaryWrapper}>
          <OrderSummary
            isCheckout
            sneakers={checkoutItems}
            isEmpty={checkoutItems.length === 0}
          />
        </div>
        <div className={cnOrderDetailsWrapper}>
          <OrderDetails sneakers={checkoutItems} />
        </div>
      </div>
    </div>
  );
};
