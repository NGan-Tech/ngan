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

let text;
let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
    item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
    item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
    this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
    text = this.innerText,
      select = this.closest('.select'),
      currentText = select.querySelector('.select__current');

    currentText.innerText = text;
    select.classList.remove('is-active');

    console.log(text);

  }
};
select();

function sendMessage() {
  console.log('posle')
  event.preventDefault();
  console.log('do')
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("telephone").value;
  const message = document.getElementById("message").value;
  const company = document.getElementById("company").value;
  const money = text;
  const file = document.getElementById("file").files[0];
  console.log(file)
  const chatId = '-1001818216714'; // замените на ваш ID чата
  // const chatId = '-940421452'; // замените на ваш ID чата
  const messageText = `Имя: ${name} \n Email: ${email} \n Телефон: ${tel} \n Компания: ${company} \n Бюджет: ${money} \n Сообщение: ${message}`;
  const formData = new FormData();
  formData.append('chat_id', chatId);
  formData.append('caption', messageText);
  if (file !== undefined && file !== null ) {
    formData.append('document', file);
    axios.post(`https://api.telegram.org/bot6179593214:AAH-21Aa5LevKZURInkoBpcdjwYNzhiGQmQ/sendDocument`, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  else {
    axios.get(`https://api.telegram.org/bot6179593214:AAH-21Aa5LevKZURInkoBpcdjwYNzhiGQmQ/sendMessage?chat_id=${chatId}&text=${messageText}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
