import React, { useEffect } from 'react';

const FloatingActions = () => {
    useEffect(() => {
        const scrollTopBtn = document.getElementById('scrollTop');

        const handleScroll = () => {
            if (window.scrollY > 300) {
                scrollTopBtn?.classList.add('show');
            } else {
                scrollTopBtn?.classList.remove('show');
            }
        };

        window.addEventListener('scroll', handleScroll);

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        scrollTopBtn?.addEventListener('click', scrollToTop);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            scrollTopBtn?.removeEventListener('click', scrollToTop);
        };
    }, []);

    return (
        <>
            <a href="https://wa.me/420123456789" className="floating-btn btn-float-whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-whatsapp"></i>
            </a>
            <a href="tel:+420123456789" className="floating-btn btn-float-call" aria-label="Call Now">
                <i className="bi bi-telephone-fill"></i>
            </a>
            <button id="scrollTop" className="floating-btn btn-scroll-top" aria-label="Scroll to top">
                <i className="bi bi-arrow-up"></i>
            </button>
        </>
    );
};

export default FloatingActions;
