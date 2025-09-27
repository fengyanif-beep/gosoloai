import React from 'react';
import { COFOUNDER_PROFILES } from '../constants';
import CofounderCard from './CofounderCard';
import { useLanguage } from '../context/LanguageContext';

const CofounderMatchingSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="cofounder-matching" className="py-20 sm:py-24 bg-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{t('cofounderMatching.title')}</h2>
          <p className="mt-4 text-lg text-slate-600">{t('cofounderMatching.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COFOUNDER_PROFILES.map((profile) => (
            <CofounderCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CofounderMatchingSection;