const express = require("express");
const axios = require("axios");
const { ConfidentialClientApplication } = require("@azure/msal-node");
const router = express.Router();

const msalConfig = {
  auth: {
    clientId: process.env.AZURE_APP_ID,
    clientSecret: process.env.AZURE_APP_SECRET,
    authority: `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}`
  },
//   system: {
//     loggerOptions: {
//       loggerCallback(loglevel, message, containsPii) {
//         console.log(message);
//       },
//       piiLoggingEnabled: false,
//       logLevel: msal.LogLevel.Verbose,
//     }
//   }
};

const msalClient = new ConfidentialClientApplication(msalConfig);

const getToken = async () => {
    const tokenResponse = await msalClient.acquireTokenByClientCredential({
      scopes: ["https://graph.microsoft.com/.default"],
    });
    return tokenResponse.accessToken;
  };

  router.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).send({ error: "All fields are required!" });
    }
  
    try {
      const accessToken = await getToken();
  
      const mailPayload = {
        message: {
          subject: "Contact Form Message",
          body: {
            contentType: "Text",
            content: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
          },
          toRecipients: [
            {
              emailAddress: {
                address: process.env.RECIPIENT_EMAIL,
              },
            },
          ],
        },
      };
  
      await axios.post('https://graph.microsoft.com/v1.0/me/sendMail', mailPayload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });
  
      res.status(200).send({ success: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send({ error: "Failed to send email." });
    }
  });
  
  module.exports = router;