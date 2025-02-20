//Cards
let index = 0;
const slides = document.querySelectorAll('.card');
const lastSlideIndex = slides.length - 1;
const intervalTime = 8000; 

function updateSlide() {
    slides.forEach(slide => slide.style.display = 'none');
    slides[index].style.display = 'block';

    document.querySelector('.btn-left').style.display = 'block';
    document.querySelector('.btn-right').style.display = 'block';
}
function nextSlide() {
    index = (index + 1) % slides.length;
    updateSlide();
}
function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
}

//Swipe Cards
let touchStartX = 0;
let touchEndX = 0;
const slider = document.querySelector('.container'); 
slider.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});
slider.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});
function handleSwipe() {
    const swipeThreshold = 50; 

    if (touchStartX - touchEndX > swipeThreshold) {
        nextSlide(); 
    } else if (touchEndX - touchStartX > swipeThreshold) {
        prevSlide();
    }
}

//Corações
setInterval(nextSlide, intervalTime);

function playMusic() {
    document.getElementById('background-music').play();
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 20000);
}
setInterval(createHeart, 350);
updateSlide();

//Contador
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
    
    return `
        <div class="time-block"><div class="time-number">${years}</div><div class="time-label">Ano</div></div>
        <div class="time-block"><div class="time-number">${months}</div><div class="time-label">Meses</div></div>
        <div class="time-block"><div class="time-number">${days}</div><div class="time-label">Dias</div></div>
        <div class="time-block"><div class="time-number">${hours}</div><div class="time-label">Horas</div></div>
        <div class="time-block"><div class="time-number">${minutes}</div><div class="time-label">Minutos</div></div>
        <div class="time-block"><div class="time-number">${seconds}</div><div class="time-label">Segundos</div></div>
    `;
}

function updateTimer() {
    document.getElementById('timer').innerHTML = formatTime();
}

//Tela de Inicio "PlayMe"
setInterval(updateTimer, 1000);
updateTimer();

document.getElementById("start-button").addEventListener("click", function() {
    const audio = document.getElementById("background-music");
    audio.play().then(() => {
      document.getElementById("start-screen").style.display = "none";
    }).catch(error => console.log("Erro ao tentar reproduzir áudio:", error));
  });

  document.getElementById("start-button").addEventListener("mouseover", function() {
    this.style.background = "#ff4d4d";
    this.firstElementChild.style.borderLeftColor = "#ffe6e6";
  });

  document.getElementById("start-button").addEventListener("mouseout", function() {
    this.style.background = "#ffe6e6";
    this.firstElementChild.style.borderLeftColor = "#ff4d4d";
  });


