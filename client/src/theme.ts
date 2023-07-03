import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFE597"
    }
  },
  typography: {
    h1: { 
      color: "#red", 
      fontSize: "3rem",
      fontWeight: "bold",
    }
  }
});

export default theme;
