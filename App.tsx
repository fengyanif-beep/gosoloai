import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';
import Header from './components/Header';
import Hero from './components/Hero';
import AIToolsSection from './components/AIToolsSection';
import ValuePropositionSection from './components/ValuePropositionSection';
import PromptGallerySection from './components/PromptGallerySection';
import CommunityCofounderSection from './components/CommunityCofounderSection';
import CofounderMatchingSection from './components/CofounderMatchingSection';
import FirstHelperSection from './components/FirstHelperSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import AuthModal from './components/AuthModal';
import AccountModal from './components/AccountModal';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    auth.signOut();
    setIsAccountModalOpen(false);
  };
  
  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  if (loading) {
    return null; // Or a loading spinner
  }

  return (
    <LanguageProvider>
      <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
        <div className="relative z-10">
          <Header 
            isLoggedIn={!!user}
            onLoginClick={() => openAuthModal('login')}
            onSignupClick={() => openAuthModal('signup')}
            onAccountClick={() => setIsAccountModalOpen(true)}
            onLogoutClick={handleLogout}
          />
          <main>
            <Hero onSignupClick={() => openAuthModal('signup')} />
            <AIToolsSection />
            <ValuePropositionSection />
            <PromptGallerySection />
            <CofounderMatchingSection />
            <FirstHelperSection />
            <PricingSection />
            <FAQSection />
            <CommunityCofounderSection />
          </main>
          <Footer />
        </div>
        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          onAuthSuccess={handleAuthSuccess}
          initialMode={authMode}
        />
        <AccountModal 
          isOpen={isAccountModalOpen}
          onClose={() => setIsAccountModalOpen(false)}
          onLogout={handleLogout}
          user={user}
        />
      </div>
    </LanguageProvider>
  );
};

export default App;