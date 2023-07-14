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

const DownloadLink = () => {
  const handleDownload = () => {
    const fileUrl = "./assets/TobyCarrollCV.pdf";
    const fileName = "TobyCarrollCV.pdf";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", fileUrl, true);
    xhr.responseType = "blob";

    xhr.onload = () => {
      if (xhr.status === 200) {
        const blob = new Blob([xhr.response], { type: "application/pdf" });

        // Create a temporary anchor element
        const tempLink = document.createElement("a");
        tempLink.href = window.URL.createObjectURL(blob);
        tempLink.download = fileName;

        // Trigger the click event of the anchor element
        tempLink.dispatchEvent(new MouseEvent("click"));
      }
    };

    xhr.send();
  };

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



  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    fontSize: fSize,
    padding: "10px 20px",
    width: buttonw,
    height: "25%",
  };

  return (
    <a onClick={handleDownload} style={{ textDecoration: "none" }}>
       <Button variant="contained" color="primary" style={buttonStyle}>
        Resume
      </Button>
    </a>
  );
};

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
              <Link to="/aboutme" style={{ textDecoration: "none" }}>
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
              <DownloadLink />
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
              <Link to="/portfolio" style={{ textDecoration: "none" }}>
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
              <Link to="/contact" style={{ textDecoration: "none" }}>
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
