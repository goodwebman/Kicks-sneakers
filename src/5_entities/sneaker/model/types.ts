export type SneakerDto = {
  id: number;
  name: string;
  price: number;
  gender: 'men' | 'women' | 'unisex';
  colors: string[];
  sizes: number[];
  categories: string[];
  images: string[];
};


