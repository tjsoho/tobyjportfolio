import React, { useState } from "react";
import {
  Grid,
  Box,
  useMediaQuery,
  Typography,
  Button,
  Switch,
} from "@mui/material";
import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/largeSVG.svg";
import travel from "../assets/travel.svg";
import weather from "../assets/weather.svg";
import note from "../assets/notes.svg";
import password from "../assets/padlock.svg";
import { Link } from "react-router-dom";
import bw from "../assets/bw.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Portfolio = () => {
  const smallScreen = useMediaQuery("(min-width: 300px) and (max-width: 600px)");
  const mediumScreen = useMediaQuery("(min-width: 600px) and (max-width: 1350px)");
  const [bwMode, setBwMode] = useState(false);

  let bgSVG;
  if (smallScreen) {
    bgSVG = "url(" + mobileBG + ")";
  } else if (mediumScreen) {
    bgSVG = "url(" + tabletBG + ")";
  } else {
    bgSVG = "url(" + tabletBG + ")";
  }

  const handleToggle = () => {
    setBwMode(!bwMode);
  };

  const glassMorphismStyles = {
    backdropFilter: "blur(55px) brightness(80%)",
    background: "linear-gradient(45deg, rgba(94, 64, 64, 0.3) 0%, rgba(64, 64, 64, 0.08) 70%)",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "400px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginTop: "50px",
    marginBottom: "50px",
    flexWrap: "wrap",
    margin: "0 auto",
  };

  const buttonStyle = {
    margin: "20px",
    padding: "10px",
    width: "150px",
    borderRadius: "10px",
    fontSize: "20px",
  };

  const imageStyle = {
    width: "150px",
    height: "180px",
  };

  const carouselStyle = {
    "& .carousel .control-arrow": {
      backgroundColor: "transparent",
      color: "white",
      height: "50px",
      width: "30px",
      top: "calc(50% - 25px)",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    "& .carousel .control-arrow:before": {
      fontSize: "60px",
      color: "black",
    },
    "& .carousel .carousel-status": {
      display: "none",
    },
    "& .carousel .control-prev.control-arrow": {
      left: "450px",
    },
    "& .carousel .control-next.control-arrow": {
      right: "450px",
    },
  };
  
  

  return (
    <Grid container>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${bwMode ? bw : tabletBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          
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
            marginRight: "10px",
            
          }}
        >
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "150px",
                height: "50px",
                fontSize: 20,
                margin: "10px",
              }}
            >
              Menu
            </Button>
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            height: "85vh",
            
          }}
        >
          <Box sx={carouselStyle} >
            <Carousel>
              {/* CARD 1 */}
              <div>
                <Box sx={glassMorphismStyles}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={travel} alt="" style={imageStyle} />
                    <Typography
                      variant="h4"
                      sx={{ color: "white", textAlign: "center" }}
                    >
                      The Ultimate Travel Game
                    </Typography>

                    <Link
                      to="https://tjsoho.github.io/improved-travel-quiz/"
                      style={{ textDecoration: "none" }}
                    >
                      <Button style={buttonStyle}>PLAY</Button>
                    </Link>
                  </Box>
                </Box>
              </div>

              {/* CARD 2 */}
              <div>
                <Box sx={glassMorphismStyles}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={weather} alt="" style={imageStyle} />
                    <Typography
                      variant="h4"
                      sx={{ color: "white", textAlign: "center" }}
                    >
                      Weather Checker
                    </Typography>
                    <Link
                      to="https://tjsoho.github.io/weather-api/"
                      style={{ textDecoration: "none" }}
                    >
                      <Button style={buttonStyle}>CHECK</Button>
                    </Link>
                  </Box>
                </Box>
              </div>
              {/* CARD 3 */}
              <div>
                <Box sx={glassMorphismStyles}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={note} alt="" style={imageStyle} />
                    <Typography
                      variant="h4"
                      sx={{ color: "white", textAlign: "center" }}
                    >
                      The Travel Companion
                    </Typography>

                    <Link
                      to="https://sheltered-caverns-17258.herokuapp.com/"
                      style={{ textDecoration: "none" }}
                    >
                      <Button style={buttonStyle}>LET'S GO</Button>
                    </Link>
                  </Box>
                </Box>
              </div>

              {/* CARD 4 */}
              <div>
                <Box sx={glassMorphismStyles}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={password} alt="" style={imageStyle} />
                    <Typography
                      variant="h4"
                      sx={{ color: "white", textAlign: "center" }}
                    >
                      Password Generator
                    </Typography>

                    <Link
                      to="https://tjsoho.github.io/w3-password-generator/"
                      style={{ textDecoration: "none" }}
                    >
                      <Button style={buttonStyle}>GENERATE</Button>
                    </Link>
                  </Box>
                </Box>
              </div>
            </Carousel>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Portfolio;
