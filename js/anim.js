

// Получаем все элементы path с классом wave
const waves = document.querySelectorAll('.wave');

// Для каждой волны создаем анимацию
waves.forEach((wave, index) => {
  // Устанавливаем начальное значение stroke-dasharray для текущей волны
  const length = wave.getTotalLength();
  wave.style.strokeDasharray = `${length} ${length}`;
  wave.style.strokeDashoffset = length;

  // Создаем анимацию для текущей волны
  anime({
    targets: wave,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3350,
    delay: index * 275, // Устанавливаем задержку для последовательного запуска анимаций
    direction: 'alternate',
    loop: true
  });
});


const wave2 = document.querySelectorAll('.wave2');
// Функция для анимации пути
function animateWavePath(path, delay) {
  anime({
    targets: path,
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'linear',
    duration: 2500,
    delay: delay,
    direction: 'alternate',
    loop: true
  });
}

// Запуск анимации для каждого пути
wave2.forEach((path, i) => {
  animateWavePath(path, i * 1000);
});




// Задаем скорость анимации
const animationSpeed = 3000;

// Получаем все элементы с классом wave
const waves3 = document.querySelectorAll('.wave3');

// Для каждого элемента выполняем анимацию
waves3.forEach(wave3 => {
  // Получаем длину пути
  const length = wave3.getTotalLength();

  // Устанавливаем атрибуты для stroke-dasharray и stroke-dashoffset
  wave3.style.strokeDasharray = `${length} ${length}`;
  wave3.style.strokeDashoffset = length;

  // Создаем анимацию
  const waveAnimation = anime({
    targets: wave3,
    strokeDashoffset: 0,
    duration: animationSpeed,
    easing: 'linear',
    direction: 'alternate',
    loop: true
  });
});


// Получаем все элементы path с классом wave
const waves4 = document.querySelectorAll('.wave4');

// Для каждой волны создаем анимацию
waves4.forEach((wave4, index) => {
// Устанавливаем начальное значение stroke-dasharray и strokeDashoffset для текущей волны
  const length = wave4.getTotalLength();
  wave4.style.strokeDasharray = `${length} ${length}`;
  wave4.style.strokeDashoffset = 0;

// Создаем анимацию для текущей волны
  anime({
    targets: wave4,
    strokeDashoffset: [-length, 0],
    easing: 'easeInOutSine',
    duration: 3350,
    delay: index * 275, // Устанавливаем задержку для последовательного запуска анимаций
    direction: 'alternate',
    loop: true
  });
});
