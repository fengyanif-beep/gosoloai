import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');

  // 提交邮箱 -> Formspree -> 跳转 Notion
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await fetch('https://formspree.io/f/xzzjgvkr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      window.location.href =
        'https://www.notion.so/1-280b70c7951280bb843bdd3e65a14fea?source=copy_link';
    } catch (err) {
      alert('提交失败，请重试');
    }
  };

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
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 tracking-tight leading-snug opacity-0 animate-fade-in-up mb-4 py-1"
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero.title')}
          </h1>

          {/* 副标题 */}
          <p
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 opacity-0 animate-fade-in-up whitespace-pre-wrap"
            style={{ animationDelay: '0.4s' }}
          >
            {t('hero.subtitle')}
          </p>

          {/* 价格区块 */}
          <div
            className="mt-10 space-y-3 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="inline-block bg-gradient-to-r from-yellow-300 to-amber-400 text-yellow-900 font-bold px-5 py-3 rounded-xl shadow-lg">
              <p className="text-lg">{t('hero.promotion.line1')}</p>
              <p className="text-xs font-semibold uppercase tracking-wider">
                {t('hero.promotion.line2')}
              </p>
            </div>
            <p className="text-sm text-slate-500">
              {t('hero.promotion.regularPrice')}
            </p>
          </div>

          {/* CTA 按钮 */}
          <div
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            {/* 支付按钮 */}
            <a
              href="https://buy.stripe.com/bJedR8fEbdff83WdB82B201"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all duration-300 transform hover:scale-105"
            >
              {t('hero.ctaPrimary')}
            </a>

            {/* Notion 登录按钮 */}
            <button
              onClick={() => setShowModal(true)}
              className="w-full sm:w-auto px-6 py-3 text-base font-semibold text-slate-600 hover:text-blue-500 transition-colors"
            >
              {t('hero.ctaSecondary')}
            </button>
          </div>
        </div>
      </div>

      {/* 登录弹窗 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4 text-slate-800">
              {t('hero.notionLogin.title')}
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder={t('hero.notionLogin.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border rounded mb-4 text-slate-800"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm text-slate-600"
                >
                  {t('hero.notionLogin.cancel')}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  {t('hero.notionLogin.login')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;



