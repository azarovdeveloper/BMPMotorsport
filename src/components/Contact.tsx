import { useTranslation } from '../i18n';
import React from 'react';

const Contact = () => {
    const { t } = useTranslation();
    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2 >{t('contact.title', 'Kontaktujte Nás')}</h2>
                </div>
                <div className="row g-4 justify-content-center mt-4">
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <a href="tel:+420123456789" className="text-decoration-none text-dark d-block h-100">
                            <div className="contact-box text-center p-4 rounded h-100">
                                <div className="contact-icon mx-auto"><i className="bi bi-telephone-fill"></i></div>
                                <h5 className="fw-bold" >{t('contact.phone', 'Telefon')}</h5>
                                <p className="text-muted fs-5">+420 123 456 789</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <a href="https://wa.me/420123456789" className="text-decoration-none text-dark d-block h-100" target="_blank" rel="noopener noreferrer">
                            <div className="contact-box text-center p-4 rounded h-100">
                                <div className="contact-icon mx-auto"><i className="bi bi-whatsapp"></i></div>
                                <h5 className="fw-bold" >{t('contact.whatsapp', 'WhatsApp')}</h5>
                                <p className="text-muted fs-5">+420 123 456 789</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <a href="mailto:info@bpm-motorsport.cz" className="text-decoration-none text-dark d-block h-100">
                            <div className="contact-box text-center p-4 rounded h-100">
                                <div className="contact-icon mx-auto"><i className="bi bi-envelope-fill"></i></div>
                                <h5 className="fw-bold" >{t('contact.email', 'E-mail')}</h5>
                                <p className="text-muted fs-5">info@bpm-motorsport.cz</p>
                            </div>
                        </a>
                    </div>
                </div>
                
                <div className="row mt-5 pt-4">
                    <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-right">
                        <div className="bg-light p-4 h-100 d-flex flex-column justify-content-center text-center" style={{ borderRadius: '1.5rem' }}>
                            <i className="bi bi-clock-fill text-primary fs-1 mb-3"></i>
                            <h4 className="fw-bold mb-4" >{t('contact.hours', 'Pracovní Doba')}</h4>
                            <ul className="list-unstyled text-muted fs-5 lh-lg mb-0">
                                <li >{t('contact.hours.mon_fri', 'Po-Pá: 8:00 - 18:00')}</li>
                                <li >{t('contact.hours.sat', 'So: 9:00 - 13:00')}</li>
                                <li className="text-danger fw-bold" >{t('contact.hours.sun', 'Ne: Zavřeno')}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8" data-aos="fade-left">
                        <div className="overflow-hidden h-100 w-100 position-relative" style={{ minHeight: '350px', background: '#e9ecef', borderRadius: '1.5rem' }}>
                            <iframe 
                                src={`https://maps.google.com/maps?q=${encodeURIComponent('Kraluv Dvur, Czech Republic')}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, minHeight: '350px', position: 'absolute', top: 0, left: 0 }} 
                                allowFullScreen={false} 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title={t('contact.address', 'Adresa Provozovny')}
                            ></iframe>
                            {/* Overlay for address text if needed, or just let the map be */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
