import { useEffect } from 'react';

export const useScrollTop = (value: number = 0, deps: unknown[] = []) => {
  useEffect(() => {
    window.scrollTo({ top: value, behavior: 'auto' });
  }, deps);
};