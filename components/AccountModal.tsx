import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { XIcon, UserIcon } from '../constants';
import type { User } from 'firebase/auth';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  user: User | null;
}

const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose, onLogout, user }) => {
  const { t } = useLanguage();

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in-down"
      onClick={handleBackdropClick}
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white w-full max-w-md rounded-xl border border-slate-200 shadow-2xl relative p-8">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors" aria-label="Close">
          <XIcon className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center border-2 border-slate-200 mb-4">
                {user?.photoURL ? (
                    <img src={user.photoURL} alt="User avatar" className="w-full h-full rounded-full object-cover" />
                ) : (
                    <UserIcon className="w-10 h-10 text-slate-500" />
                )}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">
              {t('auth.accountModal.title')}
            </h2>
        </div>
        
        <div className="space-y-4">
            {user?.displayName && (
                <div>
                    <label className="block text-sm font-medium text-slate-500">{t('auth.accountModal.nameLabel')}</label>
                    <p className="mt-1 text-slate-800 font-semibold">{user.displayName}</p>
                </div>
            )}
            {user?.email && (
                <div>
                    <label className="block text-sm font-medium text-slate-500">{t('auth.accountModal.emailLabel')}</label>
                    <p className="mt-1 text-slate-800 font-semibold">{user.email}</p>
                </div>
            )}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
            <button
              onClick={onLogout}
              className="w-full px-6 py-3 text-base font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all"
            >
              {t('auth.accountModal.logoutButton')}
            </button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;