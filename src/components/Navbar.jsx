import React, { useState, useEffect, useRef } from 'react';
import appLogo from '../assets/appicon.png';

export const Navbar = ({ currentPath, onNavigate, downloadUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const apkLink = downloadUrl || 'https://github.com/roshanavatirak/Regent-Money/releases/latest/download/regent-money.apk';

  const isHome = currentPath === '/' || currentPath === '';
  const isPrivacy = currentPath.includes('privacy');
  const isTerms = currentPath.includes('terms');

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleLink = (e, path, targetHash = null) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (targetHash) {
      if (currentPath !== '/') {
        onNavigate('/');
        setTimeout(() => {
          document.getElementById(targetHash)?.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        document.getElementById(targetHash)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(path);
    }
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0E14]/90 border-b border-white/[0.08] w-full" ref={menuRef}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="/"
          onClick={(e) => handleLink(e, '/')}
          className="flex items-center gap-3 text-left group transition min-w-0"
        >
          <div className="w-10 h-10 shrink-0 rounded-xl overflow-hidden shadow-lg shadow-[#10B981]/25 group-hover:scale-105 transition-transform bg-[#10B981] flex items-center justify-center">
            <img 
              src={appLogo} 
              alt="Regent Money Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="truncate">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-[#10B981] transition-colors truncate">
                Regent Money
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-wide truncate">
              by RAO DEV STUDIOS
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          <a 
            href="/"
            onClick={(e) => handleLink(e, '/')} 
            className={`transition-colors py-1 ${isHome ? 'text-[#10B981]' : 'text-slate-300 hover:text-white'}`}
          >
            Home
          </a>
          <a 
            href="/#features"
            onClick={(e) => handleLink(e, '/', 'features')} 
            className="text-slate-300 hover:text-white transition-colors py-1"
          >
            Features
          </a>
          <a 
            href="/privacy"
            onClick={(e) => handleLink(e, '/privacy')} 
            className={`transition-colors py-1 flex items-center gap-1.5 ${isPrivacy ? 'text-[#10B981]' : 'text-slate-300 hover:text-white'}`}
          >
            <span>Privacy Policy</span>
            {isPrivacy && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>}
          </a>
          <a 
            href="/terms"
            onClick={(e) => handleLink(e, '/terms')} 
            className={`transition-colors py-1 flex items-center gap-1.5 ${isTerms ? 'text-[#10B981]' : 'text-slate-300 hover:text-white'}`}
          >
            <span>Terms of Service</span>
            {isTerms && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>}
          </a>
        </nav>

        {/* Actions & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Download APK Button */}
          <a
            href={apkLink}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#0ea372] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#10B981]/25 transition hover:shadow-xl hover:shadow-[#10B981]/40"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>APK</span>
          </a>

          {/* Three Dots Button for Mobile */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-slate-300 hover:text-white transition active:scale-95"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Floating Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#0E131F]/98 backdrop-blur-2xl shadow-2xl px-4 py-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            <a
              href="/"
              onClick={(e) => handleLink(e, '/')}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                isHome ? 'bg-[#10B981]/15 text-[#10B981]' : 'text-slate-200 hover:bg-white/[0.06]'
              }`}
            >
              <span>Home</span>
              {isHome && <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>}
            </a>

            <a
              href="/#features"
              onClick={(e) => handleLink(e, '/', 'features')}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:bg-white/[0.06] transition"
            >
              <span>Features</span>
            </a>

            <a
              href="/privacy"
              onClick={(e) => handleLink(e, '/privacy')}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                isPrivacy ? 'bg-[#10B981]/15 text-[#10B981]' : 'text-slate-200 hover:bg-white/[0.06]'
              }`}
            >
              <span>Privacy Policy</span>
              {isPrivacy && <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>}
            </a>

            <a
              href="/terms"
              onClick={(e) => handleLink(e, '/terms')}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                isTerms ? 'bg-[#10B981]/15 text-[#10B981]' : 'text-slate-200 hover:bg-white/[0.06]'
              }`}
            >
              <span>Terms of Service</span>
              {isTerms && <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>}
            </a>

            <div className="pt-2 mt-1 border-t border-white/[0.06] flex items-center justify-between px-3 text-[11px] text-slate-400">
              <span>Studio: RAO DEV STUDIOS</span>
              <span className="text-[#10B981] font-mono">v1.0.28</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
