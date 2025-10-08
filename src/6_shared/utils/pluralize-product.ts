export const pluralizeProduct = (count: number): string => {
  const mod10 = count % 10;
  const mod100 = count % 100;

  let word = 'товаров';

  if (mod10 === 1 && mod100 !== 11) {
    word = 'товар';
  } else if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) {
    word = 'товара';
  }

  return `${count} ${word}`;
};
