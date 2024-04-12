"use client";
 
import {useState} from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
 
 
export default function TanstackProvider({ children }: {children: React.ReactNode}) {
  const [client] = useState(() => new QueryClient());
 
  return (
    <QueryClientProvider client={client}>
      
      {/*<ReactQueryDevtools initialIsOpen={false} />*/}
      {children}
    </QueryClientProvider>
  );
}
 