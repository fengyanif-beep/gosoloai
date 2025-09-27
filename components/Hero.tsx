import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSignupClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignupClick }) => {
  const { t } = useLanguage();

  return (
    <section className="pt-12 pb-16 sm:pt-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Logo */}
        <img
          src="https://i.imgur.com/Ck8fsiQ.png"
          alt="GoSoloAI Logo"
          className="mx-auto h-10 w-auto mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        />

        {/* 标题 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 tracking-tight leading-snug opacity-0 animate-fade-in-up mb-4"
            style={{ animationDelay: '0.2s' }}>
          {t('hero.title')}
        </h1>

        {/* 副标题 */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-600 opacity-0 animate-fade-in-up whitespace-pre-wrap mb-6"
           style={{ animationDelay: '0.4s' }}>
          {t('hero.subtitle')}
        </p>

        {/* 价格区块 */}
        <div className="space-y-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg shadow-md inline-block text-sm sm:text-base">
            Founders Beta: Join now for only €24.99/year
            <div className="text-xs font-normal">(FIRST 100 MEMBERS ONLY)</div>
          </div>
          <p className="text-sm text-slate-500">Regular price: €99/year.</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button
              onClick={onSignupClick}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-blue-700 transition"
            >
              ⚡ Join now for only €24.99/year
            </button>
            <button className="text-slate-600 text-sm sm:text-base">
              Join free (limited access)
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
