import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onSignupClick: () => void;
}

export default function Hero({ onSignupClick }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className="pt-10 pb-14 sm:pt-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 text-center">

        {/* Logo */}
        <img
          src="https://i.imgur.com/Ck8fsiQ.png"
          alt="GoSoloAI Logo"
          className="mx-auto h-8 w-auto mb-5 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        />

        {/* 标题 */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug opacity-0 animate-fade-in-up mb-3" style={{ animationDelay: '0.2s' }}>
          {t('hero.title') || 'Arm lonely fighters to become legendary unicorns'}
        </h1>

        {/* 副标题 */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 opacity-0 animate-fade-in-up mb-5" style={{ animationDelay: '0.4s' }}>
          {t('hero.subtitle') || "What if your startup’s first year cost nothing? Unlock €30,000+ in founder perks & the best AI tools. Stop paying. Start building."}
        </p>

        {/* 价格 & 按钮区块 */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {/* 黄色价格卡片 */}
          <div className="bg-yellow-400 text-black font-semibold px-3 py-1.5 rounded-md shadow inline-block mb-2 text-xs sm:text-sm">
            Founders Beta: €24.99/year
            <span className="block font-normal text-[11px]">(First 100 members only)</span>
          </div>

          {/* 灰色小字 */}
          <p className="text-slate-500 mb-3 text-xs">Regular price: €99/year.</p>

          {/* 按钮区 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
            <button
              onClick={onSignupClick}
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold shadow text-xs sm:text-sm"
            >
              ⚡ Join for €24.99/year
            </button>
            <a
              href="#"
              className="text-slate-600 font-medium text-xs sm:text-sm"
            >
              Join free (limited access)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
