import { useTranslation } from '../i18n';
import React from 'react';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="container text-center text-md-start">
                <div className="row align-items-center">
                    <div className="col-md-4 mb-4 mb-md-0 text-center text-md-start">
                        <div className="footer-brand">
                            <img src="/img/logo_footer_white.png" className="footer-logo" alt="BPM" loading="lazy" />
                            <span className="footer-brand-text">Motorsport</span>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 mb-md-0 text-center">
                        <p className="mb-0" >{t('footer.copyright', '&copy; 2026 BPM Motorsport. Všechna práva vyhrazena.')}</p>
                    </div>
                    <div className="col-md-4 text-center text-md-end">
                        <a href="#" className="me-3" >{t('footer.privacy', 'Zásady Ochrany Osobních Údajů')}</a>
                        <a href="#" >{t('footer.terms', 'Obchodní Podmínky')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
