'use client';

import React, { PropsWithChildren, ReactNode } from 'react';
import { Theme, ThemeProvider, createTheme } from '@mui/material';

type Props = {
  children: ReactNode;
  theme?: Theme;
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A5C6A',
    },
  },
});

export function MuiThemeProvider({ children }: PropsWithChildren<Props>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
