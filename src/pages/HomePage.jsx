import React, { useState } from 'react';
import appLogo from '../assets/appicon.png';

export const HomePage = ({ onNavigate, release = {} }) => {
  const tagName = release.tagName || 'v1.0.28';
  const downloadUrl = release.downloadUrl || 'https://github.com/roshanavatirak/Regent-Money/releases/latest/download/regent-money.apk';
  const sizeBadge = release.sizeMb ? ` • ${release.sizeMb} MB` : '';

  // Active FAQ state for smooth accordion
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How does the SMS engine work without invading my personal privacy?",
      a: "Our engine uses strict on-device heuristics. It only inspects messages originating from registered financial sender IDs (like HDFC, SBI, ICICI, Axis, Paytm). Personal texts from contacts or unknown 10-digit mobile numbers are completely ignored and discarded in RAM. Raw message text is NEVER uploaded to any server or cloud."
    },
    {
      q: "Can RAO DEV STUDIOS see my bank balances or passwords?",
      a: "Never. We do not have access to your bank accounts, OTPs, or passwords. All financial records are encrypted with AES-256 on your local device and transmitted over TLS 1.3 only when syncing your personal profile to our secure backend."
    },
    {
      q: "Why do you use Google Sign-In?",
      a: "Google OAuth 2.0 provides enterprise-grade authentication without requiring you to store plaintext passwords on our servers. We strictly request basic identity scopes (name, email, avatar) under Google's Limited Use policy to authenticate your session."
    },
    {
      q: "How do I permanently delete my account and data?",
      a: "You have complete data sovereignty. Send an email to roshanawatirak@gmail.com with your registered email, and our team will permanently erase all your synced database records within 48 hours."
    }
  ];

  return (
    <div className="space-y-24 md:space-y-36 pb-24 overflow-x-hidden w-full">
      
      {/* 1. Hero Section */}
      <section className="relative pt-8 md:pt-16 px-4 sm:px-6 max-w-5xl mx-auto text-center overflow-hidden w-full">
        
        {/* Subtle emerald ambient aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-[#10B981]/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none -z-10" />

        {/* Studio Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-semibold text-slate-300 mb-8 backdrop-blur-md shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>RAO DEV STUDIOS</span>
          <span className="text-slate-600">•</span>
          <span className="text-[#10B981] font-bold">REGENT MONEY {tagName}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-snug mb-6 sm:mb-8">
          <span>Intelligent Personal Wealth.</span>
          <span className="block mt-2.5 sm:mt-4">
            <span className="text-[#10B981] mr-2 sm:mr-2.5">Zero-Tolerance</span>
            <span className="text-white">on Data Privacy.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          Automate bank SMS expense detection with isolated on-device parsing. Guarded by AES-256 hardware encryption, biometric lock, and an absolute commitment: we never sell, track, or monetize your personal data.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={downloadUrl}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#10B981] hover:bg-[#0ea372] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#10B981]/25 hover:shadow-2xl hover:shadow-[#10B981]/40 transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download Release APK ({tagName}{sizeBadge})</span>
          </a>

          <button
            onClick={() => onNavigate('/privacy')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-white border border-white/[0.1] font-semibold text-sm transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 text-[#10B981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>Read Privacy Policy</span>
          </button>
        </div>

        {/* Institutional Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto p-6 rounded-2xl bg-[#151922] border border-white/[0.08] shadow-2xl">
          <div className="text-center p-2">
            <div className="text-xl sm:text-2xl font-extrabold text-white">AES-256</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Hardware-Backed KeyStore</div>
          </div>
          <div className="text-center p-2 border-l border-white/[0.06]">
            <div className="text-xl sm:text-2xl font-extrabold text-[#10B981]">TLS 1.3</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Forced Transport Security</div>
          </div>
          <div className="text-center p-2 border-l-0 md:border-l border-white/[0.06]">
            <div className="text-xl sm:text-2xl font-extrabold text-white">Local-First</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">On-Device RAM Engine</div>
          </div>
          <div className="text-center p-2 border-l border-white/[0.06]">
            <div className="text-xl sm:text-2xl font-extrabold text-[#10B981]">Zero Ads</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">100% Commercial Privacy</div>
          </div>
        </div>

      </section>

      {/* 2. Interactive App Interface Mockup */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-[#151922] border border-white/[0.1] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-8 border-b border-white/[0.06]">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-[#10B981]">Financial Terminal</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Application Interface Preview</h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25">
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                Biometric Enclave Active
              </span>
            </div>
          </div>

          {/* Realistic Financial Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Net Balance & Sparkline */}
            <div className="p-6 rounded-2xl bg-[#0B0E14] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Net Balance</span>
                <div className="text-3xl font-extrabold text-white mt-2">₹1,48,250.00</div>
                <div className="text-xs text-[#10B981] font-semibold mt-1 flex items-center gap-1">
                  <span>↑ +12.4%</span>
                  <span className="text-slate-500">vs last cycle</span>
                </div>
              </div>

              {/* Sparkline representation */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Monthly Inflow</span>
                  <span className="text-white font-semibold">₹85,000</span>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Monthly Outflow</span>
                  <span className="text-white font-semibold">₹36,750</span>
                </div>
              </div>
            </div>

            {/* Smart Isolated Parser Feed */}
            <div className="p-6 rounded-2xl bg-[#0B0E14] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">On-Device Parser</span>
                <span className="text-[10px] bg-[#10B981]/15 text-[#10B981] px-2 py-0.5 rounded font-bold">WHITELISTED</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">HDFC Bank Alert</div>
                    <div className="text-[11px] text-slate-400">Swiggy • Food & Dining</div>
                  </div>
                  <div className="text-xs font-bold text-white">-₹450.00</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white">Salary Credit</div>
                    <div className="text-[11px] text-slate-400">Direct Deposit • Income</div>
                  </div>
                  <div className="text-xs font-bold text-[#10B981]">+₹85,000.00</div>
                </div>
              </div>
            </div>

            {/* Budget Health Metric */}
            <div className="p-6 rounded-2xl bg-[#0B0E14] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Budget Discipline</span>
                <div className="text-3xl font-extrabold text-white mt-2">43% <span className="text-sm font-normal text-slate-400">used</span></div>
                <div className="w-full bg-white/[0.08] h-2.5 rounded-full overflow-hidden mt-3">
                  <div className="bg-[#10B981] h-full w-[43%] rounded-full"></div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 leading-relaxed">
                ₹48,250 remaining across 8 active expense categories this month.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Deep Architectural Pillars */}
      <section id="features" className="px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold tracking-wider text-[#10B981]">Engineering Rigor</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Engineered with Zero-Tolerance Data Privacy
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm mt-3">
            Every layer of Regent Money was constructed to safeguard your financial privacy from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-[#151922] border border-white/[0.08] space-y-4 hover:border-[#10B981]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">1. Bank-Grade Encryption at Rest (AES-256)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your cached balance sheet, budget goals, and access tokens are secured locally on your phone using high-speed C++ MMKV storage tied directly to the Android KeyStore Hardware Security Module (HSM). If your device is lost or stolen, your vault remains unreadable.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-[#151922] border border-white/[0.08] space-y-4 hover:border-[#10B981]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">2. Hardened Transport Encryption (TLS 1.3)</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              When syncing your profile across devices, data travels exclusively through modern Transport Layer Security (TLS 1.3 / HTTPS) pipelines with 2048-bit RSA/ECDSA encryption. Plaintext or insecure network requests are unconditionally rejected by edge firewalls.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-[#151922] border border-white/[0.08] space-y-4 hover:border-[#10B981]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">3. Isolated On-Device SMS Engine</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our parser operates strictly inside your phone’s temporary memory. It inspects only authorized financial institution Sender IDs (Banks, UPI, Cards) to extract transaction amounts. <strong>Raw messages, personal chats, OTPs, and verification PINs never touch our servers or leave your device.</strong>
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-3xl bg-[#151922] border border-white/[0.08] space-y-4 hover:border-[#10B981]/50 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#10B981]/15 text-[#10B981] flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">4. Zero Monetization & Complete Data Sovereignty</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              RAO DEV STUDIOS does not monetize by selling your financial trends to third parties, lenders, or data brokers. We display zero third-party advertisements and embed zero tracking SDKs. You retain full rights to trigger a permanent, irreversible purge of your account at any time.
            </p>
          </div>

        </div>

        {/* 4. Industry Comparison Table */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#151922] border border-white/[0.08] overflow-hidden">
          <div className="mb-6">
            <span className="text-xs uppercase font-bold tracking-wider text-[#10B981]">Transparent Accountability</span>
            <h3 className="text-2xl font-bold text-white mt-1">How Regent Money Compares</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] text-slate-400 text-xs uppercase tracking-wider">
                  <th className="py-4 pr-6">Data Protection Dimension</th>
                  <th className="py-4 px-6 text-slate-500">Standard Fintech Apps</th>
                  <th className="py-4 pl-6 text-[#10B981] font-bold">Regent Money (RAO DEV STUDIOS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.05] text-slate-300">
                <tr>
                  <td className="py-4 pr-6 font-semibold text-white">SMS Message Processing</td>
                  <td className="py-4 px-6 text-slate-400">Uploaded to cloud servers for text scraping</td>
                  <td className="py-4 pl-6 text-white font-medium flex items-center gap-2">
                    <span className="text-[#10B981]">✓</span> 100% On-Device (Raw texts never leave phone)
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-semibold text-white">Data Monetization</td>
                  <td className="py-4 px-6 text-slate-400">Aggregated and sold to lenders & ad networks</td>
                  <td className="py-4 pl-6 text-white font-medium flex items-center gap-2">
                    <span className="text-[#10B981]">✓</span> Absolute Zero Sale Guarantee
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-semibold text-white">Third-Party Tracking SDKs</td>
                  <td className="py-4 px-6 text-slate-400">Facebook, Google Ads, Adjust, AppsFlyer</td>
                  <td className="py-4 pl-6 text-white font-medium flex items-center gap-2">
                    <span className="text-[#10B981]">✓</span> Zero third-party advertising or tracking SDKs
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pr-6 font-semibold text-white">Account & Data Purge</td>
                  <td className="py-4 px-6 text-slate-400">Complicated retention, ghost records retained</td>
                  <td className="py-4 pl-6 text-white font-medium flex items-center gap-2">
                    <span className="text-[#10B981]">✓</span> 48-Hour complete server-wide data wipe
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* 5. Frequently Asked Questions (Trust & Security) */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-[#10B981]">Clear Transparency</span>
          <h2 className="text-3xl font-extrabold text-white mt-2">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-2xl bg-[#151922] border border-white/[0.08] overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 text-white font-bold text-sm sm:text-base hover:text-[#10B981] transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`text-[#10B981] text-xl font-bold transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Google Limited Use Notice */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#151922] border border-white/[0.08] text-center space-y-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#10B981]/15 text-[#10B981]">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Google API Services User Data Policy Compliance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Regent Money adheres strictly to Google's API Services User Data Policy, including the <strong>Limited Use</strong> requirements. We only access standard basic profile scopes (<code className="text-[#10B981]">email</code>, <code className="text-[#10B981]">profile</code>, <code className="text-[#10B981]">openid</code>) exclusively for verified sign-in.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/privacy')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#10B981] hover:text-[#0ea372] transition"
            >
              <span>Read our full legal Privacy Policy</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* 7. Bottom Download Banner */}
      <section className="px-4 sm:px-6 max-w-6xl mx-auto text-center">
        <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-b from-[#151922] to-[#0B0E14] border border-white/[0.1] relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Take Control of Your Wealth in Absolute Privacy
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base mb-8">
            Experience the clarity of Regent Money on your Android device. Built by RAO DEV STUDIOS with institutional security and zero data tracking.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={downloadUrl}
              className="px-8 py-4 rounded-xl bg-[#10B981] hover:bg-[#0ea372] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#10B981]/25 transition"
            >
              Download Regent Money APK ({tagName})
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
