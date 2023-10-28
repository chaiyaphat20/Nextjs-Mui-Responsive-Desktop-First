'use client'

import { red } from '@mui/material/colors'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import * as React from 'react'
import { NextAppDirEmotionCacheProvider } from './EmotionCache'
import {theme} from './CreateTheme'
import { createThemeTypography } from './TypographyTheme'

createThemeTypography(theme)

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