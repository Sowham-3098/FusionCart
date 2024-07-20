import { createTheme } from "@mui/material";

export const Colors = {
  primary: "#0066cc",
  secondary: "#ffcc00",
  primaryLight: "#3399ff",
  primaryDark: "#003399",
  secondaryLight: "#ffdd33",
  secondaryDark: "#cc9900",

  // Standard colors
  white: "#ffffff",
  black: "#333333",
  grayLight: "#cccccc",
  grayDark: "#666666",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
      light: Colors.primaryLight,
      dark: Colors.primaryDark,
    },
    secondary: {
      main: Colors.secondary,
      light: Colors.secondaryLight,
      dark: Colors.secondaryDark,
    },
    background: {
      default: Colors.white,
      paper: Colors.grayLight,
    },
    text: {
      primary: Colors.black,
      secondary: Colors.grayDark,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: Colors.primary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
