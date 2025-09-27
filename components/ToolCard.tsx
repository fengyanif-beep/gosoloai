import React from 'react';
import type { AITool } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ToolCardProps {
  tool: AITool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { language, t } = useLanguage();
  return (
    <div className="relative group p-px rounded-xl bg-gradient-to-b from-slate-200 to-transparent transition-all duration-300 hover:-translate-y-2">
        <div className="h-full rounded-[11px] bg-white p-6 flex flex-col transition-all duration-300 group-hover:bg-slate-50/80">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-slate-100 group-hover:bg-slate-200 transition-colors">
                {tool.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{tool.name[language]}</h3>
                <span className="text-sm font-medium text-blue-600 bg-blue-100/50 px-2 py-0.5 rounded">{tool.category[language]}</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-slate-600 flex-grow">{tool.description[language]}</p>
          <a href="#" className="mt-4 text-blue-500 font-semibold group-hover:text-blue-400 transition-colors">
            {t('toolCard.learnMore')} <span className="opacity-0 group-hover:opacity-100 group-hover:ml-1 transition-all">&rarr;</span>
          </a>
        </div>
        <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-blue-500/50 transition-all duration-300 [mask-image:radial-gradient(500px_at_50%_50%,white,transparent)]"></div>
    </div>
  );
};

export default ToolCard;