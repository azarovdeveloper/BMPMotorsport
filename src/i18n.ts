import { useState, useEffect } from 'react';

// Using a custom event to notify all hooks
const I18N_UPDATE_EVENT = 'i18n_update';

let currentLang = localStorage.getItem('lang') || 'cs';
let currentTranslations: Record<string, string> = {};

const loadTranslations = async (lang: string) => {
    try {
        const res = await fetch(`/lang/${lang}.json`);
        const data = await res.json();
        currentTranslations = data;
        window.dispatchEvent(new Event(I18N_UPDATE_EVENT));
    } catch (e) {
        console.error('Failed to load translations', e);
    }
};

// Initial load
loadTranslations(currentLang);

export const setLanguage = (lang: string) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    loadTranslations(lang);
};

export const useTranslation = () => {
    const [, setTick] = useState(0);
    
    useEffect(() => {
        const listener = () => setTick(t => t + 1);
        window.addEventListener(I18N_UPDATE_EVENT, listener);
        return () => {
            window.removeEventListener(I18N_UPDATE_EVENT, listener);
        };
    }, []);

    const t = (key: string, fallback?: string) => {
        return currentTranslations[key] || fallback || key;
    };

    return { t, currentLang, setLanguage };
};
