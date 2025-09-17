import { FilterSection } from '../../../../6_shared/ui/filter-section/filter-section';
import { FILTER_LABELS, GENDERS } from '../../model/constants';

import {
  useAppDispatch,
  useAppSelector,
} from '../../../../6_shared/redux/store';
import { Checkbox } from '../../../../6_shared/ui/checkbox/checkbox';
import { sneakerFiltersSlice } from '../../model/slice';
import { getClasses } from './styles/get-classes';

export const GenderFilter = () => {
  const dispatch = useAppDispatch();
  const selectedGenders = useAppSelector(
    sneakerFiltersSlice.selectors.selectGenders,
  );

  const handleToggle = (gender: string) => {
    dispatch(sneakerFiltersSlice.actions.toggleGender(gender));
  };

  const { cnRoot } = getClasses();

  return (
    <FilterSection label={FILTER_LABELS.GENDER}>
      <ul className={cnRoot}>
        {GENDERS.map(gender => (
          <li key={gender}>
            <Checkbox
              label={gender}
              checked={selectedGenders.includes(gender)}
              onChange={() => handleToggle(gender)}
            />
          </li>
        ))}
      </ul>
    </FilterSection>
  );
};
