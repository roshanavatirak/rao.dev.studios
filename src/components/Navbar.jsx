import React from 'react';
import appLogo from '../assets/appicon.png';

export const Navbar = ({ currentPath, onNavigate, downloadUrl }) => {
  const apkLink = downloadUrl || 'https://github.com/roshanavatirak/Regent-Money/releases/latest/download/regent-money.apk';

  const isHome = currentPath === '/' || currentPath === '';
  const isPrivacy = currentPath.includes('privacy');
  const isTerms = currentPath.includes('terms');

  const handleLink = (e, path, targetHash = null) => {
    e.preventDefault();
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
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B0E14]/90 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a 
          href="/regentmoney/"
          onClick={(e) => handleLink(e, '/')}
          className="flex items-center gap-3 text-left group transition"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-[#10B981]/25 group-hover:scale-105 transition-transform bg-[#10B981] flex items-center justify-center">
            <img 
              src={appLogo} 
              alt="Regent Money Logo" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-[#10B981] transition-colors">
                Regent Money
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">
              by RAO DEV STUDIOS
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold">
          <a 
            href="/regentmoney/"
            onClick={(e) => handleLink(e, '/')} 
            className={`transition-colors py-1 ${isHome ? 'text-[#10B981]' : 'text-slate-300 hover:text-white'}`}
          >
            Home
          </a>
          <a 
            href="/regentmoney/#features"
            onClick={(e) => handleLink(e, '/', 'features')} 
            className="text-slate-300 hover:text-white transition-colors py-1"
          >
            Features
          </a>
          <a 
            href="/regentmoney/privacy"
            onClick={(e) => handleLink(e, '/privacy')} 
            className={`transition-colors py-1 flex items-center gap-1.5 ${isPrivacy ? 'text-[#10B981]' : 'text-slate-300 hover:text-white'}`}
          >
            <span>Privacy Policy</span>
            {isPrivacy && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>}
          </a>
          <a 
            href="/regentmoney/terms"
            onClick={(e) => handleLink(e, '/terms')} 
            className={`transition-colors py-1 flex items-center gap-1.5 ${isTerms ? 'text-[#10B981]' : 'text-slate-300 hover:text-white'}`}
          >
            <span>Terms of Service</span>
            {isTerms && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>}
          </a>
        </nav>

        {/* Action Buttons & Mobile Quick Links */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Quick links for tablet/mobile */}
          <div className="flex md:hidden items-center gap-1 sm:gap-2 mr-1">
            <a
              href="/regentmoney/privacy"
              onClick={(e) => handleLink(e, '/privacy')}
              className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg transition ${isPrivacy ? 'bg-[#10B981]/15 text-[#10B981]' : 'text-slate-300 hover:text-white'}`}
            >
              Privacy
            </a>
            <a
              href="/regentmoney/terms"
              onClick={(e) => handleLink(e, '/terms')}
              className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg transition ${isTerms ? 'bg-[#10B981]/15 text-[#10B981]' : 'text-slate-300 hover:text-white'}`}
            >
              Terms
            </a>
          </div>

          <a
            href={apkLink}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#0ea372] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#10B981]/25 transition hover:shadow-xl hover:shadow-[#10B981]/40"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span className="hidden sm:inline">Get APK</span>
            <span className="sm:hidden">APK</span>
          </a>
        </div>

      </div>
    </header>
  );
};
