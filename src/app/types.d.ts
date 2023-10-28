declare global {
  declare module "@mui/material/styles" {
    interface Palette {
      myAwesomeColor: string;
    }
    interface PaletteOptions {
      myAwesomeColor: string;
    }
  }

  declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
      myAwesomeColor: true;
    }
  }

  declare module "@mui/material/styles" {
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
}