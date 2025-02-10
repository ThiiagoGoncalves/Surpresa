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


function formatTime() {
    const startDate = new Date('2024-02-26T00:00:00');
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();
    
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        let prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    
    return `${years} ano ${months} meses ${days} dias ` +
           `${hours} horas ${minutes} minutos e ${seconds} segundos`;
}

function updateTimer() {
    document.getElementById('timer').textContent = formatTime();
}

setInterval(updateTimer, 1000);
updateTimer();

