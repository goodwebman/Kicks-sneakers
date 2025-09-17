import { ColorFilter } from '../../4_features/sneaker-filter/ui/color-filter/color-filter';
import { SizeFilter } from '../../4_features/sneaker-filter/ui/size-filter/size-filter';
import { LimitedDiscount } from '../../6_shared/ui/products/limited-discount/limited-discount';

export const Products = () => {
  return (
    <>
      <LimitedDiscount />
      <ColorFilter />
      <SizeFilter />
    </>
  );
};
