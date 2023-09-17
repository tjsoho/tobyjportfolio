import { Button, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import computerFrame from "../assets/laptop.svg";
import ll1 from "../assets/lovedLux1.svg";
import ll2 from "../assets/ll2.svg";
import ll3 from "../assets/ll3.svg";
import ll4 from "../assets/ll4.svg";
import ll5 from "../assets/ll5.svg";


const ComputerOne = () => {
  const smallScreen = useMediaQuery(
    "(min-width: 300px) and (max-width: 400px)"
  );
    const mediumScreen = useMediaQuery(
      "(min-width: 400px) and (max-width: 600px)"
    );
    const largeScreen = useMediaQuery(
      "(min-width: 600px) and (max-width: 1000px)"
    );

  let maxh;
  let padBot;
  let marginBot;
  let height;

  if (smallScreen) {
    maxh = "200px";
    height = "300px";
    padBot = "17px";
  } else if (mediumScreen) {
    maxh = "220px";
    height = "300px";
    padBot = "19px";
  } else if (largeScreen) {
    maxh = "338px";
    height = "400px";
    padBot = "30px";
  } else {
    height = "500px";
    padBot = "30px";
    marginBot = "10px";
    maxh = "420px";
  }

  return (
    // Phone container
    <Box
      sx={{
        backgroundImage: `url(${computerFrame})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center", // Center the background image
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* Laptop images */}
      <Box
        sx={{
          height: height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: padBot,
          paddingLeft: "3px",
          overflowY: "auto", // Enable vertical scrolling
          "&::-webkit-scrollbar": {
            width: "0.4em", // Adjust the width of the scrollbar as needed
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent", // Make the scrollbar track transparent
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent", // Make the scrollbar thumb transparent
          },
        }}
      >
        <img
          src={ll1}
          alt="shadow"
          style={{
            maxHeight: maxh,
            marginBottom: marginBot,
            borderRadius: "5px",
          }}
        />
    
      </Box>
    </Box>
  );
};

export default ComputerOne;