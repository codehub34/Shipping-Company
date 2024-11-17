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
