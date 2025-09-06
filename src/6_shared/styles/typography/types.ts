export type TextStyle = {
  fontFamily: string;
  fontWeight: number | string;
  fontSize: number;
};

export type HeadlineTypography = {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  h7: TextStyle;
  h8: TextStyle;
};

export type BodyTypography = {
  b1: TextStyle;
  b2: TextStyle;
  b3: TextStyle;
  b4: TextStyle;
  b5: TextStyle;
  b6: TextStyle;
  b7: TextStyle;
  b8: TextStyle;
  b9: TextStyle;
};

export type Typography = {
  headline: HeadlineTypography;
  bodyRegular: BodyTypography;
  bodySemibold: BodyTypography;
};