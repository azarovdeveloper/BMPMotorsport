import { useTranslation } from '../i18n';
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

const Reviews = () => {
    const { t } = useTranslation();
    const swiperRef = useRef(null);

    useEffect(() => {
        let swiperInstance: Swiper;
        if (swiperRef.current) {
            swiperInstance = new Swiper(swiperRef.current, {
                modules: [Pagination, Autoplay],
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                }
            });
        }
        return () => {
            if (swiperInstance) swiperInstance.destroy();
        };
    }, []);

    return (
        <section id="reviews" className="section-padding overflow-hidden">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2 >{t('reviews.title', 'Hodnocení Zákazníků')}</h2>
                </div>
                <div className="swiper reviews-slider pb-5 mt-4" data-aos="fade-up" data-aos-delay="200" ref={swiperRef}>
                    <div className="swiper-wrapper">
                        {/* Review 1 */}
                        <div className="swiper-slide">
                            <div className="review-card">
                                <div className="stars mb-3">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p className="text-muted fst-italic lh-lg" >{t('review.1.text', 'Skvělý servis! Mechanici rychle odhalili závadu na motoru a oprava byla provedena profesionálně a za dobrou cenu. Rozhodně doporučuji.')}</p>
                                <div className="d-flex align-items-center mt-4">
                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150" className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
                                    <h6 className="mb-0 fw-bold" >{t('review.1.name', 'Jan Novák')}</h6>
                                </div>
                            </div>
                        </div>
                        {/* Review 2 */}
                        <div className="swiper-slide">
                            <div className="review-card">
                                <div className="stars mb-3">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p className="text-muted fst-italic lh-lg" >{t('review.2.text', 'Pravidelně sem jezdím na výměnu oleje a přezutí pneumatik. Vždy perfektní a rychlá domluva. Transparentní jednání bez skrytých poplatků.')}</p>
                                <div className="d-flex align-items-center mt-4">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150" className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
                                    <h6 className="mb-0 fw-bold" >{t('review.2.name', 'Petr Svoboda')}</h6>
                                </div>
                            </div>
                        </div>
                        {/* Review 3 */}
                        <div className="swiper-slide">
                            <div className="review-card">
                                <div className="stars mb-3">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p className="text-muted fst-italic lh-lg" >{t('review.3.text', 'Měl jsem problém s brzdami a podvozkem na mé Škodovce. Kluci v BPM Motorsport vše opravili na jedničku. Auto teď jezdí jako nové.')}</p>
                                <div className="d-flex align-items-center mt-4">
                                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&h=150" className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
                                    <h6 className="mb-0 fw-bold" >{t('review.3.name', 'Martin Dvořák')}</h6>
                                </div>
                            </div>
                        </div>
                        {/* Review 4 */}
                        <div className="swiper-slide">
                            <div className="review-card">
                                <div className="stars mb-3">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p className="text-muted fst-italic lh-lg" >{t('review.4.text', 'Velmi profesionální přístup. Moderní vybavení dílny a opravdu rozumí tomu, co dělají. Dostal jsem jasnou nabídku a dodrželi termín.')}</p>
                                <div className="d-flex align-items-center mt-4">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150" className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
                                    <h6 className="mb-0 fw-bold" >{t('review.4.name', 'Tomáš Kučera')}</h6>
                                </div>
                            </div>
                        </div>
                        {/* Review 5 */}
                        <div className="swiper-slide">
                            <div className="review-card">
                                <div className="stars mb-3">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p className="text-muted fst-italic lh-lg" >{t('review.5.text', 'Výborná komunikace. Oprava chladicího systému proběhla bez problémů. Líbí se mi, že mi vysvětlili, co přesně bylo potřeba vyměnit.')}</p>
                                <div className="d-flex align-items-center mt-4">
                                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=150&h=150" className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
                                    <h6 className="mb-0 fw-bold" >{t('review.5.name', 'Lukáš Veselý')}</h6>
                                </div>
                            </div>
                        </div>
                        {/* Review 6 */}
                        <div className="swiper-slide">
                            <div className="review-card">
                                <div className="stars mb-3">
                                    <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                </div>
                                <p className="text-muted fst-italic lh-lg" >{t('review.6.text', 'Nejlepší autoservis v okolí. Výměna rozvodů a servisní prohlídka proběhly naprosto hladce. Velmi oceňuji čisté a moderní prostředí.')}</p>
                                <div className="d-flex align-items-center mt-4">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150" className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
                                    <h6 className="mb-0 fw-bold" >{t('review.6.name', 'Michal Černý')}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
