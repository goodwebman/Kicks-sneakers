import { useScrollTop } from '@shared/hooks/use-scroll-top';
import { LimitedDiscount } from '@shared/ui/products/limited-discount/limited-discount';
import { ProductsFilter } from '@widgets/products-filter/desktop/products-filter';
import { ProductsFilterMobile } from '@widgets/products-filter/mobile/products-filter-mobile';
import { SneakersListWithPagination } from '@widgets/sneaker-list-with-pagination/sneaker-list-with-pagination';
import { getClasses } from './styles/get-classes';

export const ProductsPage = () => {
  const { cnRoot, cnFilterDesktop, cnFilterMobile, cnDiscountWrapper } =
    getClasses();

  useScrollTop();

  return (
    <section>
      <div className={cnDiscountWrapper}>
        <LimitedDiscount />
      </div>
      <div className={cnRoot}>
        <div className={cnFilterDesktop}>
          <ProductsFilter />
        </div>

        <div className={cnFilterMobile}>
          <ProductsFilterMobile />
        </div>
        <SneakersListWithPagination />
      </div>
    </section>
  );
};
