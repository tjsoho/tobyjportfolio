import React from "react";
import { Grid, Box, useMediaQuery, Typography, Button } from "@mui/material";
import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/tabletBG.svg";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import ContactForm from "./ContactForm";
import portrait from "../assets/TobyPortraitNoBG.png";

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
    background:
      "linear-gradient(180deg, rgba(239, 239, 239, 0.6) 0%, rgba(239, 239, 239, 0.08) 100%)",
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
    justifyContent: "flex-start"
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
            <Box>
              <Box>
                <div style={{ position: "relative" }}>
                  <Typography variant="h1" style={{ marginBottom: "10px" }}>
                    About
                    <br />
                    Me.
                  </Typography>
                  <Button
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      marginTop: "10px"
                    }}>
                    Menu
                  </Button>
                  <Box
                    sx={{
                      maxHeight: "calc(50vh - 200px)",
                      overflowY: "auto"
                    }}>
                    <Typography variant="body1">
                      Born with an innate passion for creation, this
                      multifaceted artist embarked on a transformative journey,
                      exploring various artistic realms.
                      <br />
                      <br />
                      With 30 years of experience as a professional musician,
                      Toby J honed his skills in crafting melodies and breathing
                      life into soulful compositions.
                      <br />
                      <br />
                      Transitioning to photography, he discovered a new lens
                      through which to capture the essence of moments and unveil
                      untold stories.
                      <br />
                      <br />
                      However, destiny had another calling, leading him to the
                      captivating world of UX/UI design, where Toby found his
                      true creative home.
                    </Typography>
                  </Box>
                </div>
              </Box>
              <img
                src={portrait}
                alt="display portrait of Toby"
                style={{
                  maxWidth: "350px",
                  height: "auto",
                  position: "absolute",
                  top: "478px",
                  left: "70px"
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContentPage;
