import React from "react";
import { Grid, Box, useMediaQuery, Typography, Button } from "@mui/material";
import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/tabletBG.svg";
import travel from "../assets/travel.svg";

const ContentPage = () => {
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
    backdropFilter: "blur(55px) brightness(100%)",
    background:
      "linear-gradient(45deg, rgba(94, 64, 64, 0.3) 0%, rgba(64, 64, 64, 0.08) 70%)",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "500px",
    width: "300px",
    padding: "20px",
    // transform: "translate(-50%, -50%)",
    
  };

  const imageStyle = {
    width: "200px",
    height: "200px"
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundImage: bgSVG,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

      }}>
      <Grid container >
        <Grid item xs={12} sm={6} md={3}  >
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
                sx={{ color: "Secondary", textAlign: "center" }}>
                The Ultimate Travel Guide
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
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
                sx={{ color: "Secondary", textAlign: "center" }}>
                The Ultimate Travel Guide
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
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
                sx={{ color: "Secondary", textAlign: "center" }}>
                The Ultimate Travel Guide
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={3}>
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
                sx={{ color: "Secondary", textAlign: "center" }}>
                The Ultimate Travel Guide
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentPage;
