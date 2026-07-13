import { useTranslation } from '../i18n';
import React from 'react';

const FAQ = () => {
    const { t } = useTranslation();
    return (
        <section id="faq" className="section-padding bg-light">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                    <h2 >{t('faq.title', 'Časté Dotazy')}</h2>
                </div>
                <div className="row justify-content-center mt-4">
                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                        <div className="accordion" id="faqAccordion">
                            {/* Q1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" >{t('faq.q1', 'Jak dlouho trvá oprava?')}</button>
                                </h2>
                                <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body" >{t('faq.a1', 'Délka závisí na typu opravy. Výměny oleje a pneuservis obvykle řešíme ve stejný den. Složitější opravy mohou trvat několik dní.')}</div>
                                </div>
                            </div>
                            {/* Q2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" >{t('faq.q2', 'Opravujete všechny značky vozidel?')}</button>
                                </h2>
                                <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body" >{t('faq.a2', 'Ano, máme odborné znalosti a diagnostické nástroje pro servis osobních vozidel všech hlavních značek (Škoda, VW, BMW, Audi, Ford, Toyota, atd.).')}</div>
                                </div>
                            </div>
                            {/* Q3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" >{t('faq.q3', 'Mohu si přinést vlastní díly na opravu?')}</button>
                                </h2>
                                <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body" >{t('faq.a3', 'Důrazně doporučujeme používat námi dodané díly, abychom zaručili kvalitu a mohli poskytnout plnou záruku na opravu. U vlastních dílů neposkytujeme záruku.')}</div>
                                </div>
                            </div>
                            {/* Q4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" >{t('faq.q4', 'Poskytujete záruku na provedené opravy?')}</button>
                                </h2>
                                <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body" >{t('faq.a4', 'Ano, na všechny naše mechanické opravy a námi dodané originální nebo kvalitní aftermarket díly poskytujeme plnou záruku.')}</div>
                                </div>
                            </div>
                            {/* Q5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" >{t('faq.q5', 'Jak si mohu rezervovat termín servisu?')}</button>
                                </h2>
                                <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body" >{t('faq.a5', 'Termín si můžete zarezervovat telefonicky, poslat nám zprávu přes WhatsApp, nebo nám napsat e-mail. Ozveme se vám s potvrzením.')}</div>
                                </div>
                            </div>
                            {/* Q6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" >{t('faq.q6', 'Provádíte sezónní přezutí pneumatik a vyvážení?')}</button>
                                </h2>
                                <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body" >{t('faq.a6', 'Ano, poskytujeme kompletní pneuservis včetně sezónního přezutí, přesného vyvažování kol a kontroly stavu pneumatik.')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
