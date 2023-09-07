document.addEventListener('DOMContentLoaded', (e) => {
    // your instersectionobserver code here

    intersectionObserverHandler();
    splashScreenHangler();
    showPageHandler();

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
const splashScreenHangler = () => {

    const splash = document.querySelector('.splash');

    setTimeout(() => {
        splash?.classList.add('back-out-up');
        // document.querySelectorAll('.hidden-content').forEach(function (element) {
        //     element.classList.remove('hidden-content');
        // });
    }, 5000);

}
const showPageHandler = () => {

    const hiddenContent = document.querySelector('.hidden-content');

    setTimeout(() => {
        hiddenContent?.classList.remove('hidden-content');
        // document.querySelectorAll('.hidden-content').forEach(function (element) {
        //     element.classList.remove('hidden-content');
        // });
    }, 5300);

}