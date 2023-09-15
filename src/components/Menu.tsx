import { useState, useEffect, useMemo } from "react";
import { Box, Grid, Button, useMediaQuery, Switch } from "@mui/material";
import tabletBG from "../assets/largeSVG.svg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import bw from "../assets/bw.svg";
import Modal from "./Modal";

const colors = ["#FFE597", "#919FF8", "#FE7075", "#FE555D", "#5B71EA", "#FFCF51"];

const Menu = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");
  const [bwMode, setBwMode] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const styles = useMemo(() => {
    const commonButtonStyles = {
      backgroundColor: "white",
      color: "black",
      padding: "10px 20px",
      height: "25%",
    };

    return {
      box: {
        height: smallScreen ? "20vh" : "25vh",
        width: smallScreen ? "45vw" : "40vw",
        border: "1px solid white",
        borderRadius: "50px",
        margin: "20px",
        backdropFilter: "blur(55px) brightness(80%)",
        background:
          "linear-gradient(45deg, rgba(94, 64, 64, 0.3) 0%, rgba(64, 64, 64, 0.08) 70%)",
      },
      button: {
        ...commonButtonStyles,
        fontSize: smallScreen ? "15px" : "20px",
        width: smallScreen ? "130px" : "230px",
      },
    };
  }, [smallScreen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenModal(true);
    }, 2000);

    return () => clearTimeout(timer);
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
        <Switch checked={bwMode} onChange={() => setBwMode(!bwMode)} color="primary" />
      </Box>
      <Grid container spacing={4}>
        <AboutMeButton styles={styles} />
        <DesignButton styles={styles} />
        <DownloadButton styles={styles} />
      </Grid>
      <Footer />
      {openModal && <Modal />}
    </Box>
  );
};

const onDownloadPDFClick = () => {
  fetch("/TobyCarrollCV.pdf").then((response) => {
    response.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = "TobyCarrollCV.pdf";
      alink.click();
    });
  });
};

interface MenuItemProps extends ButtonProps {
  text: string;
  path?: string;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ text, path, styles, onClick }) => (
  <Grid item xs={6} display="flex" flexDirection="column" alignItems="center">
    <Box bgcolor={colors[4]} sx={styles.box}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
        {
          onClick ? (
            <Button variant="contained" color="primary" style={styles.button} onClick={onClick}>
              {text}
            </Button>
          ) : (
            <Link to={path!} style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary" style={styles.button}>
                {text}
              </Button>
            </Link>
          )
        }
      </Box>
    </Box>
  </Grid>
);

interface ButtonProps {
  styles: {
    box: React.CSSProperties;
    button: React.CSSProperties;
  };
}

const AboutMeButton: React.FC<ButtonProps> = ({ styles }) => (
  <MenuItem text="About Me" path="/aboutme" styles={styles} />
);

const DesignButton: React.FC<ButtonProps> = ({ styles }) => (
  <MenuItem text="DESIGNS" path="/designs" styles={styles} />
);

const DownloadButton: React.FC<ButtonProps> = ({ styles }) => (
  <MenuItem text="Download" styles={styles} onClick={onDownloadPDFClick} />
);

export default Menu;
