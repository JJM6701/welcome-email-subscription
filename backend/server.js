const express = require("express");
const mailgun = require("mailgun-js");
require("dotenv").config();

const app = express();
const port = 5000;

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

app.use(express.json());

app.post("/api/subscribe", (req, res) => {
  const { email } = req.body;

  const data = {
    from: "joshuamorrison35@gmail.com",
    to: email,
    subject: "Welcome to DEV@Deakin!",
    text: "Thank you for subscribing to DEV@Deakin.",
    html: "<strong>Thank you for subscribing to DEV@Deakin.</strong>",
  };

  mg.messages().send(data, (e) => {
    if (e) {
      res.status(500).send("Error sending email");
    } else {
      res.status(200).send("Welcome email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
