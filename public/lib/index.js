$(document).ready(function () {
    intersectionObserverHandler();
});


const intersectionObserverHandler = () => {
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');

                }
                else {
                    entry.target.classList.remove('show');

                }
            });
        },
        {
            threshold: 0,

        }
    );

    cards.forEach((card) => {
        observer.observe(card);
    });

}
const splashScreenHandler = () => {
    const splash = document.querySelector('.splash');
    setTimeout(() => {
        splash?.classList.add('back-out-up');
    }, 5000);

}
const showPageHandler = () => {
    const hiddenContent = document.querySelector('.hidden-content');
    setTimeout(() => {
        hiddenContent?.classList.remove('hidden-content');
    }, 5300);

}


