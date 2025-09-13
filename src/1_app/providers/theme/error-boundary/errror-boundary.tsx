import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../../../6_shared/ui/error-boundary-template/error-fallback/errorFallback';

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <ReactErrorBoundary FallbackComponent={ErrorFallback}>
    {children}
  </ReactErrorBoundary>
);
