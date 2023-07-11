import { ThemeProvider } from "@mui/material";
import React from "react";

import theme from "./theme";
import Home from "./components/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route path="tobyjportfolio/aboutme" element={<AboutMe />} />
            <Route path="tobyjportfolio/portfolio" element={<Portfolio />} />
            <Route path="tobyjportfolio/contact" element={<ContactForm />} />
            <Route path="tobyjportfolio/menu" element={<Menu />} />
            <Route path="tobyjportfolio/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
