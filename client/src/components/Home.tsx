import { Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import verticalSVG from "../assets/vertical-hello.svg";
import horizontal from "../assets/horizontal.svg";

const Home = () => {
  const smallScreen = useMediaQuery(
    "(min-width: 300px) and (max-width: 600px)"
  );
  const mediumScreen = useMediaQuery(
    "(min-width: 600px) and (max-width: 1350px)"
  );

  let bgSVG;
  if (smallScreen) {
    bgSVG = "url(" + verticalSVG + ")";
  } else if (mediumScreen) {
    bgSVG = "url(" + horizontal + ")";
  } else {
    bgSVG = "url(" + horizontal + ")";
  }

  return (
    <div>
      <Box sx= {{
        backgroundColor: "#5B71EA",
        height: "100vh",
        width: "100vw",
        backgroundImage: bgSVG,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography variant="h1"> Toby J</Typography>
        <Typography variant="h3"> UX/UI Designer</Typography>
      </Box>
    </div>
  );
};

export default Home;
