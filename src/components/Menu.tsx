import React, { useState, useEffect } from "react";
import { Box, Grid, Button, useMediaQuery, Switch } from "@mui/material";
import tabletBG from "../assets/largeSVG.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import bw from "../assets/bw.svg";
import Modal from "./Modal";

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
  const [fSize, setFSize] = useState("20px");
  let buttonw = "50px";

  if (smallScreen) {
    buttonw = "140px";
  } else {
    buttonw = "230px";
  }

  useEffect(() => {
    if (smallScreen) {
      setFSize("15px");
    } else {
      setFSize("20px");
    }
  }, [smallScreen]);

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
  const [bwMode, setBwMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  let boxHeight;
  let boxWidth;
  let fSize;
  let buttonw;
  if (smallScreen) {
    boxHeight = "20vh";
    boxWidth = "45vw";
    fSize = "15px";
    buttonw = "130px";
  } else {
    boxHeight = "25vh";
    boxWidth = "40vw";
    fSize = "20px";
    buttonw = "230px";
  }

  const handleToggle = () => {
    setBwMode(!bwMode);
  };

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box
      display="flex"
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
        <Switch checked={bwMode} onChange={handleToggle} color="primary" />
      </Box>
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
              <Link to="/uidesigns" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary" style={buttonStyle}>
                  DESIGNS
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

          {/* ------------------------ */}
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
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="primary" style={buttonStyle}>
                  HOME
                </Button>
              </Link>
            </Box>
          </Box>

          {/* ------------------------ */}
         
        </Grid>
      </Grid>
      <Footer />
      {openModal && <Modal />}
    </Box>
  );
};

export default Menu;
