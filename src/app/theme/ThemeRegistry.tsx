'use client'

import { red } from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Kanit } from 'next/font/google'
import * as React from 'react'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'
import {themeTypography} from './typography'

//>>Add type
declare module '@mui/material/styles' {
  interface Palette {
    myAwesomeColor: string
  }
  interface PaletteOptions {
    myAwesomeColor: string
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    myAwesomeColor: true
  }
}


declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  typography: themeTypography.typography,
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    myAwesomeColor: '#0A6EE1',
    error: {
      main: red.A400
    }
  }
})

//Desktop first screen
theme.typography.h1 = {
  fontSize: '5rem',
  [theme.breakpoints.down('laptop')]: {
    fontSize: '3rem',
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('mobile')]: {
    fontSize: '1rem',
  },
};

export default function ThemeRegistry({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}