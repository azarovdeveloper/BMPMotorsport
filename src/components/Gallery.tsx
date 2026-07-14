import { useTranslation } from '../i18n';
import React, { useEffect } from 'react';
// @ts-ignore
import GLightbox from 'glightbox';
import { publicAsset } from '../assets';

const Gallery = () => {
    const { t } = useTranslation();
    useEffect(() => {
        const lightbox = GLightbox({
            selector: '.glightbox'
        });
        return () => {
            lightbox.destroy();
        };
    }, []);

    return (
        <section id="gallery" className="section-padding bg-light">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2 >{t('gallery.title', 'Galerie')}</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <a href={publicAsset('/img/gal1.jpg')} className="glightbox gallery-item" data-gallery="workshop">
                            <img src={publicAsset('/img/gal1.jpg')} alt="Workshop" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.workshop', 'Dílna')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <a href={publicAsset('/img/gal6.jpg')} className="glightbox gallery-item" data-gallery="workshop">
                            <img src={publicAsset('/img/gal6.jpg')} alt="Engine" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.engine', 'Motor')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <a href={publicAsset('/img/gal3.jpg')} className="glightbox gallery-item" data-gallery="workshop">
                            <img src={publicAsset('/img/gal3.jpg')} alt="Suspension" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.suspension', 'Podvozek')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <a href={publicAsset('/img/gal2.jpg')} className="glightbox gallery-item" data-gallery="workshop">
                            <img src={publicAsset('/img/gal2.jpg')} alt="Brakes" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.brakes', 'Brzdy')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <a href={publicAsset('/img/gal5.jpg')} className="glightbox gallery-item" data-gallery="workshop">
                            <img src={publicAsset('/img/gal5.jpg')} alt="Tires" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.tires', 'Pneumatiky')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <a href={publicAsset('/img/gal4.jpg')} className="glightbox gallery-item" data-gallery="workshop">
                            <img src={publicAsset('/img/gal4.jpg')} alt="Mechanical" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.mech', 'Mechanika')}</h5>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
