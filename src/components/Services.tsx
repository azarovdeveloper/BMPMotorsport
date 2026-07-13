import { useTranslation } from '../i18n';
import React from 'react';

const Services = () => {
    const { t } = useTranslation();
    return (
        <section id="services" className="section-padding bg-light">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2 >{t('services.title', 'Naše Služby')}</h2>
                </div>
                <div className="row g-4 justify-content-center">
                    {/* Engine Repair */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-card">
                            <div className="service-icon"><i className="bi bi-gear-wide-connected"></i></div>
                            <h4 >{t('service.engine', 'Opravy Motorů')}</h4>
                            <p className="text-muted" >{t('service.engine_desc', 'Kompletní mechanické opravy motorů a diagnostika.')}</p>
                            <ul className="list-unstyled mb-0 mt-4 text-secondary">
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.engine_diag', 'Diagnostika')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.timing', 'Rozvody')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.cooling', 'Chlazení')}</span></li>
                                <li className="mb-0"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.fuel', 'Palivo')}</span></li>
                            </ul>
                        </div>
                    </div>
                    {/* Suspension */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-card">
                            <div className="service-icon"><i className="bi bi-truck-front-fill"></i></div>
                            <h4 >{t('service.suspension', 'Opravy Podvozku')}</h4>
                            <p className="text-muted" >{t('service.suspension_desc', 'Zlepšení stability a komfortu jízdy.')}</p>
                            <ul className="list-unstyled mb-0 mt-4 text-secondary">
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.shock', 'Tlumiče')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.steering', 'Řízení')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.mechanical', 'Mechanika')}</span></li>
                                <li className="mb-0"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.exhaust', 'Výfuk')}</span></li>
                            </ul>
                        </div>
                    </div>
                    {/* Brakes */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-card">
                            <div className="service-icon"><i className="bi bi-vinyl-fill"></i></div>
                            <h4 >{t('service.brakes', 'Servis Brzd')}</h4>
                            <p className="text-muted" >{t('service.brakes_desc', 'Zajištění maximální bezpečnosti a brzdného účinku.')}</p>
                            <ul className="list-unstyled mb-0 mt-4 text-secondary">
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.brake_pads', 'Destičky')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.brake_discs', 'Kotouče')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.inspection', 'Prohlídka')}</span></li>
                                <li className="mb-0"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.preventive', 'Údržba')}</span></li>
                            </ul>
                        </div>
                    </div>
                    {/* Oil & Filters */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-card">
                            <div className="service-icon"><i className="bi bi-droplet-fill"></i></div>
                            <h4 >{t('service.oil', 'Olej a Filtry')}</h4>
                            <p className="text-muted" >{t('service.oil_desc', 'Pravidelná údržba pro dlouhou životnost motoru.')}</p>
                            <ul className="list-unstyled mb-0 mt-4 text-secondary">
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.oil_filter', 'Olejový filtr')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.air_filter', 'Vzduchový filtr')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.cabin_filter', 'Kabinový filtr')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.fuel_filter', 'Palivový filtr')}</span></li>
                                <li className="mb-0"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.transmission', 'Převodovka')}</span></li>
                            </ul>
                        </div>
                    </div>
                    {/* Tires */}
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-card">
                            <div className="service-icon"><i className="bi bi-record-circle-fill"></i></div>
                            <h4 >{t('service.tires', 'Pneuservis')}</h4>
                            <p className="text-muted" >{t('service.tires_desc', 'Profesionální přezutí, vyvažování a kontrola pneu.')}</p>
                            <ul className="list-unstyled mb-0 mt-4 text-secondary">
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.tire_replacement', 'Výměna pneu')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.tire_mounting', 'Přezutí')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.tire_balancing', 'Vyvažování')}</span></li>
                                <li className="mb-2"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.seasonal_tire', 'Sezónní')}</span></li>
                                <li className="mb-0"><i className="bi bi-check2 text-primary me-2 fw-bold"></i><span >{t('service.wheel_rotation', 'Rotace')}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
