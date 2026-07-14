import { useTranslation } from '../i18n';
import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import { publicAsset } from '../assets';

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
                                <p className="review-text text-muted fst-italic lh-lg" >{t('review.1.text', 'Skvělý servis! Mechanici rychle odhalili závadu na motoru a oprava byla provedena profesionálně a za dobrou cenu. Rozhodně doporučuji.')}</p>
                                <div className="reviewer-info d-flex align-items-center mt-4">
                                    <img src={publicAsset('/img/milangula.png')} className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
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
                                <p className="review-text text-muted fst-italic lh-lg" >{t('review.2.text', 'Pravidelně sem jezdím na výměnu oleje a přezutí pneumatik. Vždy perfektní a rychlá domluva. Transparentní jednání bez skrytých poplatků.')}</p>
                                <div className="reviewer-info d-flex align-items-center mt-4">
                                    <img src={publicAsset('/img/jansefzig.png')} className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
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
                                <p className="review-text text-muted fst-italic lh-lg" >{t('review.3.text', 'Měl jsem problém s brzdami a podvozkem na mé Škodovce. Kluci v BPM Motorsport vše opravili na jedničku. Auto teď jezdí jako nové.')}</p>
                                <div className="reviewer-info d-flex align-items-center mt-4">
                                    <img src={publicAsset('/img/romantrnka.png')} className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
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
                                <p className="review-text text-muted fst-italic lh-lg" >{t('review.4.text', 'Velmi profesionální přístup. Moderní vybavení dílny a opravdu rozumí tomu, co dělají. Dostal jsem jasnou nabídku a dodrželi termín.')}</p>
                                <div className="reviewer-info d-flex align-items-center mt-4">
                                    <img src={publicAsset('/img/haribomeda.png')} className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
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
                                <p className="review-text text-muted fst-italic lh-lg" >{t('review.5.text', 'Výborná komunikace. Oprava chladicího systému proběhla bez problémů. Líbí se mi, že mi vysvětlili, co přesně bylo potřeba vyměnit.')}</p>
                                <div className="reviewer-info d-flex align-items-center mt-4">
                                    <img src={publicAsset('/img/sarka.png')} className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
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
                                <p className="review-text text-muted fst-italic lh-lg" >{t('review.6.text', 'Nejlepší autoservis v okolí. Výměna rozvodů a servisní prohlídka proběhly naprosto hladce. Velmi oceňuji čisté a moderní prostředí.')}</p>
                                <div className="reviewer-info d-flex align-items-center mt-4">
                                    <img src={publicAsset('/img/jaromir.png')} className="reviewer-img me-3" alt="Reviewer" loading="lazy" />
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
