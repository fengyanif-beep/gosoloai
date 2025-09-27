import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TwitterIcon, LinkedInIcon, GithubIcon } from '../constants';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <a href="#" className="text-2xl font-bold text-slate-900">
              GoSolo<span className="text-blue-500">AI</span>
            </a>
            <p className="text-slate-500 text-base">
              {t('footer.tagline')}
            </p>
            <div className="flex space-x-6">
                <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors"><span className="sr-only">Twitter</span><TwitterIcon className="h-6 w-6" /></a>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors"><span className="sr-only">LinkedIn</span><LinkedInIcon className="h-6 w-6" /></a>
                <a href="#" className="text-slate-500 hover:text-slate-900 transition-colors"><span className="sr-only">GitHub</span><GithubIcon className="h-6 w-6" /></a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">{t('footer.features.title')}</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#ai-tools" className="text-base text-slate-500 hover:text-blue-500">{t('footer.features.aiTools')}</a></li>
                  <li><a href="#prompts" className="text-base text-slate-500 hover:text-blue-500">{t('footer.features.promptGallery')}</a></li>
                  <li><a href="#community" className="text-base text-slate-500 hover:text-blue-500">{t('footer.features.community')}</a></li>
                  <li><a href="#cofounder-matching" className="text-base text-slate-500 hover:text-blue-500">{t('footer.features.findCofounder')}</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">{t('footer.company.title')}</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-slate-500 hover:text-blue-500">{t('footer.company.about')}</a></li>
                  <li><a href="#" className="text-base text-slate-500 hover:text-blue-500">{t('footer.company.blog')}</a></li>
                  <li><a href="#" className="text-base text-slate-500 hover:text-blue-500">{t('footer.company.contact')}</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase">{t('footer.legal.title')}</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-slate-500 hover:text-blue-500">{t('footer.legal.privacy')}</a></li>
                  <li><a href="#" className="text-base text-slate-500 hover:text-blue-500">{t('footer.legal.terms')}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-base text-slate-500 xl:text-center">&copy; {new Date().getFullYear()} GoSoloAI. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;