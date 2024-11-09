
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('form').onsubmit = () => {
    const username = document.querySelector('#name').value;
    const contactUs = document.querySelector('#phone-number').value;
    const country = document.querySelector('#country-code').value;
    document.querySelector('#result').innerHTML = `Thanks for contacting City Lion, ${username}, and we'll call you by this, <a href="tel:">${country}-${contactUs}</a>`;
     document.querySelector('form').reset();
    return false; // Prevents form submission to demonstrate the message update

  
   
  }
 

});

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


// Forms 
