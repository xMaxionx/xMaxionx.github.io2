// Script para activar la revelación al hacer clic en el botón
document.addEventListener("DOMContentLoaded", function () {
    const activatorButton = document.querySelector('.activator');
    const cardReveal = document.querySelector('.card-reveal');
    const closeReveal = document.querySelector('.close-reveal');
  
    activatorButton.addEventListener('click', function () {
      cardReveal.classList.add('active');
    });
  
    closeReveal.addEventListener('click', function () {
      cardReveal.classList.remove('active');
    });
  });
  