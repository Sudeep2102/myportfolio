const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3001; // You can choose any available port
const cors = require('cors');

// Use CORS middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/send-email', async (req, res) => {
  try {
    const { email, message } = req.body;

    // Create a transporter using Nodemailer with the app-specific password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sudeepsahu58@gmail.com', // Your Gmail address
        pass: 'saqt mnuz chod ywdp', // Use your app-specific password here
      },
    });

    // Email content
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'sudeepsahu58@gmail.com', // Your email address to receive messages
      subject: 'New Contact Form Submission',
      text: `Email: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send a simple success message as response
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
