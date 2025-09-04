const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
const slider = document.querySelector('.reviews-slider');
const reviews = document.querySelectorAll('.reviews');

let currentIndex = 0;
const totalReviews = reviews.length;

const slideWidth = slider.clientWidth;

function scrollToIndex(index) {
  slider.scrollTo({

    left: index * slideWidth,
    behavior: 'smooth',
  });
}

leftArrow.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    scrollToIndex(currentIndex);
  }
});

rightArrow.addEventListener('click', () => {
  if (currentIndex < totalReviews - 1) {
    currentIndex++;
    scrollToIndex(currentIndex);
  }
});
const sectionsToAnimate = document.querySelectorAll(
    '.features, .reviews, .footer-bottom, .footer-contact, .footer-container, .plans, .top, .options'
  );
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      } else {
        entry.target.classList.remove('section-visible'); 
      }
    });
  }, {
    threshold: 0.2
  });
  
  sectionsToAnimate.forEach(section => {
    observer.observe(section);
  });
  
  
