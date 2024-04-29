'use client';

import React, { PropsWithChildren, ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

type Props = {
  children: ReactNode;
};

export function ReactQueryProvider({ children }: PropsWithChildren<Props>) {
  const [client] = React.useState(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
