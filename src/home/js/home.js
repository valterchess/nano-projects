let mixerPortfolio = mixitup('.home__container', {
    selectors: {
        target: '.home__card'
    },
    animation: {
        duration: 300
    }
});
/* Link active work */ 
const linkWork = document.querySelectorAll('.home__item')

function activeWork(){
    linkWork.forEach(l => l.classList.remove('active-home'))
    this.classList.add('active-home')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))