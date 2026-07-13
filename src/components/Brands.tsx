import { useTranslation } from '../i18n';
import React from 'react';

const brands = [
    { name: "Škoda", slug: "skoda" },
    { name: "Volkswagen", slug: "volkswagen" },
    { name: "Audi", slug: "audi" },
    { name: "BMW", slug: "bmw" },
    { name: "Mercedes", slug: "mercedes" },
    { name: "Ford", slug: "ford" },
    { name: "Toyota", slug: "toyota" },
    { name: "Opel", slug: "opel" },
    { name: "Honda", slug: "honda" },
    { name: "Hyundai", slug: "hyundai" },
    { name: "Kia", slug: "kia" },
    { name: "Volvo", slug: "volvo" },
    { name: "Land Rover", slug: "landrover" },
    { name: "Jaguar", slug: "jaguar" }
];

const Brands = () => {
    const { t } = useTranslation();

    return (
        <section id="brands" className="section-padding bg-light overflow-hidden">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2 >{t('brands.title', 'Servisované Značky')}</h2>
                    <p className="text-muted mt-3" >{t('brands.subtitle', 'BPM Motorsport provádí servis vozidel všech běžných značek.')}</p>
                </div>
                <div className="marquee-container mt-5" data-aos="fade-up" data-aos-delay="200">
                    <div className="marquee-content">
                        {brands.map((brand, idx) => (
                            <div key={idx} className="brand-logo d-flex justify-content-center align-items-center py-4 border rounded bg-white" style={{ width: '150px', height: '100px' }}>
                                <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${brand.slug}.svg`} alt={brand.name} title={brand.name} style={{ width: '50px', height: '50px', filter: 'opacity(0.6) grayscale(100%)' }} />
                            </div>
                        ))}
                    </div>
                    {/* Duplicate for seamless infinite scroll */}
                    <div className="marquee-content" aria-hidden="true">
                        {brands.map((brand, idx) => (
                            <div key={`dup-${idx}`} className="brand-logo d-flex justify-content-center align-items-center py-4 border rounded bg-white" style={{ width: '150px', height: '100px' }}>
                                <img src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${brand.slug}.svg`} alt={brand.name} title={brand.name} style={{ width: '50px', height: '50px', filter: 'opacity(0.6) grayscale(100%)' }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
