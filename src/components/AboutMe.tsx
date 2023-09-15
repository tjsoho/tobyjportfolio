import { useState } from "react";
import { Grid, Box, useMediaQuery, Typography, Button, Switch } from "@mui/material";
import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/tabletBG.svg";
import portrait from "../assets/TobyPortraitNoBG.png";
import { Link } from "react-router-dom";
import bw from "../assets/bw.svg";


const AboutMe = () => {
  const smallScreen = useMediaQuery(
    "(min-width: 300px) and (max-width: 600px)"
  );
  const mediumScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 900px)"
  );
  const largeScreen = useMediaQuery(
    "(min-width: 900px) and (max-width: 1350px)"
  );
  const [bwMode, setBwMode] = useState(false);

  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  
  let headingSize;
  let imageHeight;
  let imageTop;
  let imageLeft;
  let pad;
  let textMargin;

  if (smallScreen) {
    headingSize = "3.3rem";
    imageHeight = "300px";
    imageTop = "calc(100% - 244px)"; // Adjusted value to position the image at the bottom line
    imageLeft = "calc(65% - 125px)";
    pad = "20px";
    textMargin = "0px";
  } else if (mediumScreen) {
    headingSize = "4rem";
    imageHeight = "430px";
    imageTop = "calc(100% - 348px)";
    imageLeft = "calc(65% - 151px)";
    pad = "20px";
    textMargin = "0px";
  } else if (largeScreen) {
    headingSize = "5rem";
    imageHeight = "450px";
    imageTop = "calc(100% - 365px)";
    imageLeft = "calc(65% - 70px)";
    pad = "20px";
    textMargin = "100px";
  } else {
    headingSize = "7rem";
    imageHeight = "650px";
    imageTop = "calc(100% - 526px)";
    imageLeft = "calc(65% - 90px)";
    pad = "80px";
    textMargin = "250px";
  }

  const handleToggle = () => {
    setBwMode(!bwMode);
  };



  const glassMorphismStyles = {
    backdropFilter: "blur(55px) brightness(100%)",
    background:
      "linear-gradient(180deg, rgba(239, 239, 239, 0.6) 0%, rgba(239, 239, 239, 0.08) 100%)",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "80%",
    width: "75%",
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: pad,
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
            backgroundImage: isSmallScreen
            ? `url(${bwMode ? bw : mobileBG})`
            : `url(${bwMode ? bw : tabletBG})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: 0,
            position: "relative",
          }}
        >
          <Box position="absolute" top={0} left={0} padding={2} zIndex={1}>
            <Switch checked={bwMode} onChange={handleToggle} color="primary" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginRight: "15px",
            }}
          >
            <Link to="/menu" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  width: "150px",
                  height: "45px",
                  fontSize: 20,
                  margin: "10px",
                }}
              >
                Menu
              </Button>
            </Link>
          </Box>
          <Box sx={{ ...glassMorphismStyles,  }}>
            <Box>
              <div style={{ position: "relative" }}>
                <Typography
                  variant="h1"
                  sx={{ marginBottom: "10px", marginLeft: "25px", fontSize: headingSize }}
                >
                  About
                  <br />
                  Me.
                </Typography>
                <Box
                  sx={{
                    maxHeight: "calc(50vh - 150px)",
                    overflowY: "auto",
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ marginRight: textMargin, paddingRight: "60px", paddingLeft: "25px",     overflowY: "auto", // Enable vertical scrolling
                    "&::-webkit-scrollbar": {
                      marginLeft: "0.5rem",
                      height: "0.1em", // Adjust the width of the scrollbar as needed
                      width: "0.1em", // Adjust the width of the scrollbar as needed
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "transparent", // Make the scrollbar track transparent
                    },
                    "&::-webkit-scrollbar-thumb": {
                      width: "1px",
                      background: "white", // Make the scrollbar thumb transparent
                    }, }}
                  >
                    Born with an innate passion for creation, this multifaceted
                    artist embarked on a transformative journey, exploring
                    various artistic realms.
                    <br />
                    <br />
                    With 30 years of experience as a professional musician, Toby
                    J honed his skills in crafting melodies and breathing life
                    into soulful compositions.
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

export default AboutMe;
