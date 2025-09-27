import React from 'react';
import type { HelperListing } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { StarIcon, LightningBoltIcon, BuildingOfficeIcon, MapPinIcon, ClockIcon } from '../constants';

interface HelperListingCardProps {
  listing: HelperListing;
}

const HelperListingCard: React.FC<HelperListingCardProps> = ({ listing }) => {
  const { language, t } = useLanguage();

  return (
    <div className="w-full transition-all duration-300 hover:scale-[1.02]">
        <div className="flex justify-between items-center mb-2 px-2">
            <div className="flex items-center gap-4">
                <p className="text-sm text-slate-500">{listing.postedAgo[language]}</p>
                {listing.tags.map((tag, index) => (
                    <span key={index} className="hidden sm:inline-block text-xs font-medium text-blue-700 bg-blue-100/80 px-2.5 py-1 rounded-full">
                        {tag[language]}
                    </span>
                ))}
            </div>
            <button className="p-2 rounded-full text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors">
                <StarIcon className="w-5 h-5" />
            </button>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <img src={listing.companyLogoUrl} alt={`${listing.companyName[language]} logo`} className="w-12 h-12 rounded-lg object-contain border border-slate-200" />
                <div>
                    <h3 className="text-lg font-bold text-slate-900">{listing.title[language]}</h3>
                    <p className="text-slate-600">{listing.companyName[language]}</p>
                </div>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2 w-full sm:w-auto">
                <p className="font-bold text-slate-800 text-lg">{listing.salary[language]}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                    {listing.quickApply && (
                        <span className="flex items-center gap-1.5">
                            <LightningBoltIcon className="w-4 h-4" />
                            {t('firstHelper.card.quickApply')}
                        </span>
                    )}
                    {listing.isRemote && (
                         <span className="flex items-center gap-1.5">
                            <BuildingOfficeIcon className="w-4 h-4" />
                            {t('firstHelper.card.remote')}
                        </span>
                    )}
                    <span className="flex items-center gap-1.5">
                        <MapPinIcon className="w-4 h-4" />
                        {listing.location[language]}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4" />
                        {listing.jobType[language]}
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HelperListingCard;