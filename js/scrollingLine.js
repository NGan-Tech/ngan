const scrollingLine = document.querySelector('.scrollingLine');
let animation = null;

scrollingLine.addEventListener('mouseover', () => {
  clearInterval(animation);
  animation = null;
});

scrollingLine.addEventListener('mouseout', () => {
  if (!animation) {
    animation = setInterval(() => {
      scrollingLine.appendChild(scrollingLine.firstElementChild);
    }, 5000);
  }
});

const inputFile = document.querySelector('.input-file input[type=file]');
inputFile.addEventListener('change', function() {
  const file = this.files[0];
  this.nextElementSibling.innerHTML = file.name;
});
