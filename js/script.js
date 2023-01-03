const elModal = document.querySelector('.modal');
const elModalClose = elModal.querySelector('.js-modal-close');

setTimeout(() => {
  elModal.classList.add('modal-open');
}, 5000);

function closeModal() {
  if (elModalClose) {
    elModalClose.addEventListener('click', function() {
      elModal.classList.remove('modal-open');
    });
  }
}
closeModal();


// Sidebar-menu
const elMenu = document.querySelector('.button-menu');
const elSitenav = document.querySelector('.sitenav');

elMenu.addEventListener('click', function() {
  if (elSitenav.classList.contains('open')) {
    elSitenav.classList.remove('open');
  } else {
    elSitenav.classList.add('open');
  }
});
