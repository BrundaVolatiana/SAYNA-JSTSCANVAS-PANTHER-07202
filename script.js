// window.addEventListener('load',() => {
//     const myDiv = document.getElementById('myDiv');
//     myDiv.classList.add('slide-down');

// });



/* FADE IN */

// const fadeDivs = document.querySelectorAll('.fade-in-div'­);
// function checkFadeIn() {
//     fadeDivs.forEach(div => {
//     const rect = div.getBoundingClientRect();
//     const offset = 100; // Ajuste cette valeur selon le moment souhaité où l'animation se déclenche
//     if (rect.top + offset <= window.innerHeight){
//     div.classList.add('show');
//     }
// });
// }



// window.addEventListener('scroll', checkFadeIn);
// window.addEventListener('load', checkFadeIn);

//  lignes animation

document.addEventListener("DOMContentLoaded", function() {
   const elementToAnimate = document.querySelector(".lignes");
      elementToAnimate.style.opacity = "1";
      elementToAnimate.style.transform = "translateY(0)";
   });

  window.addEventListener("beforeunload", function() {
    const elementToAnimate = document.querySelector(".lignes");
    elementToAnimate.style.opacity = "0";
    elementToAnimate.style.transform = "translateY(-100%)";
  });

// lignes animation fini

// fade in texte titre et illustration

function animateElements() {
    const elementsToAnimate = document.querySelectorAll(".animate-element");
  
    elementsToAnimate.forEach(function(element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight - 100) { // Adjust the value (-100) for a smoother trigger
        element.classList.add("show");
      }
    });
  }
  
  // Appel de la fonction lors du chargement initial
  document.addEventListener("DOMContentLoaded", animateElements);
  
  // Ajout d'un écouteur d'événement scroll pour appeler la fonction lors du défilement
  window.addEventListener("scroll", animateElements);

  // Fonction pour gérer le retrait des éléments avant de changer de page
function animateRetreat() {
    const elementsToAnimate = document.querySelectorAll(".animate-element");
  
    elementsToAnimate.forEach(function(element) {
      element.classList.remove("show");
    });
  }
  
  // Ajout d'un écouteur d'événement beforeunload pour appeler la fonction lors du changement de page
  window.addEventListener("beforeunload", animateRetreat);






  // carousel infini

  const carousel = document.getElementById('carousel');
  const carouselButton = document.getElementById('carousel-button');
  
  let currentIndex = 0;
  
  carouselButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carousel.childElementCount;
  const offset = -currentIndex * carousel.clientWidth;
  carousel.style.transform = `translateX(${offset}px)`;
  });
  
  // Ajout d'un événement pour détecter la fin de l'animation de transition
  carousel.addEventListener('transitionend', () => {
  // Si on atteint la dernière image (qui est clonée en première position)
  // on revient au début du carousel sans transition pour rendre l'effet infini
  if (currentIndex === carousel.childElementCount - 1) {
  currentIndex = 0;
  carousel.style.transition = 'none';
  const offset = -currentIndex * carousel.clientWidth;
  carousel.style.transform = `translateX(${offset}px)`;
  }
  });





  // popupbox

  function openPopup() {
    document.getElementById("popup").style.display = "block";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }