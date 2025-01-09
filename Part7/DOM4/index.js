const button = document.querySelector('.reveal-btn');
const show = document.querySelector('.hidden-content');
button.addEventListener('click', () => {
    if (show.style.display === 'block') {
        show.style.display = 'none'
    } else show.style.display = 'block'
})