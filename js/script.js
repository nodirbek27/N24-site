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
