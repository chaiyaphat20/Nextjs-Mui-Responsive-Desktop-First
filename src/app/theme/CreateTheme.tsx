import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin']
})

export const theme = createTheme({
  typography:{
    fontFamily: kanit.style.fontFamily,
    fontSize: 14,
    fontWeightBold: 'normal',
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    myAwesomeColor: "#0A6EE1",
    error: {
      main: red.A400,
    },
  },
});
