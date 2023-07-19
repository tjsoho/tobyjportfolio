import React, { useState, useEffect } from "react";
import { Box, Grid, useMediaQuery, Switch, Button } from "@mui/material";
import tabletBG from "../assets/largeSVG.svg";
import Footer from "./Footer";
import MobileFrame from "./MobileFrame";
import MobileFrame2 from "./MobileFrame2";
import MobileFrame3 from "./MobileFrame3";
import bw from "../assets/bw.svg";
import { Link } from "react-router-dom";



const UiDesigns = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");
  const [bwMode, setBwMode] = useState(false);
  

  let boxHeight;
  let boxWidth;
  let fSize;
  let buttonw;
  let buttonPos;
  if (smallScreen) {
    boxHeight = "contain";
    boxWidth = "45vw";
    fSize = "15px";
    buttonw = "130px";
    buttonPos = -200;
  } else {
    boxHeight = "100vh";
    boxWidth = "40vw";
    fSize = "20px";
    buttonw = "250px";
     buttonPos = -250;
  }

  const handleToggle = () => {
    setBwMode(!bwMode);
  };



  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: `url(${bwMode ? bw : tabletBG})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        padding: "0 20px",
      }}
    >
      <Box position="absolute" top={0} left={0} padding={2} zIndex={1}>
        <Switch checked={bwMode} onChange={handleToggle} color="primary" />
      </Box>
      <Box position="absolute" top={0} right={0}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              marginRight: "0px",
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
      <Grid container spacing={4}>
        <Grid
          item
          xs={12} sm={12} md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* ------------------------ */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <MobileFrame />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12} sm={12} md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* ------------------------ */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <MobileFrame2 />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12} sm={12} md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* ------------------------ */}
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <MobileFrame3 />
            </Box>
          </Box>
        </Grid>
      </Grid>
      
      <Footer />
    </Box>
  );
};

export default UiDesigns;
