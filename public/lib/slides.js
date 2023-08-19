import PhotoSwipeLightbox from '/photoswipe/photoswipe-lightbox.esm.js';
const lightbox = new PhotoSwipeLightbox({
    // may select multiple "galleries"
    gallery: '#my-gallery',

    // Elements within gallery (slides)
    children: 'a',

    // setup PhotoSwipe Core dynamic import
    pswpModule: () => import('/photoswipe/photoswipe.esm.js')
});
lightbox.init();