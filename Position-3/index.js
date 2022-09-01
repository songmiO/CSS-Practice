const modal = document.getElementsByClassName('modal')[0];
const openModalBtn = document.getElementsByClassName('subscribe')[0];
const closeModalBtn = document.getElementsByClassName('close-button')[0];

// 1. style.display 에 접근하여 모달 띄우기
// openModalBtn.addEventListener('click', (e) => {
//   modal.style.display = 'block';
// });

// 2. show-modal 클래스를 추가하여 모달 띄우기
openModalBtn.addEventListener('click', () => {
  modal.classList.add('show-modal');
});

// close-button 클릭 시 창 닫기
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
