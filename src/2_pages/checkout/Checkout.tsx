import { checkoutSlice, setUserId } from '@entities/checkout/model/slice';
import { userSlice } from '@entities/user/model/slice';
import { CheckoutFormContainer } from '@features/checkout-form/ui/checkout-form-container/checkout-form-container';
import { useAppDispatch, useAppSelector } from '@shared/redux/store';
import { OrderSummary } from '@widgets/order-summary/ui/order-summary';
import { useEffect } from 'react';

export const CheckoutPage = () => {
  const dispatch = useAppDispatch();
  const checkoutItems = useAppSelector(
    checkoutSlice.selectors.selectCheckoutItems,
  );
  const user = useAppSelector(userSlice.selectors.selectUser);

  useEffect(() => {
    if (user?.id) {
      dispatch(setUserId(user.id));
    }
  }, [user, dispatch]);
  return (
    <div>
      <OrderSummary
        sneakers={checkoutItems}
        isEmpty={checkoutItems.length === 0}
        isCheckout
      />
      <CheckoutFormContainer />
    </div>
  );
};
