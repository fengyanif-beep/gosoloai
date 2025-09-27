import React from 'react';
import { HELPER_LISTINGS } from '../constants';
import HelperListingCard from './HelperListingCard';
import { useLanguage } from '../context/LanguageContext';

const FirstHelperSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="first-helper" className="py-20 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{t('firstHelper.title')}</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{t('firstHelper.subtitle')}</p>
        </div>
        <div className="space-y-8 max-w-5xl mx-auto">
          {HELPER_LISTINGS.map((listing) => (
            <HelperListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstHelperSection;