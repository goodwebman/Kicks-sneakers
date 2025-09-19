import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../6_shared/redux/store';
import { FilterSection } from '../../../../6_shared/ui/filter-section/filter-section';
import { FILTER_LABELS } from '../../model/constants';
import { sneakerFiltersSlice } from '../../model/slice';
import { getClasses } from './styles/get-classes';

const PriceFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const priceRange = useAppSelector(
    sneakerFiltersSlice.selectors.selectPriceRange,
  );

  const min = 0;
  const max = 1000;
  const value: [number, number] = [
    priceRange.from ?? min,
    priceRange.to ?? max,
  ];

  const handleChange = (newValue: number | number[]) => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      dispatch(
        sneakerFiltersSlice.actions.setPriceRange({
          from: newValue[0],
          to: newValue[1],
        }),
      );
    }
  };

 const { cnContainer, cnValues, cnSlider} = getClasses();
  return (
    <FilterSection label={FILTER_LABELS.PRICE}>
      <div className={cnContainer}>
        <Slider
          range
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          className={cnSlider}
        />
        <div className={cnValues}>
          <span>${value[0]}</span>
          <span>${value[1]}</span>
        </div>
      </div>
    </FilterSection>
  );
};

export default PriceFilter;
