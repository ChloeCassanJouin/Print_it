let slideIndex = 0;//compteur
const slides = document.getElementsByClassName('carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots'); 




console.log("slidestext", slidestext[0])

function nextSlide() {
  console.log("slideIndex before", slideIndex)
    if(slideIndex < slidestext.length -1) {
      
      showSlide(slideIndex += 1);
    } else {
      
      showSlide(slideIndex = 0);
    }
    console.log("slideIndex after", slideIndex);
  }

function showSlide(i) { 
  const content = `<img src="./assets/images/slideshow/${slidestext[i].image}" alt="photo bureaux Print it"> 
    <p>${slidestext[i].tagLine}</p>`;
  slides[0].innerHTML = content;
  dotsContainer.innerHTML = ''; 

      for (let d = 0; d < slidestext.length; d++) {
        const dot = document.createElement('span');
        dot.classList.add('carousel-dot');
        dot.addEventListener('click', function() {
          currentSlide(d);
        });
        dotsContainer.appendChild(dot);
        console.log("dot-selected", slideIndex)
      }
      
  const dots = document.querySelectorAll('.carousel-dot'); 
  dots[i].classList.add('dot_selected'); 

  console.log("dot", slidestext)
}
  
function prevSlide() {
  console.log("slideIndex before", slideIndex)
    if(slideIndex > 0) {
      showSlide(slideIndex -= 1);
    } else {
      showSlide(slideIndex = slidestext.length -1);
    }
    console.log("slideIndex after", slideIndex);
}

function currentSlide(n) {
  showSlide(n);
}
  
document.querySelector('.next-button').addEventListener('click', nextSlide);
document.querySelector('.prev-button').addEventListener('click', prevSlide);

showSlide(slideIndex)