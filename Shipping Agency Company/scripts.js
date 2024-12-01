document.addEventListener('DOMContentLoaded', () => { 
  document.querySelector('form').onsubmit = (event) => { event.preventDefault();
     // Prevent form submission
      const username = document.querySelector('#name').value; 
      const email = document.querySelector('#email').value;
      const textArea = document.querySelector('#message').value;
      
      // Store data in localStorage 
      localStorage.setItem('username', username); 
      localStorage.setItem('email', email);
      localStorage.setItem('textArea',textArea )
      // Update the result div 
      document.querySelector('#result').innerHTML = `Thanks for contacting City Lion, ${username},<br>We'll get back to you as soon as we can!`; 
      // Construct the mailto URL 
      const mailtoLink = `mailto:codehub65@gmail.com?subject=Contact%20Form%20Submission&body=Username:%20${encodeURIComponent(username)}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(textArea)}`; // Open the email client
       window.location.href = mailtoLink; // Reset the form 
       document.querySelector('form').reset(); return false; } });

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('burger-toggle');
});


const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})


const imgBox = document.querySelector('#largeImage').style.display = "none";


// Forms 

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com', // Replace with your email
        pass: 'your-email-password'  // Replace with your email password
    }
});

// Endpoint to handle form submission and send email
app.post('/send-email', (req, res) => {
    const { username, email } = req.body;

    const mailOptions = {
        from: 'your-email@gmail.com', // Replace with your email
        to: 'recipient-email@example.com', // Replace with recipient's email
        subject: 'Form Submission',
        text: `Username: ${username}\nEmail: ${email}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

