import React from 'react';
import { useSuspenseQuery, QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FetchDataFunction = () => Promise<any>;
type QueryKey = unknown;

interface DisplayDataProps {
  queryKey: QueryKey;
  fetchData: FetchDataFunction;
}

function DisplayData({ queryKey, fetchData }: DisplayDataProps) {
  const { data } = useSuspenseQuery({queryKey: [queryKey], queryFn: fetchData});
  return <div>{data.data}</div>;
}

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div>
      Error: {error.message}
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

interface DataContainerProps {
  queryKey: QueryKey;
  fetchData: FetchDataFunction;
}

export function DataContainer({ queryKey, fetchData }: DataContainerProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} FallbackComponent={ErrorFallback}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <DisplayData queryKey={queryKey} fetchData={fetchData} />
          </React.Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
