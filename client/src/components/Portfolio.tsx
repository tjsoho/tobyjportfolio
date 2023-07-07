import React from "react";
import { Grid, Box, useMediaQuery, Typography, Button } from "@mui/material";
import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/largeSVG.svg";
import travel from "../assets/travel.svg";
import weather from "../assets/weather.svg";
import note from "../assets/notes.svg";
import password from "../assets/padlock.svg";
import { Padding } from "@mui/icons-material";

const Portfolio = () => {
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
    backdropFilter: "blur(55px) brightness(80%)",
    background:
      "linear-gradient(45deg, rgba(94, 64, 64, 0.3) 0%, rgba(64, 64, 64, 0.08) 70%)",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "400px",
    width: "250px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    marginTop: "50px",
    marginBottom: "50px",
    flexWrap: "wrap",
    margin: "0 auto"
  };

  const buttonStyle = {
    margin: "20px",
    padding: "10px",
    width: "150px",
    borderRadius: "10px",
    fontSize: "20px"
  };

  const imageStyle = {
    width: "150px",
    height: "180px"
  };

  return (
    <Grid container>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          backgroundImage: bgSVG,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px"
        }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          marginRight: "20px",
        }}>
          <Button
            href="/menu"
            sx={{
              width: "150px",
              height: "50px",
              fontSize: 20,
              margin: "20px"
            }}>
            Menu
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            height: "80%",
            width: "100%"
          }}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            {/* CARD 1 */}

            <Box sx={glassMorphismStyles}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <img src={travel} alt="" style={imageStyle} />
                <Typography
                  variant="h4"
                  sx={{ color: "white", textAlign: "center" }}>
                  The Ultimate Travel Game
                </Typography>
                <Button
                  href="https://tjsoho.github.io/improved-travel-quiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={buttonStyle}>
                  PLAY
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* CARD 2 */}

          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box sx={glassMorphismStyles}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <img src={weather} alt="" style={imageStyle} />
                <Typography
                  variant="h4"
                  sx={{ color: "white", textAlign: "center" }}>
                  Weather <br /> Checker
                </Typography>
                <Button
                  href="https://tjsoho.github.io/weather-api/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={buttonStyle}>
                  CHECK
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* CARD 3 */}

          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box sx={glassMorphismStyles}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <img src={note} alt="" style={imageStyle} />
                <Typography
                  variant="h4"
                  sx={{ color: "white", textAlign: "center" }}>
                  The Travel <br /> Companion
                </Typography>
                <Button
                  href="https://sheltered-caverns-17258.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={buttonStyle}>
                  LET'S GO
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* CARD 4 */}

          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Box sx={glassMorphismStyles}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <img src={password} alt="" style={imageStyle} />
                <Typography
                  variant="h4"
                  sx={{ color: "white", textAlign: "center" }}>
                  Passwod Generator
                </Typography>
                <Button
                  href="https://tjsoho.github.io/w3-password-generator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={buttonStyle}>
                  GENERATE
                </Button>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default Portfolio;
