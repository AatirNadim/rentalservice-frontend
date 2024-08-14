import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 0,
      //@ts-expect-error
      notifyOnStatusChange: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const ApiProvider = (props: any) => (
  <QueryClientProvider client={queryClient}>
    {props.children}
  </QueryClientProvider>
);

export default ApiProvider;
