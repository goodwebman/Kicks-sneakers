export type SneakerDto = {
  id: number;
  name: string;
  price: number;
  gender: 'men' | 'women' | 'unisex';
  color: string[];
  sizes: number[];
  type: string;
  images: string[];
};

export type PaginatedResult<T> = {
  data: T[];
  prev: number | null;
  next: number | null;
  pages: number;
  last: number;
  first: number;
  items: number;
};
