import { Box, Button, Typography } from "@mui/material";
import React from "react";
import portrait from "../assets/TobyPortraitNoBG.png";

const AboutMe = () => {
  return (
    <Box>
      <Box>
        <div style={{ position: "relative" }}>
          <Typography variant="h1" style={{ marginBottom: "10px" }}>
            About
            <br />
            Me
          </Typography>
          <Button
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              marginTop: "10px",
            }}
          >
            Menu
          </Button>
          <p style={{ fontSize: "16px" }}>
            Born with an innate passion for creation, this multifaceted artist
            embarked on a transformative journey, exploring various artistic
            realms.
            <br />
            <br />
            With 30 years of experience as a professional musician, Toby J honed
            his skills in crafting melodies and breathing life into soulful
            compositions.
            <br />
            <br />
            Transitioning to photography, he discovered a new lens through which
            to capture the essence of moments and unveil untold stories.
            <br />
            <br />
            However, destiny had another calling, leading him to the captivating
            world of UX/UI design, where Toby found his true creative home.
          </p>
        </div>
      </Box>
      <img
        src={portrait}
        alt="display portrait of Toby"
        style={{
          maxWidth: "350px",
          height: "auto",
          position: "absolute",
          top: "478px",
          left: "70px",
        }}
      />
    </Box>
  );
};

export default AboutMe;
