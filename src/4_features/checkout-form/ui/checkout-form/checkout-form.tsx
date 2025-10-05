import { Input } from '@shared/ui/input/input';
import type { OrderFormValues } from '@shared/utils/validation/order-schema/order-schema';
import { useFormContext } from 'react-hook-form';
import { getClasses } from './styles/get-classes';

export const CheckoutForm = () => {
  const {
    control,
    formState: { errors, touchedFields },
  } = useFormContext<OrderFormValues>();
  const {
    cnRoot,
    cnContact,
    cnContactInput,
    cnContactSuptitle,
    cnContactTitle,
    cnShipping,
    cnShippingTitle,
    cnTitle,
    cnShippingNames,
    cnShippingInputNumber
  } = getClasses();

  return (
    <div className={cnRoot}>
      <h2 className={cnTitle}>Login and Checkout faster</h2>

      <div className={cnContact}>
        <h1 className={cnContactTitle}>Contact Details</h1>
        <p className={cnContactSuptitle}>
          We will use these details to keep you inform about your delivery.
        </p>
        <Input
          className={cnContactInput}
          name="email"
          control={control}
          placeholder="Введите ваш email"
          error={errors.email}
          isError={!!errors.email}
          isSuccess={touchedFields.email && !errors.email}
        />
      </div>

      <div className={cnShipping}>
        <h1 className={cnShippingTitle}>Shipping Address</h1>
        <div className={cnShippingNames}>
          <Input
            name="firstName"
            control={control}
           
            placeholder="Введите имя"
            error={errors.firstName}
            isError={!!errors.firstName}
            isSuccess={touchedFields.firstName && !errors.firstName}
          />

          <Input
            name="lastName"
            control={control}
           
            placeholder="Введите фамилию"
            error={errors.lastName}
            isError={!!errors.lastName}
            isSuccess={touchedFields.lastName && !errors.lastName}
          />
        </div>

        <Input
          name="address"
          control={control}
          placeholder="Введите адрес доставки"
          error={errors.address}
          isError={!!errors.address}
          isSuccess={touchedFields.address && !errors.address}
        />

        <Input
        className={cnShippingInputNumber}
          name="phone"
          control={control}
  
          placeholder="+8 (___) ___-____"
          error={errors.phone}
          isError={!!errors.phone}
          isSuccess={touchedFields.phone && !errors.phone}
        />
      </div>
    </div>
  );
};
