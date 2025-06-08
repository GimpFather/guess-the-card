import { createTheme } from "@mui/material";
import "@fontsource/lexend/300.css";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/500.css";
import "@fontsource/lexend/700.css";

const palette = {
  primary: {
    main: "#38A169",
    light: "#68D391",
    dark: "#2F855A",
  },
  secondary: {
    main: "#d32f2f",
  },
  background: {
    default: "#efefef",
    paper: "#262626",
  },
  common: {
    black: "#050D06",
    white: "#F9F9F9",
  },
  text: {
    primary: "#050D06",
    secondary: "#F9F9F9",
  },
};

export const defaultTheme = createTheme({
  palette,
  typography: {
    fontFamily: `'Lexend', sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: palette.common.white,
            border: "2px solid",
            borderRadius: "16px",
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: palette.common.black,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        autoComplete: "off",
      },
    },
  },
});
