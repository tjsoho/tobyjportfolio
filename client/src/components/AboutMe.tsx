import React from "react";
import { Grid, Box, useMediaQuery, Typography, Button } from "@mui/material";
import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/tabletBG.svg";
import portrait from "../assets/TobyPortraitNoBG.png";

const ContentPage = () => {
  const smallScreen = useMediaQuery("(min-width: 300px) and (max-width: 600px)");
  const mediumScreen = useMediaQuery("(min-width: 600px) and (max-width: 1350px)");
  const largeScreen = useMediaQuery("(min-width: 1350px) and (max-width: 1940px)");

  let bgSVG;
  let headingSize;
  let imageHeight;
  let imageTop;
  let imageLeft;
  if (smallScreen) {
    bgSVG = "url(" + mobileBG + ")";
    headingSize = "3rem";
    imageHeight = "300px";
    imageTop = "calc(100% - 244px)"; // Adjusted value to position the image at the bottom line
    imageLeft = "calc(65% - 125px)";
  } else if (mediumScreen || largeScreen) {
    bgSVG = "url(" + tabletBG + ")";
    headingSize = "4rem";
    imageHeight = "330px";
    imageTop = "calc(100% - 267px)";
    imageLeft = "calc(65% - 95px)";
  } else  {
    bgSVG = "url(" + tabletBG + ")";
    headingSize = "8rem";
    imageHeight = "800px";
    imageTop = "calc(100% - 649px)";
    imageLeft = "calc(65% - 50px)";
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
    justifyContent: "flex-start",
  };

  return (
    <Grid container>
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
            position: "relative",
          }}
        >
          <Box sx={glassMorphismStyles}>
            <Box>
              <div style={{ position: "relative" }}>
                <Typography
                  variant="h1"
                  sx={{ marginBottom: "10px", fontSize: headingSize }}
                >
                  About
                  <br />
                  Me.
                </Typography>
                <Button href="/menu" 
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    marginTop: "10px",
                  }}
                >
                  Menu
                </Button>
                <Box
                  sx={{
                    maxHeight: "calc(50vh - 150px)",
                    overflowY: "auto",
                    marginTop: "30px",
                  }}
                >
                  <Typography variant="body1">
                    Born with an innate passion for creation, this multifaceted
                    artist embarked on a transformative journey, exploring
                    various artistic realms.
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
                    captivating world of UX/UI design, where Toby found his true
                    creative home.
                  </Typography>
                </Box>
              </div>
            </Box>
            <img
              src={portrait}
              alt="display portrait of Toby"
              style={{
                maxWidth: "auto",
                height: imageHeight,
                position: "absolute",
                top: imageTop,
                right: "50px",
                left: imageLeft,
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContentPage;
