let slideIndex = 0;//compteur
const slides = document.getElementsByClassName('carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots'); 

function nextSlide() {
    if(slideIndex < slidestext.length -1) {
      showSlide(slideIndex += 1);
    } else { 
      showSlide(slideIndex = 0);
    }
}

function showSlide(index) { 
  const content = `<img src="./assets/images/slideshow/${slidestext[index].image}" alt="photo bureaux Print it"> 
    <p>${slidestext[index].tagLine}</p>`;
  slides[0].innerHTML = content;
  dotsContainer.innerHTML = ''; 

      for (let i = 0; i < slidestext.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', function() {
          showSlide(i);
        });
        dotsContainer.appendChild(dot);
      }

  const dots = document.querySelectorAll('.carousel-dot'); 
  dots[index].classList.add('dot_selected'); 
}
  
function prevSlide() {
    if(slideIndex > 0) {
      showSlide(slideIndex -= 1);
    } else {
      showSlide(slideIndex = slidestext.length -1);
    }
}
  
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);

showSlide(slideIndex)