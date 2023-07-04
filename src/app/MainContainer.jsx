'use client';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { LoadingCircle, MainLayout, Header } from '@/components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Only 1 retry when a fetch fails.
      staleTime: 1000 * 60 * 30, // 30 minutes
    },
  },
});

const MainContainer = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainLayout header={<Header />}>
        <Suspense
          fallback={
            <div className='flex-1 flex justify-center items-center animate-appear-slide-to-top-1'>
              <LoadingCircle className='text-green-300' size='medium' />
            </div>
          }
        >
          {children}
        </Suspense>
      </MainLayout>
    </QueryClientProvider>
  );
};

export { MainContainer };
