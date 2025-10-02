import { useCallback, useEffect, useMemo, useState } from 'react';

export const usePagination = <T,>(items: T[], perPage: number) => {
  const [page, setPage] = useState(0);

  const totalPages = useMemo(
    () => Math.ceil(items.length / perPage),
    [items.length, perPage],
  );

  const visibleItems = useMemo(() => {
    const start = page * perPage; 
    const end = start + perPage; 
    return items.slice(start, end);
  }, [items, page, perPage]);

  useEffect(() => {
    const lastPageIndex = Math.max(totalPages - 1, 0);
    if (page > lastPageIndex) {
      setPage(lastPageIndex);
    }
  }, [totalPages, page]);

  const handleNext = useCallback(() => {
    setPage(prev => {
      const next = prev + 1;
      return next < totalPages ? next : prev;
    });
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setPage(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToPage = useCallback(
    (p: number) => {
      const clamped = Math.min(Math.max(p, 0), Math.max(totalPages - 1, 0));
      setPage(clamped);
    },
    [totalPages],
  );

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  return {
    page,
    perPage,
    totalPages,
    visibleItems,
    handlePrev,
    handleNext,
    goToPage,
    canPrev,
    canNext,
  };
};
