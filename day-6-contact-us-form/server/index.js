const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.subject,
      html: `
			<p>You have a new message from ${req.body.name}.</p>
			<h4>Contact Details:</h4>
			<ul>
				<li>Name: ${req.body.name}</li>
				<li>Email: ${req.body.email}</li>
				<li>Subject: ${req.body.subject}</li>
				<li>Message: ${req.body.message}</li>
			</ul>
			`,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later.',
        });
        console.error(err);
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us! We will get back to you ASAP!',
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later.',
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log('Server started on port 3030');
});
