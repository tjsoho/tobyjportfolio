import { Box, Button, TextField, Typography, Grid } from "@mui/material";
import { Formik, Form } from "formik";

import mobileBG from "../assets/colour-square.svg";
import tabletBG from "../assets/tabletBG.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

const Contact = () => {
  const handleSubmitForm = () => {
    // Handle form submission logic here
  };

  const smallScreen = useMediaQuery("(min-width: 300px) and (max-width: 600px)");
  const mediumScreen = useMediaQuery("(min-width: 600px) and (max-width: 900px)");
  const largeScreen = useMediaQuery("(min-width: 900px) and (max-width: 1350px)");


  let bgSVG;
  let headingSize;
  let morphWidth;
  if (smallScreen) {
    bgSVG = "url(" + mobileBG + ")";
    headingSize = "3rem";
    morphWidth = "75%";
  } else if (mediumScreen) {
    bgSVG = "url(" + tabletBG + ")";
    headingSize = "4rem";
    morphWidth = "75%";
      } else if (largeScreen) {
    bgSVG = "url(" + tabletBG + ")";
    headingSize = "5rem";
    morphWidth = "55%";
     } else {
    bgSVG = "url(" + tabletBG + ")";
    headingSize = "5rem";
    morphWidth = "55%";
  }

  const glassMorphismStyles = {
    backdropFilter: "blur(55px) brightness(100%)",
    background: "linear-gradient(180deg, rgba(239, 239, 239, 0.6) 0%, rgba(239, 239, 239, 0.08) 100%)",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: "#D9D9D9",
    height: "80%",
    width: morphWidth,
    position: "absolute",
    top: "50%",
    left: "50%",
    padding: "20px",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const textFieldStyle = {
    color: "black"
  };

  return (
    <Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            backgroundImage: bgSVG,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            margin: 0,
            position: "relative",
          }}
        >
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
              height: "45px",
              fontSize: 20,
              margin: "20px"
            }}>
            Menu
          </Button>
        </Box>
          <Box sx={glassMorphismStyles}>
            <Box
              sx={{
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
                mb: 2,
                maxWidth: 400,
                mx: "auto",
              }}
            >
              <Typography
                variant="h1"
                color="default"
                sx={{
                  letterSpacing: "4px",
                  fontSize: headingSize,
                  mb: 2,
                  textAlign: "left",                  
                }}
              >
                Contact <br /> Me.
              </Typography>
              <Formik
                initialValues={{ name: "", email: "", phone: "", message: "" }}
                onSubmit={handleSubmitForm}
              >
                <Form>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    name="name"
                    fullWidth
                    color="secondary"
                    sx={{ my: 1 }}
                    inputProps={{
                      style: textFieldStyle
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    fullWidth
                    sx={{ my: 1 }}
                    inputProps={{
                      style: textFieldStyle
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Phone"
                    variant="standard"
                    name="phone"
                    fullWidth
                    sx={{ my: 1 }}
                    inputProps={{
                      style: textFieldStyle
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Message"
                    variant="standard"
                    name="message"
                    fullWidth
                    sx={{ my: 1 }}
                    inputProps={{
                      style: textFieldStyle
                    }}
                  />
                  <Button
                    type="submit"
                    sx={{
                      borderRadius: "30px",
                      height: "60px",
                      width: "80%",
                      textAlign: "center",
                      color: "#0F352D",
                      fontSize: "1.2rem",
                      mt: 7,
                    }}
                  >
                    Submit
                  </Button>
                </Form>
              </Formik>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
