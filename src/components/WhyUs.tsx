import { useTranslation } from '../i18n';
import React from 'react';

const WhyUs = () => {
    const { t } = useTranslation();
    return (
        <section id="why" className="section-padding">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2 >{t('why.title', 'Proč si vybrat nás')}</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="feature-card d-flex align-items-center">
                            <i className="bi bi-person-badge fs-1 text-primary me-4"></i>
                            <h5 className="mb-0 fw-bold" >{t('why.mechanics', 'Zkušení Mechanici')}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="feature-card d-flex align-items-center">
                            <i className="bi bi-car-front fs-1 text-primary me-4"></i>
                            <h5 className="mb-0 fw-bold" >{t('why.brands', 'Všechny Značky Vozidel')}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="feature-card d-flex align-items-center">
                            <i className="bi bi-nut fs-1 text-primary me-4"></i>
                            <h5 className="mb-0 fw-bold" >{t('why.parts', 'Kvalitní Náhradní Díly')}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="feature-card d-flex align-items-center">
                            <i className="bi bi-tag fs-1 text-primary me-4"></i>
                            <h5 className="mb-0 fw-bold" >{t('why.pricing', 'Transparentní Ceny')}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="feature-card d-flex align-items-center">
                            <i className="bi bi-stopwatch fs-1 text-primary me-4"></i>
                            <h5 className="mb-0 fw-bold" >{t('why.turnaround', 'Rychlé Zpracování')}</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="feature-card d-flex align-items-center">
                            <i className="bi bi-shield-check fs-1 text-primary me-4"></i>
                            <h5 className="mb-0 fw-bold" >{t('why.warranty', 'Záruka na Opravy')}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
