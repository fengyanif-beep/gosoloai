import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { XIcon, GoogleIcon } from '../constants';
import { auth } from '../firebase';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile,
    AuthError
} from 'firebase/auth';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAuthSuccess: () => void;
    initialMode: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthSuccess, initialMode }) => {
    const { t } = useLanguage();
    const [mode, setMode] = useState(initialMode);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
            setEmail('');
            setPassword('');
            setName('');
            setError('');
        }
    }, [isOpen, initialMode]);

    if (!isOpen) {
        return null;
    }

    const isLogin = mode === 'login';
    
    const getErrorMessage = (errorCode: string) => {
        const key = `auth.errors.${errorCode}` as const;
        const message = t(key);
        // if translation exists, return it, otherwise return generic error
        return message === key ? t('auth.errors.generic') : message;
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            if (isLogin) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                if (userCredential.user) {
                   await updateProfile(userCredential.user, { displayName: name });
                }
            }
            onAuthSuccess();
        } catch (e) {
            const authError = e as AuthError;
            setError(getErrorMessage(authError.code));
        } finally {
            setLoading(false);
        }
    };
    
    const handleGoogleAuth = async () => {
        setLoading(true);
        setError('');
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
            onAuthSuccess();
        } catch (e) {
            const authError = e as AuthError;
            setError(getErrorMessage(authError.code));
        } finally {
            setLoading(false);
        }
    }

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
    };

    const toggleMode = () => {
        setMode(isLogin ? 'signup' : 'login');
        setError('');
    };

    return (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in-down"
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
        >
          <div className="bg-white w-full max-w-sm rounded-xl border border-slate-200 shadow-2xl relative p-8">
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors" aria-label="Close">
              <XIcon className="w-6 h-6" />
            </button>
    
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-slate-900">
                    {isLogin ? t('auth.loginTitle') : t('auth.signupTitle')}
                </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{t('auth.name')}</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Alex Chen"
                            required
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">{t('auth.emailAddress')}</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                 <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">{t('auth.password')}</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="••••••••"
                        required
                    />
                </div>
                
                {error && <p className="text-sm text-red-600">{error}</p>}

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full px-6 py-3 text-base font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? '...' : (isLogin ? t('auth.loginCTA') : t('auth.signupCTA'))}
                    </button>
                </div>
            </form>

            <div className="relative my-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-slate-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-slate-500">{t('auth.or')}</span>
                </div>
            </div>

            <div>
                <button
                    onClick={handleGoogleAuth}
                    disabled={loading}
                    className="w-full flex justify-center items-center gap-3 px-6 py-3 text-base font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-white transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    <GoogleIcon className="w-5 h-5" />
                    {isLogin ? t('auth.loginWithGoogle') : t('auth.signupWithGoogle')}
                </button>
            </div>

            <p className="mt-6 text-center text-sm text-slate-600">
                {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}{' '}
                <button onClick={toggleMode} className="font-semibold text-blue-500 hover:underline focus:outline-none">
                    {isLogin ? t('auth.signup') : t('auth.login')}
                </button>
            </p>

          </div>
        </div>
    );
};

export default AuthModal;