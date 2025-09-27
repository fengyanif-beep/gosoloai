import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { UserIcon, LaptopIcon, RocketIcon } from '../constants';

const ICONS = [
    <UserIcon className="w-8 h-8 text-blue-500" />,
    <LaptopIcon className="w-8 h-8 text-blue-500" />,
    <RocketIcon className="w-8 h-8 text-blue-500" />
];

const ValuePropositionSection: React.FC = () => {
    const { t } = useLanguage();
    
    const roles = (t('valueProposition.roles') as unknown as any[]) || [];

    return (
        <section className="py-20 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        {t('valueProposition.title')}
                    </h2>
                </div>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {roles.map((role, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-xl border border-slate-200 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
                           <div className="flex justify-center items-center w-16 h-16 bg-slate-200 rounded-full mx-auto mb-6">
                               {ICONS[index]}
                           </div>
                           <h3 className="text-xl font-bold text-slate-900">{role.name}</h3>
                           <p className="mt-2 text-slate-600">{role.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuePropositionSection;