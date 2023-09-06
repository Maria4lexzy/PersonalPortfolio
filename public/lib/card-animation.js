document.addEventListener('DOMContentLoaded', function () {
    // your instersectionobserver code here
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
});
