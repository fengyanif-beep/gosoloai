import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  IdeaIcon, 
  PlanIcon, 
  FinanceIcon, 
  DesignIcon, 
  DevelopIcon, 
  MarketingIcon, 
  ProductivityIcon, 
  CommunityIcon 
} from '../constants';

const ICONS = [
  IdeaIcon,
  PlanIcon,
  FinanceIcon,
  DesignIcon,
  DevelopIcon,
  MarketingIcon,
  ProductivityIcon,
  CommunityIcon,
];

const AIToolsSection: React.FC = () => {
  const { t } = useLanguage();
  const sections = (t('aiTools.sections') as any[]) || [];

  return (
    <section id="ai-tools" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{t('aiTools.title')}</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">{t('aiTools.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section, index) => {
            const IconComponent = ICONS[index];
            return (
              <div key={index} className="h-full relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-left flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/30">
                <span className="absolute top-4 right-6 text-7xl font-bold text-white/10 select-none">{`0${index + 1}`}</span>
                <div className="relative z-10 flex flex-col flex-grow">
                   <div className="mb-4">
                     <IconComponent className="w-8 h-8 text-white" />
                   </div>
                   <h3 className="text-xl font-bold text-white">{section.title}</h3>
                   <p className="mt-2 text-blue-100 text-sm flex-grow">{section.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;