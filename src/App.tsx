import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { DataContainer } from "./DataContainer";
import { fetchSuccess, fetchFailure, fetchLoading } from "./queries";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
        },
    },
});

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <h2>Success Scenario</h2>
                <DataContainer queryKey="success" fetchData={fetchSuccess} />

                <h2>Failure Scenario</h2>
                <DataContainer queryKey="failure" fetchData={fetchFailure} />

                <h2>Loading Scenario</h2>
                <DataContainer queryKey="loading" fetchData={fetchLoading} />
            </div>
        <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
    );
}
