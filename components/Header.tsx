import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { GlobeIcon, CheckIcon, ChevronDownIcon } from '../constants';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
  ];

  const selectedLanguage = languages.find(l => l.code === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
      >
        <GlobeIcon className="w-5 h-5 text-slate-500" />
        <span className="hidden sm:inline text-slate-700">{selectedLanguage?.name}</span>
        <ChevronDownIcon className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-md shadow-lg z-20 animate-fade-in-down">
          <ul className="py-1">
            {languages.map(lang => (
              <li key={lang.code}>
                <button
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className="w-full text-left flex items-center justify-between gap-2 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                >
                  <span>{lang.name}</span>
                  {language === lang.code && <CheckIcon className="w-5 h-5 text-blue-500" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Header: React.FC = () => {
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
      window.location.href = 'https://www.notion.so/1-280b70c7951280bb843bdd3e65a14fea?source=copy_link';
    } catch (err) {
      alert('Submit failed, please try again.');
    }
  };

  const navLinks = [
    { href: '#ai-tools', label: t('header.nav.tools') },
    { href: '#prompts', label: t('header.nav.prompts') },
    { href: '#community', label: t('header.nav.community') },
    { href: '#cofounder-matching', label: t('header.nav.cofounders') },
    { href: '#pricing', label: t('header.nav.pricing') },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 text-2xl font-bold text-slate-900">
              <img src="https://i.imgur.com/Ck8fsiQ.png" alt="GoSoloAI Logo" className="h-10 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector(link.href);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-slate-600 hover:text-blue-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
              >
                Try Free
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 邮箱输入弹窗 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4 text-slate-800">
              Enter your email to access
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
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
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
