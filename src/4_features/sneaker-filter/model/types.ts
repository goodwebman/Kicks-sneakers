export type SneakerFilterState = {
  genders: string[];
  colors: string[];
  sizes: number[];
  types: string[];
  priceRange: { from?: number; to?: number };
};
