export enum FILTER_LABELS {
  COLORS = 'colors',
  GENDER = 'gender',
  SIZES = 'sizes',
  PRICE = 'price',
  CATEGORY = 'category',
}

export enum SneakerColor {
  BLUE = 'blue',
  YELLOW = 'yellow',
  DARK = 'dark',
  GREEN = 'green',
  LIGHT_DARK = 'light_dark',
  CARROT = 'carrot',
  LIGHT_GRAY = 'light_gray',
  CONCRETE = 'concrete',
  BROWN = 'brown',
  LIGHT_BROWN = 'light_brown',
}

export const SNEAKER_COLORS: SneakerColor[] = [
  SneakerColor.BLUE,
  SneakerColor.YELLOW,
  SneakerColor.DARK,
  SneakerColor.GREEN,
  SneakerColor.LIGHT_DARK,
  SneakerColor.CARROT,
  SneakerColor.LIGHT_GRAY,
  SneakerColor.CONCRETE,
  SneakerColor.BROWN,
  SneakerColor.LIGHT_BROWN,
] as const;

export const AVAILABLE_SIZES = [38, 41, 42, 44, 45, 47] as const;

export const GENDERS = ['male', 'female', 'unisex'] as const;
export const CATEGORIES = [
  'basketball',
  'casual',
  'sport',
  'classic',
  'fashion',
] as const;
