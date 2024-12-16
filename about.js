let slideIndex = 1;  
const slides = document.querySelectorAll('.carousel-container img');
const carouselContainer = document.querySelector('.carousel-container');
const totalSlides = slides.length;
const transitionDuration = 500;  

function setupInfiniteLoop() {
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];
    const firstClone = firstSlide.cloneNode(true);
    const lastClone = lastSlide.cloneNode(true);

   
    carouselContainer.appendChild(firstClone);
    carouselContainer.insertBefore(lastClone, slides[0]);


    return document.querySelectorAll('.carousel-container img');
}

setupInfiniteLoop(); 

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-container img');
    const totalSlides = slides.length;

    slideIndex += n;

    if (slideIndex >= totalSlides - 1) {
        slideIndex = 1;  
        
        setTimeout(() => {
            carouselContainer.style.transition = "none"; 
            const newTransform = -slideIndex * 100 + '%';
            carouselContainer.style.transform = `translateX(${newTransform})`;
        }, transitionDuration);
    }
   
    else if (slideIndex <= 0) {
        slideIndex = totalSlides - 2;  
        
        setTimeout(() => {
            carouselContainer.style.transition = "none";
            const newTransform = -slideIndex * 100 + '%';
            carouselContainer.style.transform = `translateX(${newTransform})`;
        }, transitionDuration);
    }

    carouselContainer.style.transition = `transform ${transitionDuration}ms ease`;
    const newTransform = -slideIndex * 100 + '%';
    carouselContainer.style.transform = `translateX(${newTransform})`;
}





