import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSignupClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignupClick }) => {
  const { t } = useLanguage();
  return (
    <section className="pt-12 pb-20 sm:pt-14 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="relative mx-auto max-w-5xl">
          {/* 背景光效 */}
          <div className="absolute -top-10 -left-16 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
          <div
            className="absolute -bottom-10 -right-16 w-40 h-40 bg-blue-500/10 rounded-full filter blur-3xl opacity-50 animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
          
          {/* Logo */}
          <img 
            src="https://i.imgur.com/Ck8fsiQ.png" 
            alt="GoSoloAI Logo" 
            className="mx-auto h-14 w-auto mb-6 opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.1s' }} 
          />

          {/* 标题 */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 tracking-tight leading-snug opacity-0 animate-fade-in-up mb-4 py-1" style={{ animationDelay: '0.2s' }}>
            {t('hero.title')}
          </h1>

          {/* 副标题 */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 opacity-0 animate-fade-in-up whitespace-pre-wrap" style={{ animationDelay: '0.4s' }}>
            {t('hero.subtitle')}
          </p>

          {/* 价格区块 */}
          <div className="mt-10 space-y-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="inline-block bg-gradient-to-r from-yellow-300 to-amber-400 text-yellow-900 font-bold px-5 py-3 rounded-xl shadow-lg">
              <p className="text-lg">{t('hero.promotion.line1')}</p>
              <p className="text-xs font-semibold uppercase tracking-wider">{t('hero.promotion.line2')}</p>
            </div>
            <p className="text-sm text-slate-500">{t('hero.promotion.regularPrice')}</p>
          </div>

          {/* CTA 按钮 */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={onSignupClick}
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.ctaPrimary')}
            </button>
            <button
              onClick={onSignupClick}
              className="w-full sm:w-auto px-6 py-3 text-base font-semibold text-slate-600 hover:text-blue-500 transition-colors"
            >
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
