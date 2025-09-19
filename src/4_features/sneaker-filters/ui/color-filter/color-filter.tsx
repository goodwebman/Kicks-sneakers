import {
  useAppDispatch,
  useAppSelector,
} from '../../../../6_shared/redux/store';
import { FilterSection } from '../../../../6_shared/ui/filter-section/filter-section';
import { FILTER_LABELS, SNEAKER_COLORS } from '../../model/constants';
import { sneakerFiltersSlice } from '../../model/slice';
import { getClasses } from './styles/get-classes';

export const ColorFilter = () => {
  const dispatch = useAppDispatch();
  const selectedColors = useAppSelector(
    sneakerFiltersSlice.selectors.selectColors,
  );

  const toggleColor = (color: string) => {
    dispatch(sneakerFiltersSlice.actions.toggleColor(color));
  };

  const { cnColorList, getColorItem } = getClasses({selectedColors});

  return (
    <FilterSection label={FILTER_LABELS.COLORS}>
      <ul className={cnColorList}>
        {SNEAKER_COLORS.map(color => (
          <li
            key={color}
            className={getColorItem(color)}
            onClick={() => toggleColor(color)}
          />
        ))}
      </ul>
    </FilterSection>
  );
};
