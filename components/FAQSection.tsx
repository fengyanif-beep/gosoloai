import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const faqData = t('faq');

  if (!faqData || !faqData.items) {
    return null;
  }

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-1 mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              {faqData.title}
            </h2>
          </div>
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqData.items.map((item: { question: string, answer: string }, index: number) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;