
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CommunityCofounderSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="community" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl p-8 md:p-12 bg-blue-50 border border-slate-200 text-center">
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl"></div>
           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-2xl"></div>
           <div className="relative">
                <h3 className="text-3xl font-bold text-slate-900">{t('community.title')}</h3>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">{t('community.description')}</p>
                <a href="#" className="mt-8 inline-block bg-slate-200 text-slate-800 font-semibold px-6 py-3 rounded-md hover:bg-slate-300 transition-colors duration-200">
                {t('community.cta')}
                </a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCofounderSection;
