// CookieBanner.js
import React, { useState } from 'react';
import Cookies from 'js-cookie';

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(!Cookies.get('cookieConsent'));

    const acceptCookies = () => {
        Cookies.set('cookieConsent', 'accepted', { expires: 365 });
        setIsVisible(false);
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-7WTEYMG4ZZ");
    };

    return (
        isVisible && (
            <div className="z-40 fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center text-xs md:text-base">
                <p className="mb-2">
                    This website uses cookies. By continuing to use this
                    site, you consent to the use of cookies and our use of Google Analytics for analytics purposes.
                </p>
                <div className="flex w-full gap-4 justify-center">
                    <button
                        className="bg-primary-text text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={() => { setIsVisible(false); Cookies.remove('cookieConsent'); }}
                    >
                        Reject Cookies
                    </button>
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={acceptCookies}
                    >
                        Accept Cookies
                    </button>
                </div>
            </div>
        )
    );
};

export default CookieBanner;
