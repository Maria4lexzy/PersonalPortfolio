
const getColorPreference = () => {
    let preference = localStorage.getItem('theme-preference');

    if (!preference) {
        preference = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }

    return preference;
};

const setPreference = (themeName) => {
    localStorage.setItem('theme-preference', themeName);
    if (themeName === 'light') {
        document.documentElement.classList.remove('dark');
    } else {
        document.documentElement.classList.add('dark');
    }
};

function toggleState() {
    setPreference(getColorPreference() === 'dark' ? 'light' : 'dark');
}
(() => {
    const themeName = getColorPreference();

    setPreference(themeName);
})();

