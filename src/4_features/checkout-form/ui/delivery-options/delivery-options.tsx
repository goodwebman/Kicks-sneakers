import { useAppDispatch } from '@shared/redux/store';

import { Button } from '@shared/ui/buttons/button';
import { Checkbox } from '@shared/ui/checkbox/checkbox';
import type { OrderFormValues } from '@shared/utils/validation/order-schema/order-schema';
import { useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { getClasses } from './styles/get-classes';
import type { DeliveryOptionsType } from '@entities/checkout/model/types'
import { setDeliveryOptions } from '@entities/checkout/model/slice'

export const DeliveryOptions = () => {
  const dispatch = useAppDispatch();

  const {
    formState: { isValid, isSubmitting },
  } = useFormContext<OrderFormValues>();

  const [option, setOption] = useState<DeliveryOptionsType>('standart');
  const [billingSame, setBillingSame] = useState(true);
  const [isTeen, setIsTeen] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const {
    cnTitle,
    cnOption,
    cnOptionItem,
    cnOptionHeader,
    cnOptionTitle,
    cnOptionDescription,
    cnOptionPrice,
    cnOptionPriceFree,
    cnCheckboxGroup,
  } = getClasses(option);

  const handleSelect = (type: DeliveryOptionsType) => {
    setOption(type);
    dispatch(
      setDeliveryOptions({
        type,
        price: type === 'standart' ? 6.99 : 0,
      })
    );
  };

  const canSubmit = useMemo(() => {
    return isValid && billingSame && isTeen && !isSubmitting;
  }, [isValid, billingSame, isTeen, isSubmitting]);

  return (
    <div>
      <h1 className={cnTitle}>Delivery Options</h1>

      <div className={cnOption}>
        <div
          className={cnOptionItem('standart')}
          onClick={() => handleSelect('standart')}
        >
          <div className={cnOptionHeader}>
            <h3 className={cnOptionTitle}>Standard Delivery</h3>
            <p className={cnOptionPrice}>$6.99</p>
          </div>
          <p className={cnOptionDescription}>
            Enter your address to see when you'll get your order
          </p>
        </div>

        <div
          className={cnOptionItem('store')}
          onClick={() => handleSelect('store')}
        >
          <div className={cnOptionHeader}>
            <h3 className={cnOptionTitle}>Collect in store</h3>
            <p className={cnOptionPriceFree}>Free</p>
          </div>
          <p className={cnOptionDescription}>Pay now, collect in store</p>
        </div>
      </div>

      <div className={cnCheckboxGroup}>
        <Checkbox
          checked={billingSame}
          onChange={setBillingSame}
          label="My billing and delivery information are the same"
        />
        <Checkbox
          checked={isTeen}
          onChange={setIsTeen}
          label="I’m 13+ years old"
        />
        <Checkbox
          checked={subscribe}
          onChange={setSubscribe}
          label="Yes, I'd like to receive emails about exclusive sales and more."
        />
      </div>

      <Button type="submit" disabled={!canSubmit} fullWidth>
        REVIEW AND PAY
      </Button>
    </div>
  );
};
