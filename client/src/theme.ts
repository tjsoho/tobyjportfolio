import { createTheme } from "@mui/material/styles";

// Create a custom theme
const theme = createTheme({
  
  palette: {
    mode: 'light',
    primary: {
      main: '#5b71ea',
      light: '#919ff8',
    },
    secondary: {
      main: '#ffcf51',
      light: '#ffe597',
    },
    background: {
      default: '#5b71ea',
    },
    text: {
      secondary: '#ffcf51',
      disabled: '#bbbaba',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Lilita One',
      fontSize: '6.6rem',
      fontWeight: 300,
    },
    h2: {
      fontFamily: 'Lilita One',
      fontWeight: 100,
    },
    button: {
      fontFamily: 'Lilita One',
      fontWeight: 200,
      backgroundColor: '#ffcf51',
    },
    h3: {
      fontSize: '2rem',
      fontFamily: 'Lilita One',
      fontWeight: 200,
    },
    h4: {
      fontWeight: 500,
      fontSize: '2rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;


