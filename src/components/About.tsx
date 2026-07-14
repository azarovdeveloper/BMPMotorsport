import { useTranslation } from '../i18n';
import React from 'react';

const About = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6" data-aos="fade-right">
                        <div className="about-img-wrapper">
                            <img src="/img/SRrle.jpg" alt="BPM Motorsport Workshop" className="img-fluid" loading="lazy" />
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-left">
                        <h2 className="fw-bold mb-4" >{t('about.title', 'O BPM Motorsport')}</h2>
                        <p className="text-muted fs-5 lh-lg mb-4" >{t('about.description', 'Spolehlivý autoservis specializující se na mechanické opravy osobních vozidel všech značek. Zaměřujeme se na profesionální diagnostiku, zkušené mechaniky, férové ceny, vysokou kvalitu zpracování a spokojenost zákazníků.')}</p>
                        <ul className="list-unstyled mb-0 d-grid gap-3 fs-5 fw-medium text-secondary">
                            <li><i className="bi bi-check-circle-fill text-primary me-2"></i> Profesionální diagnostika</li>
                            <li><i className="bi bi-check-circle-fill text-primary me-2"></i> Zkušení mechanici</li>
                            <li><i className="bi bi-check-circle-fill text-primary me-2"></i> Férové ceny</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
