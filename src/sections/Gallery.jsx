import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default function Gallery(props) {


    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + props.galleryID,
            children: 'a',
            arrowPrev: true,
            arrowNext: true,

            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();
    }, []);

    return (
        <div>
            {/* <div className="pswp-gallery container mx-auto px-5 py-2 lg:px-32 lg:pt-24" id={props.galleryID}>
                <div className='-m-1 flex flex-wrap md:-m-2'>
                    <div className='flex w-1/2 flex-wrap'>
                        {props.images.map((image, index) => (

                            <a className='w-1/2 p-1 md:p-2'
                                href={image.largeURL}
                                data-pswp-width={image.width}
                                data-pswp-height={image.height}
                                key={props.galleryID + '-' + index}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className='block h-full w-full rounded-lg object-cover object-center' src={image.thumbnailURL} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            </div> */}
            <div className='pswp-gallery  container mx-auto px-5 py-2 lg:px-32 lg:pt-24' id={props.galleryID}>
                <div className='-m-1 flex flex-wrap md:-m-2'>
                    {props.images.map((image, index) => (
                        <a className='w-1/2 p-1 md:p-2'
                            href={image.largeURL}
                            data-pswp-width={image.width}
                            data-pswp-height={image.height}
                            key={props.galleryID + '-' + index}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className='block h-full w-full rounded-lg object-cover object-center' src={image.thumbnailURL} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
