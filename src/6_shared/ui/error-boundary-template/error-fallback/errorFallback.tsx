export const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="">
    <h2>Ошибка!</h2>
    <p>{error.message}</p>
  </div>
);
