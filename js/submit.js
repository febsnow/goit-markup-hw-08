(() => {
  document.querySelector('.clients-form').addEventListener('submit', e => {
    e.preventDefault();

    console.log('');
    console.count('Submit #');

    new FormData(e.currentTarget).forEach((value, name) => console.log(name, ':', value));
  });
})();
