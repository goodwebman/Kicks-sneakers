import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React, { useCallback, useEffect, useState } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../6_shared/redux/store';
import { FilterSection } from '../../../../6_shared/ui/filter-section/filter-section';
import { FILTER_LABELS } from '../../model/constants';
import { sneakerFiltersSlice } from '../../model/slice';
import { getClasses } from './styles/get-classes';

const DEBOUNCE_DELAY = 200;

const PriceFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const priceRange = useAppSelector(
    sneakerFiltersSlice.selectors.selectPriceRange
  );

  const min = 0;
  const max = 1000;

 
  const [localValue, setLocalValue] = useState<[number, number]>([
    priceRange.from ?? min,
    priceRange.to ?? max,
  ]);


  useEffect(() => {
    setLocalValue([priceRange.from ?? min, priceRange.to ?? max]);
  }, [priceRange.from, priceRange.to]);


  const handleChange = useCallback((newValue: number | number[]) => {
    if (Array.isArray(newValue) && newValue.length === 2) {
      setLocalValue([newValue[0], newValue[1]]);
    }
  }, []);


  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(
        sneakerFiltersSlice.actions.setPriceRange({
          from: localValue[0],
          to: localValue[1],
        })
      );
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(handler);
  }, [localValue, dispatch]);

  const { cnContainer, cnValues, cnSlider } = getClasses();

  return (
    <FilterSection label={FILTER_LABELS.PRICE}>
      <div className={cnContainer}>
        <Slider
          range
          min={min}
          max={max}
          value={localValue}
          onChange={handleChange}
          className={cnSlider}
        />
        <div className={cnValues}>
          <span>${localValue[0]}</span>
          <span>${localValue[1]}</span>
        </div>
      </div>
    </FilterSection>
  );
};

export default PriceFilter;
