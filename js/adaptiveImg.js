const img = document.getElementById('serviceimg');
const serviceCardImgTexts = document.querySelectorAll('.services_cards__img-text');

function setSize() {
  let imgHeight = img.clientHeight;
  serviceCardImgTexts.forEach(s => {
    console.log('высота сейчас: ', imgHeight)
    s.style.height = imgHeight + 'px'
    s.style.marginBottom = '-' + imgHeight + 'px'
  })
}


const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    if (entry.target === img) {
      console.log('Ширина изменилась:', entry.contentRect.height);
      setSize();
    }
  }
});

resizeObserver.observe(img)
