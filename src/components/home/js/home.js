let mixerNanoProjects = mixitup('.home__container', {
    selectors: {
        target: '.home__card'
    },
    animation: {
        duration: 300
    }
});
/* Link active home */
const linkHome = document.querySelectorAll('.home__item')

function activeHome() {
    linkHome.forEach(l => l.classList.remove('active-home'))
    this.classList.add('active-home')
}

linkHome.forEach(l => l.addEventListener('click', activeHome))