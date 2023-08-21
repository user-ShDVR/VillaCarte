'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query'; // Импортируем Hydrate
import { useState } from 'react';

interface QueryClientProviderWrapperProps {
    children: React.ReactNode;
}

export const QueryClientProviderWrapper: React.FC<
    QueryClientProviderWrapperProps
> = ({ children }) => {
    // const queryClient = new QueryClient();
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate>{children}</Hydrate>
        </QueryClientProvider>
    );
};
