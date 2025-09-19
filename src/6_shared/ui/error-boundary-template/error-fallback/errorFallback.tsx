export const ErrorFallback = ({ error }: { error: Error }) => (
  <div
    style={{
      padding: '16px',
      border: '1px solid red',
      borderRadius: 8,
      background: '#ffe5e5',
      color: '#900',
      fontFamily: 'monospace',
    }}
  >
    <h2>❌ Ошибка рендера</h2>
    <p><strong>Сообщение:</strong> {error.message}</p>

    {error.stack && (
      <pre
        style={{
          marginTop: 12,
          whiteSpace: 'pre-wrap',
          background: '#fff',
          padding: 12,
          borderRadius: 4,
          fontSize: 12,
          overflowX: 'auto',
        }}
      >
        {error.stack}
      </pre>
    )}
  </div>
);
