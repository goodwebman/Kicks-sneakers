type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export const PaginationWidget = ({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 32,
        gap: 8,
      }}
    >
      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: 4,
          backgroundColor: currentPage === 1 ? '#f5f5f5' : 'white',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        }}
      >
        Prev
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          style={{
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: 4,
            backgroundColor: p === currentPage ? '#000' : 'white',
            color: p === currentPage ? 'white' : 'black',
            cursor: 'pointer',
          }}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: 4,
          backgroundColor: currentPage === totalPages ? '#f5f5f5' : 'white',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
        }}
      >
        Next
      </button>
    </div>
  );
};
