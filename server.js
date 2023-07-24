const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(8000, () => console.log("SERVER RUNNING"));

const buildPath = path.join(__dirname, "build");

app.use(express.statis(buildPath));

app.get("/*", function(req, res) {
  res.sendFile(
    path.join(__dirname, "build", "index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
})

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send!");
  }
})

function sendEmail(firstName, lastName, phone, email, message) {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New contact form submission',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}\nPhone: ${phone}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.post('/send-email', (req, res) => {
  const { firstName, lastName, phone, email, message } = req.body;
  sendEmail(firstName, lastName, phone, email, message);
  res.json({ code: 200, status: "Message Sent" });
});
