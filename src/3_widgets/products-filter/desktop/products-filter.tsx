import { CategoriesFilter } from '../../../4_features/sneaker-filters/ui/categories-filter/type-filter';
import { ColorFilter } from '../../../4_features/sneaker-filters/ui/color-filter/color-filter';
import { GenderFilter } from '../../../4_features/sneaker-filters/ui/gender-filter/gender-filter';
import PriceFilter from '../../../4_features/sneaker-filters/ui/price-filter/price-filter';
import { ResetFilter } from '../../../4_features/sneaker-filters/ui/reset-filter/reset-filter'
import { SizeFilter } from '../../../4_features/sneaker-filters/ui/size-filter/size-filter';
import { getClasses } from './styles/get-styles';

export const ProductsFilter = () => {
  const { cnRoot, cnTitle } = getClasses();

  return (
    <aside className={cnRoot}>
      <h1 className={cnTitle}>Filters</h1>
      <SizeFilter />
      <ColorFilter />
      <CategoriesFilter />
      <GenderFilter />
      <PriceFilter />
      <ResetFilter />
    </aside>
  );
};
