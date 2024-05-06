'use client';
import { Roboto, Peddana, Comfortaa } from 'next/font/google';

import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const peddana = Peddana({
  weight: ['400'],
  subsets: ['latin'],
});

const comfortaa = Comfortaa({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontFamily: peddana.style.fontFamily,
    },
    h2: {
      fontFamily: comfortaa.style.fontFamily,
    },
    h3: {
      fontFamily: comfortaa.style.fontFamily,
    },
    button: {
      fontFamily: comfortaa.style.fontFamily,
    },
  },

  palette: {
    primary: {
      main: '#CDDC39',
      light: '#F9FBE7',
      dark: '#C0CA33',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFC107',
      light: '#FFD54F',
      dark: '#FFA000',
      contrastText: '#FFFFFF',
    },
  },
});

export default theme;