import { ProductsFilter } from '../../3_widgets/products-filter/desktop/products-filter';
import { SneakersListWithPagination } from '../../3_widgets/sneakers-list/sneaker-list-with-pagination';

export const Products = () => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <ProductsFilter />
        <SneakersListWithPagination />
      </div>
    </div>
  );
};
