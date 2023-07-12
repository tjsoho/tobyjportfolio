import React from "react";
import { Box, Grid, Button, useMediaQuery } from "@mui/material";
import tabletBG from "../assets/largeSVG.svg";
import { Link } from "react-router-dom";

const colors = [
  "#FFE597",
  "#919FF8",
  "#FE7075",
  "#FE555D",
  "#5B71EA",
  "#FFCF51",
];

const Menu = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");

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

  const boxStyle = {
    height: boxHeight,
    border: "1px solid white",
    borderRadius: "50px",
    width: boxWidth,
    margin: "20px",
    backdropFilter: "blur(55px) brightness(80%)",
    background:
      "linear-gradient(45deg, rgba(94, 64, 64, 0.3) 0%, rgba(64, 64, 64, 0.08) 70%)",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    fontSize: fSize,
    padding: "10px 20px",
    width: buttonw,
    height: "25%",
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundImage: `url(${tabletBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "0 20px",
      }}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* ------------------------ */}

          <Box bgcolor={colors[4]} sx={boxStyle}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Link to="/aboutme">
                <Button variant="contained" color="primary" style={buttonStyle}>
                  About Me
                </Button>
              </Link>
            </Box>
          </Box>

          {/* ------------------------ */}

          <Box bgcolor={colors[4]} sx={boxStyle}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Link to="/resume">
                <Button variant="contained" color="primary" style={buttonStyle}>
                  Resume
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          {/* ------------------------ */}

          <Box bgcolor={colors[4]} sx={boxStyle}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Link to="/portfolio">
                <Button variant="contained" color="primary" style={buttonStyle}>
                  Portfolio
                </Button>
              </Link>
            </Box>
          </Box>

          {/* ------------------------ */}

          <Box bgcolor={colors[4]} sx={boxStyle}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Link to="/contact">
                <Button variant="contained" color="primary" style={buttonStyle}>
                  Contact Me
                </Button>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Menu;
