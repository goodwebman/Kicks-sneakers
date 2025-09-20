import SvgChevronBack from '../../6_shared/ui/icons/chevron-back';
import SvgChevronNext from '../../6_shared/ui/icons/chevron-next';
import { getClasses } from './styles/get-classes';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={getClasses().cnWrapper}>
      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={
          getClasses({
            isDisabled: currentPage === 1,
            isPrev: true,
          }).cnButton
        }
      >
        <SvgChevronBack width={20} height={20} />
        <p>Prev</p>
      </button>

      {pages.map(p => {
        if (p === 1 || p === totalPages || Math.abs(p - currentPage) <= 1) {
          return (
            <button
              key={p}
              onClick={() => onChange(p)}
              className={
                getClasses({
                  isActive: p === currentPage,
                }).cnButton
              }
            >
              {p}
            </button>
          );
        }

        if (p === currentPage - 2 || p === currentPage + 2) {
          return (
            <span key={`ellipsis-${p}`} className={getClasses().cnEllipsis}>
              ...
            </span>
          );
        }

        return null;
      })}

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={
          getClasses({
            isDisabled: currentPage === totalPages,
            isNext: true,
          }).cnButton
        }
      >
        <p>Next</p>
        <SvgChevronNext width={20} height={15} />
      </button>
    </div>
  );
};
