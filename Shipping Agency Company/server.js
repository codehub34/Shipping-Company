


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


// BACKEND CODES

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/contactDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  countryCode: String,
  phoneNumber: String,
  message: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.post('/submit', async (req, res) => {
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    countryCode: req.body['country-code'],
    phoneNumber: req.body['phone-number'],
    message: req.body.message
  });
  try {
    await contact.save();
    res.status(201).send('Contact information saved successfully!');
  } catch (error) {
    res.status(400).send('Error saving contact information');
  }
});

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
