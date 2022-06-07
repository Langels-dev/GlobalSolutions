const express = require("express");
const nodemailer = require("nodemailer");
const { google, Auth } = require("googleapis");
const router = express.Router();

router.post("/send-email", (req, res) => {
  const { name, email, number, subject, message } = req.body;
  const contentHtml = `
    <h1> GLOBALSOLUTIONS FORM </h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${number}</li>
        <li>Subject: ${subject}</li>
    <ul>
    <p>${message}</p>
    `;

  const CLIENTD_ID = ""; /* Your Client_Id for Google cloud Plataform */
  const CLIENT_SECRET = ""; /* Your Client_Secrets for Google cloud Plataform */
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN = ""; /* Refresh_Token for Oauth 2.0 playground */

  const oAuth2Client = new google.auth.OAuth2(
    CLIENTD_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "" /* Here your email to send the emails and linked with Google Cloud Platform and OAuth 2.0 Playground */,
          clientId: CLIENTD_ID,
          clientSecret: CLIENT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });
      const mailOptions = {
        from: "WEBPAGE Global Solutions <here your user of the line of code 39>",
        to: "" /* Enter the recipient's email here */,
        subject: `MESSAGE FROM ${name.toUpperCase().toString()}`,
        html: contentHtml,
      };

      const result = await transporter.sendMail(mailOptions);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  sendMail()
    .then((result) => res.redirect("/"))
    .catch((error) => console.log(error.message));
});

module.exports = router;
