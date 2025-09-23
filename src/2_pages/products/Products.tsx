import { ProductsFilter } from '../../3_widgets/products-filter/desktop/products-filter';
import { ProductsFilterMobile } from '../../3_widgets/products-filter/mobile/products-filter-mobile';
import { SneakersListWithPagination } from '../../3_widgets/sneaker-list-with-pagination/sneaker-list-with-pagination';
import { getClasses } from './styles/get-classes';

export const ProductsPage = () => {
  const { cnRoot, cnFilterDesktop, cnFilterMobile } = getClasses();

  return (
    <section className={cnRoot}>
      <div className={cnFilterDesktop}>
        <ProductsFilter />
      </div>
      <div className={cnFilterMobile}>
        <ProductsFilterMobile />
      </div>
      <SneakersListWithPagination />
    </section>
  );
};
