import { useAppDispatch } from '../../../../6_shared/redux/store';
import { sneakerFiltersSlice } from '../../model/slice';
import { getClasses } from './styles/get-classes';

export const ResetFilter = () => {
  const dispatch = useAppDispatch();
  const handleResetFilters = () => {
    dispatch(sneakerFiltersSlice.actions.resetFilters());
  };

  const { cnResetButton, cnIcon } = getClasses();

  return (
    <button className={cnResetButton} onClick={handleResetFilters}>
      <span className={cnIcon}>🔄</span>
      Reset Filters
    </button>
  );
};
