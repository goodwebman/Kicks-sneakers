export type SneakerFilterState = {
  genders: string[];
  colors: string[];
  sizes: number[];
  categories: string[];
  priceRange: { from?: number; to?: number };
};
