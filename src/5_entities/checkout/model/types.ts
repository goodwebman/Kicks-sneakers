export type DeliveryOptionsType = 'standart' | 'store';

export type CheckoutFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  deliveryOptions: {
    type: DeliveryOptionsType;
    price: number;
  };
};
