import { ThemeProvider } from "@mui/material";
import React from "react";
import ContentPage from "./components/ContentPage";
import theme from "./theme";
import Home from "./components/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <ContentPage />
        {/* <Home /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
