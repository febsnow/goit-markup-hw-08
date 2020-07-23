(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();
(() => {
  document.querySelector('.clients-form').addEventListener('submit', e => {
    e.preventDefault();

    console.log('');
    console.count('Submit #');

    new FormData(e.currentTarget).forEach((value, name) => console.log(name, ':', value));
  });
})();
