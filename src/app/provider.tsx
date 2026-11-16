import React from "react";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { QueryClient } from "@tanstack/react-query"
import { storage } from "../persister";

interface ChildrenProps {
  children: React.ReactNode;
}


const persister = createAsyncStoragePersister({
  storage,
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 60 * 24 * 15,
    }
  }
})

export default function AppProvider({children}: ChildrenProps) {
  return (
    <PersistQueryClientProvider client={queryClient} persistOptions={{
      persister,
      maxAge: 1000 * 60 * 60 * 24 * 15,
    }}
    >
      {children}
    </PersistQueryClientProvider>
  )
}