

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
