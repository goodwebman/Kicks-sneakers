export type CartItem = {
  sneakerId: number;
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
