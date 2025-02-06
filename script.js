let index = 0;
const slides = document.querySelectorAll('.card');
const lastSlideIndex = slides.length - 1;
const intervalTime = 6000; 

function updateSlide() {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';

    if (index === lastSlideIndex) {
        document.querySelector('.btn-left').style.display = 'none';
        document.querySelector('.btn-right').style.display = 'none';
    } else {
        document.querySelector('.btn-left').style.display = 'block';
        document.querySelector('.btn-right').style.display = 'block';
    }
}

function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
}


setInterval(nextSlide, intervalTime);

function playMusic() {
    document.getElementById('background-music').play();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);


updateSlide();



