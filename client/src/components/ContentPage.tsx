import React from "react";
import { Grid, Box, useMediaQuery } from "@mui/material";
import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/tabletBG.svg";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";

const ContentPage = () => {
  const smallScreen = useMediaQuery(
    "(min-width: 300px) and (max-width: 600px)"
  );
  const mediumScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 1350px)"
  );

  let bgSVG;
  if (smallScreen) {
    bgSVG = "url(" + mobileBG + ")";
  } else if (mediumScreen) {
    bgSVG = "url(" + tabletBG + ")";
  } else {
    bgSVG = "url(" + tabletBG + ")";
  }

  const glassMorphismStyles = {
    backdropFilter: "blur(55px) brightness(100%)",
    background: "linear-gradient(180deg, rgba(239, 239, 239, 0.6) 0%, rgba(239, 239, 239, 0.08) 100%)",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "85%",
    width: "75%",
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "20px",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  };

  return (
    <Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            backgroundImage: bgSVG,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: 0,
            position: "relative"
          }}>
          <Box sx={glassMorphismStyles}>
            <AboutMe />
            {/* <Portfolio /> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContentPage;
