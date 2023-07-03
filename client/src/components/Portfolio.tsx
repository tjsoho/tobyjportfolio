import { Box, Button } from "@mui/material";
import React from "react";

const AboutMe = () => {
  return (
    <Box>
      <Box>
        <div style={{ position: "relative" }}>
          <h1 style={{ marginBottom: "10px" }}>
            My
            <br />
            Portfolio.
          </h1>
          <Button
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              marginTop: "10px"
            }}>
            Menu
          </Button>
        </div>
      </Box>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Button>Travel Game</Button>
        <Button>Weather Check</Button>
        <Button>Note Taker</Button>
        <Button>Password Generator</Button>
      </Box>
    </Box>
  );
};

export default AboutMe;
