import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSignupClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignupClick }) => {
  const { t } = useLanguage();
  return (
<section className="pt-10 pb-16 sm:pt-12 sm:pb-20">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <div className="relative mx-auto max-w-4xl">
      {/* 背景光效 */}
      <div className="absolute -top-8 -left-16 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div
        className="absolute -bottom-8 -right-16 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Logo */}
      <img
        src="https://i.imgur.com/Ck8fsiQ.png"
        alt="GoSoloAI Logo"
        className="mx-auto h-14 w-auto mb-6 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      />

      {/* 标题 */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 tracking-tight leading-snug opacity-0 animate-fade-in-up mb-4 py-1" style={{ animationDelay: '0.2s' }}>
        {t('hero.title')}
      </h1>

      {/* 副标题 */}
      <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 opacity-0 animate-fade-in-up whitespace-pre-wrap" style={{ animationDelay: '0.4s' }}>
        {t('hero.subtitle')}
      </p>
    </div>
  </div>
</section>

  );
};

export default Hero;
