import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form } from "formik";

const Contact = () => {
  const handleSubmitForm = () => {
    return;
  };
  return (
    <Box
      sx={{
        display: "flex",
        textAlign: "center",
        mt: 4,
        mb: 2,
      }}>
      <Typography
        variant="h3"
        color="default"
        sx={{ letterSpacing: "4px", fontWeight: "100" }}>
        Let's Chat
      </Typography>
      <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={handleSubmitForm}>
        <Form>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            name="name"
            fullWidth
            color="secondary"
            sx={{ my: 3 }}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            fullWidth
            sx={{ my: 3 }}
          />
          <TextField
            id="standard-basic"
            label="Phone"
            variant="standard"
            name="phone"
            fullWidth
            sx={{ my: 3 }}
          />
          <TextField
            id="standard-basic"
            label="Message"
            variant="standard"
            name="message"
            fullWidth
            sx={{ my: 3 }}
          />
          <Button
            type="submit"
            sx={{
              borderRadius: "30px",
              height: "60px",
              width: "80%",
              mx: "10%",
              textAlign: "center",
              color: "#0F352D",
              fontSize: "1.2rem",
              mt: 7
            }}>
            Submit
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};

export default Contact;
