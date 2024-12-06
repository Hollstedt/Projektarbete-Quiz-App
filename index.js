let lightDarkToggle = document.querySelector('.light-dark-mode');

lightDarkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});