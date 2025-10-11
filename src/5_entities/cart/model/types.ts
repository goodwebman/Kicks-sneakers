export type CartItem = {
  sneakerId: string;
  name: string;
  price: number;
  categories: string[];
  images: string[];
  gender: string;
  color: string;
  size: number;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};
