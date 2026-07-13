import { useTranslation } from '../i18n';
import React from 'react';

const Process = () => {
    const { t } = useTranslation();
    return (
        <section id="process" className="section-padding">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2 >{t('process.title', 'Náš Proces')}</h2>
                </div>
                <div className="row process-timeline g-4 mt-5">
                    <div className="col-lg-3 col-md-6 process-step" data-aos="fade-up" data-aos-delay="100">
                        <div className="process-icon"><i className="bi bi-telephone"></i></div>
                        <h5 className="fw-bold fs-4">1. <span >{t('process.step1', 'Kontakt')}</span></h5>
                    </div>
                    <div className="col-lg-3 col-md-6 process-step" data-aos="fade-up" data-aos-delay="200">
                        <div className="process-icon"><i className="bi bi-search"></i></div>
                        <h5 className="fw-bold fs-4">2. <span >{t('process.step2', 'Prohlídka')}</span></h5>
                    </div>
                    <div className="col-lg-3 col-md-6 process-step" data-aos="fade-up" data-aos-delay="300">
                        <div className="process-icon"><i className="bi bi-tools"></i></div>
                        <h5 className="fw-bold fs-4">3. <span >{t('process.step3', 'Oprava')}</span></h5>
                    </div>
                    <div className="col-lg-3 col-md-6 process-step" data-aos="fade-up" data-aos-delay="400">
                        <div className="process-icon"><i className="bi bi-check-circle"></i></div>
                        <h5 className="fw-bold fs-4">4. <span >{t('process.step4', 'Vyzvednutí')}</span></h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
