import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { CategoriesFilter } from '../../../4_features/sneaker-filters/ui/categories-filter/type-filter';
import { ColorFilter } from '../../../4_features/sneaker-filters/ui/color-filter/color-filter';
import { GenderFilter } from '../../../4_features/sneaker-filters/ui/gender-filter/gender-filter';
import PriceFilter from '../../../4_features/sneaker-filters/ui/price-filter/price-filter';
import { ResetFilter } from '../../../4_features/sneaker-filters/ui/reset-filter/reset-filter';
import { SizeFilter } from '../../../4_features/sneaker-filters/ui/size-filter/size-filter';
import { getClasses } from './styles/get-classes';

export const ProductsFilterMobile = () => {
  const { cnButton, cnModal, cnModalHeader, cnModalContent } = getClasses();
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button className={cnButton} onClick={() => setOpen(true)}>
        Filters
      </button>

      {open &&
        createPortal(
          <div className={cnModal}>
            <div className={cnModalHeader}>
              <h2>Filters</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className={cnModalContent}>
              <SizeFilter />
              <ColorFilter />
              <CategoriesFilter />
              <GenderFilter />
              <PriceFilter />
              <ResetFilter />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
