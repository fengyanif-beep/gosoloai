import React, { useState } from 'react';
import { PlusIcon } from '../constants';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-left gap-4 group"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-slate-800 group-hover:text-blue-500 transition-colors">{question}</span>
        <span className="flex-shrink-0 mt-1">
          <PlusIcon className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
        </span>
      </button>
      <div
        style={{ maxHeight: isOpen ? '200px' : '0px' }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <p className="pt-4 text-slate-600">
            {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;