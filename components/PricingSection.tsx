
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckIcon } from '../constants';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();
  const pricingData = t('pricing');

  if (!pricingData || !pricingData.plans || !pricingData.promotion) {
    return null;
  }

  const plans = pricingData.plans as any[];

  return (
    <section id="pricing" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {pricingData.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {pricingData.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col h-full rounded-2xl border p-8 shadow-sm transition-transform duration-300 ${
                plan.isFeatured 
                  ? 'border-blue-500 md:scale-105' 
                  : 'border-slate-200'
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 -translate-y-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider left-1/2 -translate-x-1/2">
                  {plan.badge}
                </div>
              )}

              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                <div className="mt-6">
                  <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-lg font-medium text-slate-500">{plan.frequency}</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {(plan.features as string[]).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <button
                  className={`w-full px-6 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    plan.isFeatured
                      ? 'text-white bg-blue-500 hover:bg-blue-600 focus:ring-blue-400 focus:ring-offset-white'
                      : 'text-blue-500 bg-blue-50 hover:bg-blue-100 focus:ring-blue-400 focus:ring-offset-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-gradient-to-r from-red-500 to-rose-500 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-red-500/20 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {pricingData.promotion.line1}
            </h3>
            <p className="mt-2 text-lg text-red-100">
              {pricingData.promotion.line2}
            </p>
            <p className="mt-4 text-sm text-red-200 opacity-90">
              {pricingData.promotion.regularPrice}
            </p>
            <div className="mt-8">
              <button className="px-8 py-3 text-lg font-semibold text-red-600 bg-white rounded-lg shadow-md hover:bg-red-50 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white">
                {pricingData.promotion.cta}
              </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;