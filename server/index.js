const express = require('express')
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = 80

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

function sendEmail(name, email, message) {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New contact form submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  sendEmail(name, email, message);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})