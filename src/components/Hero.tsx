import { useTranslation } from '../i18n';
import React from 'react';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section id="home">
            <div className="container position-relative z-1">
                <div className="row align-items-center">
                    <div className="col-lg-8 hero-content" data-aos="fade-up">
                        <h1 className="fw-bold" >{t('hero.headline', 'Profesionální Opravy a Údržba Vozidel')}</h1>
                        <p >{t('hero.subheadline', 'Opravy motorů, podvozků, brzd, palivových systémů, servis oleje a profesionální pneuservis.')}</p>
                        <div className="hero-btns">
                            <a href="tel:+420123456789" className="btn-primary-custom text-decoration-none me-3 mb-3 mb-sm-0">
                                <i className="bi bi-telephone-fill"></i> <span >{t('hero.call_now', 'Zavolat Nyní')}</span>
                            </a>
                            <a href="https://wa.me/420123456789" target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-decoration-none mb-3 mb-sm-0">
                                <i className="bi bi-whatsapp"></i> <span >{t('hero.whatsapp', 'Kontaktovat přes WhatsApp')}</span>
                            </a>
                        </div>
                        <div className="trust-badges">
                            <div className="trust-badge"><i className="bi bi-person-check-fill"></i><span >{t('trust.mechanics', 'Zkušení Mechanici')}</span></div>
                            <div className="trust-badge"><i className="bi bi-gear-fill"></i><span >{t('trust.parts', 'Kvalitní Díly')}</span></div>
                            <div className="trust-badge"><i className="bi bi-lightning-fill"></i><span >{t('trust.fast', 'Rychlý Servis')}</span></div>
                            <div className="trust-badge"><i className="bi bi-shield-check"></i><span >{t('trust.warranty', 'Záruka na Opravy')}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
