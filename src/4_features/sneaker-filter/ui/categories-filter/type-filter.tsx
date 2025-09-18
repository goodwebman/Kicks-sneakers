import { FilterSection } from '../../../../6_shared/ui/filter-section/filter-section';
import { CATEGORIES, FILTER_LABELS, GENDERS } from '../../model/constants';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../../6_shared/redux/store';
import { Checkbox } from '../../../../6_shared/ui/checkbox/checkbox';
import { sneakerFiltersSlice } from '../../model/slice';
import { getClasses } from './styles/get-classes';

export const CategoriesFilter = () => {
  const dispatch = useAppDispatch();
  const selectedCategories = useAppSelector(
    sneakerFiltersSlice.selectors.selectCategories,
  );

  const handleToggle = (categories: string) => {
    dispatch(sneakerFiltersSlice.actions.toggleCategories(categories));
  };

  const { cnRoot } = getClasses();

  return (
    <FilterSection label={FILTER_LABELS.CATEGORY}>
      <ul className={cnRoot}>
        {CATEGORIES.map(cat => (
          <li key={cat}>
            <Checkbox
              label={cat}
              checked={selectedCategories.includes(cat.toLowerCase())}
              onChange={() => handleToggle(cat.toLowerCase())}
            />
          </li>
        ))}
      </ul>
    </FilterSection>
  );
};
