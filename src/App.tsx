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
import Background from "./components/Background";
import MobileFrame from "./components/MobileFrame";
import UiDesigns from "./components/UiDesigns";
import LuxeLove from "./components/LuxeLove";
import Breath from "./components/Breath";
import ProjectEmpower from "./components/ProjectEmpower";
import Chevell from "./components/Chevell";



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
      <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="menu" element={<Menu />} />
            <Route path="background" element={<Background />} />
            <Route path="mobilef" element={<MobileFrame />} />
            <Route path="uidesigns" element={<UiDesigns />} />
            <Route path="luxelove" element={<LuxeLove />} />
            <Route path="breath" element={<Breath />} />
            <Route path="projectempower" element={<ProjectEmpower />} />
            <Route path="chevell" element={<Chevell />} />
          </Routes>
        </Router>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
