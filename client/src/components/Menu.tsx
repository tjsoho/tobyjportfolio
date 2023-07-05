import React from "react";
import { Box, Grid, Button, useMediaQuery } from "@mui/material";

const colors = [
  "#FFE597",
  "#919FF8",
  "#FE7075",
  "#FE555D",
  "#5B71EA",
  "#FFCF51"
];

const Menu = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");

  let boxHeight;
  if (smallScreen) {
    boxHeight = "33.33vh";
  } else {
    boxHeight = "33.33vh";
  }

  const boxStyle = {
    height: boxHeight,
    border: "10px solid white",
    borderRadius: "50px"
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    fontSize: "20px",
    padding: "10px 20px",
    width: "100%",
    maxWidth: "250px"
  };

  return (
    <Box sx={{
      padding: "20px"
    }}>
      <Grid container>
        <Grid item xs={6} display="flex" flexDirection="column">
          <Box bgcolor={colors[1]} sx={boxStyle}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <Button href="/aboutme" variant="contained" color="primary" style={buttonStyle}>
                About Me
              </Button>
            </Box>
          </Box>

          <Box bgcolor={colors[4]} sx={boxStyle}>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <Button variant="contained" color="primary" style={buttonStyle}>
                My Button
              </Button>
            </Box> */}
          </Box>
          <Box bgcolor={colors[1]} sx={boxStyle}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <Button href="/resume" variant="contained" color="primary" style={buttonStyle}>
                Resume
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* GRID TWO */}
        <Grid item xs={6} display="flex" flexDirection="column">
          <Box bgcolor={colors[4]} sx={boxStyle}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <Button href="/portfolio" variant="contained" color="primary" style={buttonStyle}>
                Portfolio
              </Button>
            </Box>
          </Box>
          <Box bgcolor={colors[1]} sx={boxStyle}>
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <Button variant="contained" color="primary" style={buttonStyle}>
                My Button
              </Button>
            </Box> */}
          </Box>
          <Box bgcolor={colors[4]} sx={boxStyle}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
              }}
            >
              <Button href="/contact" variant="contained" color="primary" style={buttonStyle}>
                Contact Me
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Menu;
