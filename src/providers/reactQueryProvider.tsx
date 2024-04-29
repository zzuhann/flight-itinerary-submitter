'use client';

import { PropsWithChildren, ReactNode, useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

type Props = {
  children: ReactNode;
};

export function ReactQueryProvider({ children }: PropsWithChildren<Props>) {
  const [client] = useState(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
