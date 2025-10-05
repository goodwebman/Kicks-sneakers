import {
  checkoutSlice,
  clearCheckout,
  updateForm,
} from '@entities/checkout/model/slice';
import { addOrder } from '@entities/orders/module/slice';

import { clearCart } from '@entities/cart/model/slice';
import type { OrderType } from '@entities/orders/module/types';
import { userSlice } from '@entities/user/model/slice';
import { zodResolver } from '@hookform/resolvers/zod';
import { Routes } from '@shared/constants/routes';
import { useAppDispatch, useAppSelector } from '@shared/redux/store';
import {
  orderSchema,
  type OrderFormValues,
} from '@shared/utils/validation/order-schema/order-schema';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CheckoutForm } from '../checkout-form/checkout-form';
import { DeliveryOptions } from '../delivery-options/delivery-options';

export const CheckoutFormContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector(userSlice.selectors.selectUser);
  const formData = useAppSelector(checkoutSlice.selectors.selectFormData);
  const items = useAppSelector(checkoutSlice.selectors.selectCheckoutItems);

  const methods = useForm<OrderFormValues>({
    resolver: zodResolver(orderSchema),
    mode: 'onChange',
    defaultValues: formData,
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: OrderFormValues) => {
    dispatch(updateForm(data));

    const newOrder: OrderType = {
      id: uuidv4(),
      userId: user!.id,
      items,
      formData: { ...formData, ...data },
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    dispatch(addOrder(newOrder));
    dispatch(clearCart());
    dispatch(clearCheckout());
    toast.success('Заказ успешно оформлен!');

    navigate(Routes.orders);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckoutForm />
        <DeliveryOptions />
      </form>
    </FormProvider>
  );
};
