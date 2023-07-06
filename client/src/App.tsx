import { ThemeProvider } from "@mui/material";
import React from "react";
import ContentPage from "./components/ContentPage";
import theme from "./theme";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/style/root.css";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import Menu from "./components/Menu";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Home />} />
            <Route path="/contentpage" element={<ContentPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
