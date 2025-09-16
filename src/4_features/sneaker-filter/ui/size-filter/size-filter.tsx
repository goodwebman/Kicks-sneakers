import {
  useAppDispatch,
  useAppSelector,
} from '../../../../6_shared/redux/store';
import { FilterSection } from '../../../../6_shared/ui/filter-section/filter-section';
import { AVAILABLE_SIZES, FILTER_LABELS } from '../../model/constants';
import { sneakerFiltersSlice } from '../../model/slice';
import { getClasses } from './styles/get-classes';


export const SizeFilter = () => {
  const dispatch = useAppDispatch();
  const selectedSizes = useAppSelector(
    sneakerFiltersSlice.selectors.selectSizes,
  );

  const toggleSize = (size: number) => {
    if (AVAILABLE_SIZES.includes(size)) {
      dispatch(sneakerFiltersSlice.actions.toggleSize(size));
    }
  };

  const { cnSizeList, getSizeItem } = getClasses({
    selectedSizes,
    availableSizes: AVAILABLE_SIZES,
  });

  const allSizes = Array.from({ length: 10 }, (_, i) => 38 + i);

  return (
    <FilterSection label={FILTER_LABELS.SIZES}>
      <ul className={cnSizeList}>
        {allSizes.map(size => (
          <li
            key={size}
            className={getSizeItem(size)}
            onClick={() => toggleSize(size)}
          >
            {size}
          </li>
        ))}
      </ul>
    </FilterSection>
  );
};
