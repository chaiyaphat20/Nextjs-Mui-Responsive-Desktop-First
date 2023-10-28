import { createTheme } from "@mui/material";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  weight: ['300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin']
})

const themeTypography = createTheme({
  typography:{
    fontFamily: kanit.style.fontFamily,
    fontSize: 14,
    fontWeightBold: 'normal',
  }
});

//Desktop first screen
themeTypography.typography.h1 = {
  fontSize: "5rem",
  [themeTypography.breakpoints.down("laptop")]: {
    fontSize: "3rem",
  },
  [themeTypography.breakpoints.down("tablet")]: {
    fontSize: "2rem",
  },
  [themeTypography.breakpoints.down("mobile")]: {
    fontSize: "1rem",
  },
};

export {themeTypography}