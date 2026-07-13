import { useTranslation } from '../i18n';
import React, { useEffect } from 'react';
// @ts-ignore
import GLightbox from 'glightbox';

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
                        <a href="https://images.unsplash.com/photo-1632823469888-2d887a030c6a?auto=format&fit=crop&q=80&w=1200" className="glightbox gallery-item" data-gallery="workshop">
                            <img src="https://images.unsplash.com/photo-1632823469888-2d887a030c6a?auto=format&fit=crop&q=80&w=800" alt="Workshop" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.workshop', 'Dílna')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <a href="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=1200" className="glightbox gallery-item" data-gallery="workshop">
                            <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800" alt="Engine" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.engine', 'Motor')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <a href="https://images.unsplash.com/photo-1600706432502-77a0e2e32771?auto=format&fit=crop&q=80&w=1200" className="glightbox gallery-item" data-gallery="workshop">
                            <img src="https://images.unsplash.com/photo-1600706432502-77a0e2e32771?auto=format&fit=crop&q=80&w=800" alt="Suspension" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.suspension', 'Podvozek')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <a href="https://images.unsplash.com/photo-1506509989803-fb91b92d6e3c?auto=format&fit=crop&q=80&w=1200" className="glightbox gallery-item" data-gallery="workshop">
                            <img src="https://images.unsplash.com/photo-1506509989803-fb91b92d6e3c?auto=format&fit=crop&q=80&w=800" alt="Brakes" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.brakes', 'Brzdy')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <a href="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1200" className="glightbox gallery-item" data-gallery="workshop">
                            <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800" alt="Tires" loading="lazy" />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in fs-1 mb-2"></i>
                                <h5 >{t('gallery.tires', 'Pneumatiky')}</h5>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <a href="https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=1200" className="glightbox gallery-item" data-gallery="workshop">
                            <img src="https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800" alt="Mechanical" loading="lazy" />
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
