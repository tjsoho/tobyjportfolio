import { ThemeProvider } from "@mui/material";
import React from "react";
import ContentPage from "./components/ContentPage";
import theme from "./theme";
import Home from "./components/Home";
import "./assets/style/root.css";

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
