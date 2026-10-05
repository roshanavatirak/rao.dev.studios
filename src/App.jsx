import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { fetchLatestRelease } from './services/releaseService';

export function App() {
  const [release, setRelease] = useState({
    version: '1.0.28',
    tagName: 'v1.0.28',
    downloadUrl: 'https://github.com/roshanavatirak/Regent-Money/releases/latest/download/regent-money.apk',
    sizeMb: null,
  });

  useEffect(() => {
    fetchLatestRelease().then((rel) => {
      if (rel) setRelease(rel);
    });
  }, []);

  // Normalize current path (handles /regentmoney, /regentmoney/privacy, /privacy, /terms, etc.)
  const getNormalizedRoute = () => {
    const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
    const hash = window.location.hash.toLowerCase();

    if (hash === '#privacy' || path.endsWith('/privacy') || path === '/regentmoney/privacy') {
      return '/privacy';
    }
    if (hash === '#terms' || path.endsWith('/terms') || path === '/regentmoney/terms') {
      return '/terms';
    }
    return '/';
  };

  const [currentRoute, setCurrentRoute] = useState(getNormalizedRoute);

  // Update dynamic document title for SEO & professionalism
  useEffect(() => {
    if (currentRoute === '/privacy') {
      document.title = "Privacy Policy & Zero-Tolerance Guarantee | Regent Money — RAO DEV STUDIOS";
    } else if (currentRoute === '/terms') {
      document.title = "Terms of Service & Legal Framework | Regent Money — RAO DEV STUDIOS";
    } else {
      document.title = "Regent Money — Intelligent Personal Wealth by RAO DEV STUDIOS";
    }
  }, [currentRoute]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getNormalizedRoute());
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Determine target URL respecting basePath (e.g. /regentmoney/)
    const currentPath = window.location.pathname;
    let newPath = route;

    if (currentPath.includes('/regentmoney') || currentPath.startsWith('/regentmoney')) {
      newPath = route === '/' ? '/regentmoney/' : `/regentmoney${route}`;
    }

    try {
      window.history.pushState({}, '', newPath);
    } catch {
      window.location.hash = route.replace('/', '#');
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0E14] text-white flex flex-col font-sans selection:bg-[#10B981] selection:text-white">
      <Navbar currentPath={currentRoute} onNavigate={navigateTo} downloadUrl={release.downloadUrl} />
      
      <main className="flex-grow">
        {currentRoute === '/privacy' ? (
          <PrivacyPage onNavigate={navigateTo} />
        ) : currentRoute === '/terms' ? (
          <TermsPage onNavigate={navigateTo} />
        ) : (
          <HomePage onNavigate={navigateTo} release={release} />
        )}
      </main>

      <Footer onNavigate={navigateTo} latestVersion={release.version} />
    </div>
  );
}

export default App;
