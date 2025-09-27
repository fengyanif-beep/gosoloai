import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CTASection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative p-10 rounded-2xl bg-gradient-to-br from-slate-100 to-white border border-slate-200">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/30 to-blue-500/30 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{t('cta.title')}</h2>
                <p className="mt-4 text-lg text-slate-600">
                {t('cta.description')}
                </p>
                <div className="mt-8">
                <a
                    href="#"
                    className="px-8 py-4 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 transform hover:scale-105"
                >
                    {t('cta.button')}
                </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;