document.addEventListener('DOMContentLoaded', (e) => {
    intersectionObserverHandler();
    // splashScreenHandler();
    // showPageHandler();

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

const custom_cursor = document.getElementById('cursor');
const pointer = document.getElementById('pointer');

const animateCursor = (event, interacting, interactable) => {
    let cursorX = `calc(${event.clientX}px - 1.125rem)`,
        cursorY = `calc(${event.clientY}px - 1.125rem)`;

    let pointerX = `calc(${event.clientX}px - 0.25rem)`,
        pointerY = `calc(${event.clientY}px - 0.25rem)`;

    pointer.style.transform = `translate(${pointerX}, ${pointerY})`;

    const dimensions = interacting ? interactable.getBoundingClientRect() : null;
    const radius = interacting ? '5px' : '50%';

    if (interacting) {
        cursorX = (dimensions.x - 2) + 'px';
        cursorY = (dimensions.y - 2) + 'px';
    };

    const cursor_keyframes = {
        transform: `translate(${cursorX}, ${cursorY})`,
        width: interacting ? `${dimensions.width + 1}px` : '2rem',
        height: interacting ? `${dimensions.height + 4}px` : '2rem',
        borderRadius: radius,
    };

    custom_cursor.animate(cursor_keyframes, {
        duration: 400,
        fill: 'forwards'
    });
};

window.onmousemove = (event) => {
    const interactable = event.target.closest('.interactable'),
        interacting = (interactable !== null);

    animateCursor(event, interacting, interactable);
};
