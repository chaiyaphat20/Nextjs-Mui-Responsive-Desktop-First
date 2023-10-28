import { Theme, createTheme } from "@mui/material";
import { Kanit } from "next/font/google";



export const createThemeTypography = (theme:Theme):Theme =>{
  //Desktop first screen
  theme.typography.h1 = {
    fontSize: "2.5rem",
    [theme.breakpoints.down("laptop")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "1rem",
    },
  };

  theme.typography.h2 = {
    fontSize: "1.875rem",
    [theme.breakpoints.down("laptop")]: {
      fontSize: "1.625rem",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "1.375",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "1.125",
    },
  };

  theme.typography.h3 = {
    fontSize: "1.5rem",
    [theme.breakpoints.down("laptop")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "0.75rem",
    },
  };

  theme.typography.h4 = {
    fontSize: "1.25rem",
    [theme.breakpoints.down("laptop")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("mobile")]: {
      fontSize: "0.5rem",
    },
  };

  return theme
}
