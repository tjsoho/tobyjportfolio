import React, { useState } from "react";
import { Box, Grid, Button, useMediaQuery, Switch } from "@mui/material";
import tabletBG from "../assets/largeSVG.svg";
import Footer from "./Footer";
import MobileFrame from "./MobileFrame";
import MobileFrame2 from "./MobileFrame2";
import MobileFrame3 from "./MobileFrame3";
import bw from "../assets/bw.svg";

const colors = [
  "#FFE597",
  "#919FF8",
  "#FE7075",
  "#FE555D",
  "#5B71EA",
  "#FFCF51",
];

const UiDesigns = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");
  const [bwMode, setBwMode] = useState(false);

  let boxHeight;
  let boxWidth;
  let fSize;
  let buttonw;
  if (smallScreen) {
    boxHeight = "30vh";
    boxWidth = "45vw";
    fSize = "15px";
    buttonw = "130px";
  } else {
    boxHeight = "40vh";
    boxWidth = "40vw";
    fSize = "20px";
    buttonw = "250px";
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
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0 20px",
      }}
    >
      <Box position="absolute" top={0} left={0} padding={2} zIndex={1}>
        <Switch
          checked={bwMode}
          onChange={handleToggle}
          color="primary"
        />
      </Box>
      <Grid container spacing={4}>
        <Grid
          item
          xs={4}
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
          xs={4}
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
          xs={4}
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
