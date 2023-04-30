let open = false;
const modalElement = document.getElementById('modal')

function modal() {
  open = !open
  if (open === true) {
    modalElement.style.display = 'block'
  }
  else {
    modalElement.style.display = 'none'
  }
}
