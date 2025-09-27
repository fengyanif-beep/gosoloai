import React, { useState } from 'react';
import type { Prompt } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { CheckIcon } from '../constants';

interface PromptCardProps {
  prompt: Prompt;
}

const CopyIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);
  const { language, t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt[language]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col">
      <div className="flex justify-between items-start gap-4">
        <div>
            <h3 className="text-lg font-bold text-slate-900">{prompt.title[language]}</h3>
            <span className="text-sm font-medium text-blue-600 bg-blue-100/50 px-2 py-0.5 rounded">{prompt.category[language]}</span>
        </div>
         <button
          onClick={handleCopy}
          className={`w-28 flex-shrink-0 flex items-center justify-center px-3 py-1.5 text-sm font-semibold rounded-md transition-all duration-200 ${
            copied
              ? 'bg-blue-500 text-white'
              : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
          }`}
        >
          {copied ? (
              <>
                <CheckIcon className="w-4 h-4 mr-1.5" />
                {t('promptCard.copied')}
              </>
          ) : (
             <>
                <CopyIcon className="w-4 h-4 mr-1.5" />
                {t('promptCard.copy')}
              </>
          )}
        </button>
      </div>
      <p className="mt-4 text-slate-600 bg-slate-100 p-4 rounded-md font-mono text-sm whitespace-pre-wrap flex-grow">
        {prompt.prompt[language]}
      </p>
    </div>
  );
};

export default PromptCard;