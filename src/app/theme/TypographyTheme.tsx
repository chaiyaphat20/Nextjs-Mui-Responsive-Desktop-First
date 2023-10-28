import { Theme, createTheme } from "@mui/material";
import { Kanit } from "next/font/google";



export const createThemeTypography = (theme:Theme):Theme =>{
  //Desktop first screen
  theme.typography.h1 = {
    fontSize: "5rem",
    [theme.breakpoints.down("laptop")]: {
      fontSize: "3rem",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "1rem",
    },
  };
  return theme
}
