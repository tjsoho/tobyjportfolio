import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFE597",
    },
    secondary: {
      main: "rgba(10, 9, 9, 0.7)",
    },
    background: {
      default: "#0C0C0C",
    },
  },
  typography: {
    fontFamily: "Lilita One, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});

export default theme;
