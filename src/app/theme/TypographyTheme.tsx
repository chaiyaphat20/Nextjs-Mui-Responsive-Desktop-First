import { Theme, createTheme } from "@mui/material";

export const createThemeTypography = (theme:Theme):Theme =>{
  //Desktop first screen
  theme.typography.h1 = {
    fontSize: "2.5rem",
    [theme.breakpoints.down("desktop")]: {
      fontSize: "2.25rem",
    },
    [theme.breakpoints.down("laptop")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "1.75rem",
    },
  };

  theme.typography.h2 = {
    fontSize: "1.875rem",
    [theme.breakpoints.down("desktop")]: {
      fontSize: "1.625rem",
    },
    [theme.breakpoints.down("laptop")]: {
      fontSize: "1.375rem",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "1.125rem",
    },
  };

  theme.typography.h3 = {
    fontSize: "1.5rem",
    [theme.breakpoints.down("desktop")]: {
      fontSize: "1.25rem",
    },
    [theme.breakpoints.down("laptop")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "0.75rem",
    },
  };

  theme.typography.h4 = {
    fontSize: "1.25rem",
    [theme.breakpoints.down("desktop")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("laptop")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("tablet")]: {
      fontSize: "0.5rem",
    },
  };

  return theme
}
