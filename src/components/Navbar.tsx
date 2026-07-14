import { useTranslation } from '../i18n';
import React, { useEffect, useState } from 'react';
import { publicAsset } from '../assets';

const Navbar = () => {
    const { t, currentLang, setLanguage } = useTranslation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <img src={publicAsset('/img/logo_main.png')} className="navbar-logo" alt="BPM" loading="lazy" />
                    <span>Motorsport</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list fs-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item"><a className="nav-link active" href="#home" >{t('nav.home', 'Domů')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about" >{t('nav.about', 'O nás')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#services" >{t('nav.services', 'Služby')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#brands" >{t('nav.brands', 'Značky')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#gallery" >{t('nav.gallery', 'Galerie')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#reviews" >{t('nav.reviews', 'Recenze')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#faq" >{t('nav.faq', 'FAQ')}</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact" >{t('nav.contact', 'Kontakt')}</a></li>
                        
                        {/* Language Selector */}
                        <li className="nav-item ms-lg-4 mt-3 mt-lg-0 d-flex gap-2">
                            <button 
                                className={`lang-btn ${currentLang === 'cs' ? 'active-lang' : ''}`} 
                                onClick={() => setLanguage('cs')}
                            >
                                CZ
                            </button>
                            <button 
                                className={`lang-btn ${currentLang === 'en' ? 'active-lang' : ''}`} 
                                onClick={() => setLanguage('en')}
                            >
                                EN
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
