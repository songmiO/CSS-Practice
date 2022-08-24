const modal = document.getElementsByClassName('modal')[0];
const openModalBtn = document.getElementsByClassName('subscribe')[0];
const closeModalBtn = document.getElementsByClassName('close-button')[0];

openModalBtn.addEventListener('click', (e) => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', (e) => {
  document.getElementsByClassName('modal')[0].style.display = 'none';
});
