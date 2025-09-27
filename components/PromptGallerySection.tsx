import React from 'react';
import { PROMPTS } from '../constants';
import PromptCard from './PromptCard';
import { useLanguage } from '../context/LanguageContext';

const PromptGallerySection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="prompts" className="py-20 sm:py-24 bg-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{t('promptGallery.title')}</h2>
          <p className="mt-4 text-lg text-slate-600">{t('promptGallery.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROMPTS.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromptGallerySection;