export type SneakerDto = {
  id: string;
  name: string;
  price: number;
  gender: 'male' | 'female' | 'unisex';
  colors: string[];
  sizes: number[];
  categories: string[];
  images: string[];
};
