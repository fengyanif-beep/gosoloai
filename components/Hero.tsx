import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSignupClick: () => void;
}

export default function Hero({ onSignupClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="pt-12 pb-16 sm:pt-14 sm:pb-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* Logo */}
        <img
          src="https://i.imgur.com/Ck8fsiQ.png"
          alt="GoSoloAI Logo"
          className="mx-auto h-10 w-auto mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        />

        {/* 标题 */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-snug opacity-0 animate-fade-in-up mb-4 whitespace-nowrap" style={{ animationDelay: '0.2s' }}>
          {t('hero.title') || 'Arm lonely fighters to become legendary unicorns'}
        </h1>

        {/* 副标题 */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 opacity-0 animate-fade-in-up mb-6" style={{ animationDelay: '0.4s' }}>
          {t('hero.subtitle') || "What if your startup’s first year cost nothing? Unlock €30,000+ in founder perks & the best AI tools. Stop paying. Start building."}
        </p>

        {/* 价格 & 按钮区块 */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {/* 黄色价格卡片 */}
          <div className="bg-yellow-400 text-black font-bold px-4 py-2 rounded-md shadow-md inline-block mb-2 text-sm sm:text-base">
            Founders Beta: Join now for only €24.99/year
            <span className="block font-normal text-xs">(FIRST 100 MEMBERS ONLY)</span>
          </div>

          {/* 灰色小字 */}
          <p className="text-slate-500 mb-4 text-sm">Regular price: €99/year.</p>

          {/* 按钮区 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onSignupClick}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-md font-bold shadow-md text-sm sm:text-base"
            >
              ⚡ Join now for only €24.99/year
            </button>
            <a
              href="#"
              className="text-slate-600 font-medium text-sm"
            >
              Join free (limited access)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

