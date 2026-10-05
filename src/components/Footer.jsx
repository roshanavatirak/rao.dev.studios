import React from 'react';
import appLogo from '../assets/appicon.png';

export const Footer = ({ onNavigate, latestVersion }) => {
  const versionText = latestVersion ? `v${latestVersion.replace(/^v/, '')}` : 'v1.0.28';

  const handleLink = (e, path, targetHash = null) => {
    e.preventDefault();
    if (targetHash) {
      onNavigate('/');
      setTimeout(() => {
        document.getElementById(targetHash)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    } else {
      onNavigate(path);
    }
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#0B0E14] text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <a 
              href="/regentmoney/"
              onClick={(e) => handleLink(e, '/')}
              className="inline-flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#10B981] flex items-center justify-center group-hover:scale-105 transition-transform">
                <img 
                  src={appLogo} 
                  alt="Regent Money Logo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="font-extrabold text-white text-base tracking-tight group-hover:text-[#10B981] transition-colors">
                Regent Money
              </span>
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              An intelligent, privacy-first personal wealth tracker built with bank-grade local encryption. Designed and engineered by <strong className="text-white">RAO DEV STUDIOS</strong>.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#10B981] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              Official Release {versionText} • Production Ready
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href="/regentmoney/"
                  onClick={(e) => handleLink(e, '/')} 
                  className="hover:text-white transition inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/regentmoney/#features"
                  onClick={(e) => handleLink(e, '/', 'features')} 
                  className="hover:text-white transition inline-block"
                >
                  Features & Automation
                </a>
              </li>
              <li>
                <a 
                  href="/regentmoney/#security"
                  onClick={(e) => handleLink(e, '/', 'security')} 
                  className="hover:text-white transition inline-block"
                >
                  Security Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-white mb-4">
              Trust & Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a 
                  href="/regentmoney/privacy"
                  onClick={(e) => handleLink(e, '/privacy')} 
                  className="hover:text-white transition text-[#10B981] font-semibold inline-flex items-center gap-1.5"
                >
                  <span>Privacy Policy</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                </a>
              </li>
              <li>
                <a 
                  href="/regentmoney/terms"
                  onClick={(e) => handleLink(e, '/terms')} 
                  className="hover:text-white transition inline-block font-medium"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="mailto:roshanawatirak@gmail.com" 
                  className="hover:text-white transition inline-block"
                >
                  roshanawatirak@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://raodevstudios.in" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-xs text-slate-500 hover:text-slate-300 transition"
                >
                  raodevstudios.in
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Security badges & copyright */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <svg className="w-3.5 h-3.5 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>AES-256 Encrypted</span>
            </span>
            <span>•</span>
            <span className="text-slate-400">Local-First SMS Parser</span>
            <span>•</span>
            <span className="text-slate-400">Zero Commercial Tracking</span>
          </div>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} <strong className="text-slate-300 font-medium">RAO DEV STUDIOS</strong>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
