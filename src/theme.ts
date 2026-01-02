import { createTheme, ThemeOptions } from "@mui/material";

export const baseTheme: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    background: {
      default: "linear-gradient( 200deg,  #4b6cb7 9.4%, #182848 78.4% )",
    },
  },
};

export const lightTheme = createTheme(baseTheme, {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
  },
});

export const darkTheme = createTheme(baseTheme, {
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});
