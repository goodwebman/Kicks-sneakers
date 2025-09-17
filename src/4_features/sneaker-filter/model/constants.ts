export enum FILTER_LABELS {
  COLORS = 'colors',
  GENDER = 'gender',
  SIZES = 'sizes',
  PRICE = 'price',
  TYPE = 'type',
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
];

export const AVAILABLE_SIZES = [38, 41, 42, 44, 45, 47];

export const GENDERS = ['Male', 'Female'];
