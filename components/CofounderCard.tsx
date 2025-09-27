import React from 'react';
import type { CofounderProfile } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface CofounderCardProps {
  profile: CofounderProfile;
}

const CofounderCard: React.FC<CofounderCardProps> = ({ profile }) => {
  const { language, t } = useLanguage();

  return (
    <div className="relative group bg-white border border-slate-200 rounded-lg p-6 flex flex-col text-center items-center hover:bg-slate-50 transition-all duration-300 hover:-translate-y-2">
        <img src={profile.avatarUrl} alt={profile.name} className="w-24 h-24 rounded-full mb-4 border-2 border-slate-200 group-hover:border-blue-500/50 transition-colors"/>
        <h3 className="text-xl font-bold text-slate-900">{profile.name}</h3>
        <div className="flex flex-wrap justify-center gap-2 my-4">
            {profile.skills.map((skill, index) => (
                <span key={index} className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                    {skill[language]}
                </span>
            ))}
        </div>
        <p className="text-slate-600 text-sm flex-grow mb-4">{profile.bio[language]}</p>
        <button className="w-full mt-auto px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors">
            {t('cofounderCard.connect')}
        </button>
    </div>
  );
};

export default CofounderCard;