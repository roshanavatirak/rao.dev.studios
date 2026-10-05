import React from 'react';

export const TermsPage = ({ onNavigate }) => {
  const sections = [
    { id: 'agreement', title: '1. Agreement to Terms' },
    { id: 'non-custodial', title: '2. Non-Custodial Scope' },
    { id: 'data-sovereignty', title: '3. Data Ownership' },
    { id: 'sms-engine', title: '4. SMS Processing License' },
    { id: 'auth-security', title: '5. Account & Biometrics' },
    { id: 'backups', title: '6. Offline & Sync' },
    { id: 'acceptable-use', title: '7. Acceptable Use' },
    { id: 'termination', title: '8. Termination & Deletion' },
    { id: 'liability', title: '9. Limitation of Liability' },
    { id: 'dispute-law', title: '10. Governing Law' },
    { id: 'contact', title: '11. Official Contact' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-slate-300">
      
      {/* Top Breadcrumb & Back button */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <a
          href="/regentmoney/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition group"
        >
          <svg className="w-4 h-4 text-[#10B981] group-hover:-translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Back to Home</span>
        </a>

        <a
          href="/regentmoney/privacy"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/privacy');
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#10B981] hover:text-[#0ea372] transition"
        >
          <span>View Privacy Policy</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>

      {/* Main Header */}
      <div className="border-b border-white/[0.08] pb-10 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 text-xs font-extrabold mb-5 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>LEGAL TERMS OF SERVICE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Terms of Service for Regent Money
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
          These Terms of Service define the legally binding relationship between you and <strong>RAO DEV STUDIOS</strong> regarding the use of <strong>Regent Money</strong>. We operate with radical transparency, non-custodial boundaries, and complete cryptographic respect for your financial records.
        </p>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400 pt-3 border-t border-white/[0.06]">
          <span>Effective: <strong>October 2026</strong></span>
          <span>•</span>
          <span>Publisher: <strong>RAO DEV STUDIOS</strong></span>
          <span>•</span>
          <span>Application: <strong>Regent Money</strong></span>
          <span>•</span>
          <span className="text-[#10B981] font-semibold">Jurisdiction: Republic of India</span>
        </div>
      </div>

      {/* Quick Jump Table of Contents */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#151922] border border-white/[0.08] mb-12">
        <h3 className="text-xs uppercase font-bold tracking-wider text-[#10B981] mb-3">
          Quick Navigation
        </h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-[#10B981]/15 text-slate-300 hover:text-[#10B981] border border-white/[0.06] transition"
            >
              {sec.title}
            </button>
          ))}
        </div>
      </div>

      {/* Detailed Legal Content */}
      <div className="space-y-12 text-sm sm:text-base leading-relaxed">
        
        {/* Section 1 */}
        <section id="agreement" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">01.</span> Agreement to Terms
          </h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding contract between you ("User", "you", or "your") and <strong>RAO DEV STUDIOS</strong> ("Company", "we", "us", or "our"), governing your access to and use of the <strong>Regent Money</strong> mobile application, associated backend APIs, and web resources hosted under <a href="https://raodevstudios.in/regentmoney" className="text-[#10B981] underline">raodevstudios.in/regentmoney</a>.
          </p>
          <p>
            By downloading, installing, launching, or logging into Regent Money, you acknowledge that you have read, understood, and agreed to be bound by these Terms and our <a href="/regentmoney/privacy" onClick={(e) => { e.preventDefault(); onNavigate('/privacy'); }} className="text-[#10B981] underline">Privacy Policy</a>. If you disagree with any portion of these Terms, you must immediately cease usage and uninstall the application.
          </p>
        </section>

        {/* Section 2 */}
        <section id="non-custodial" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase font-extrabold px-2.5 py-1 rounded bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
              Crucial Disclosure
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">02.</span> Non-Custodial & Non-Advisory Nature of Services
          </h2>
          <div className="space-y-3 text-slate-300 text-sm">
            <p>
              <strong>Regent Money is exclusively a personal budgeting, expense aggregation, and informational bookkeeping software tool.</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li><strong className="text-slate-200">No Custody of Funds:</strong> Neither RAO DEV STUDIOS nor Regent Money holds, manages, transmits, routes, converts, or deposits fiat currency, bank balances, payment instruments, or digital assets. We do not operate as an escrow agent, payment aggregator, or financial institution.</li>
              <li><strong className="text-slate-200">No Execution of Financial Orders:</strong> Regent Money cannot initiate UPI transfers, bank debits, credit card payments, or wire transactions. All data shown represents read-only parsed records of transactions you have executed elsewhere.</li>
              <li><strong className="text-slate-200">No Financial, Legal, or Tax Advice:</strong> Visual charts, category breakdowns, savings estimates, and financial insights are produced through automated mathematical heuristics. They do not constitute certified financial planning, tax guidance, or investment advice. Always verify accounts directly with your authorized banking providers.</li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section id="data-sovereignty" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">03.</span> User Data Ownership & Cryptographic Sovereignty
          </h2>
          <p>
            You retain absolute, unconditional ownership of all financial transactions, notes, receipts, budgets, categories, and account configurations stored or processed within Regent Money. RAO DEV STUDIOS claims zero intellectual property, commercial, or licensing rights over your private financial ledger.
          </p>
          <div className="p-4 rounded-xl bg-black/30 border border-white/[0.06] text-xs sm:text-sm text-slate-300 space-y-2">
            <div className="text-[#10B981] font-bold">Zero Commercialization Guarantee</div>
            <p>
              We do not aggregate, repackage, anonymize, rent, trade, or sell your financial data to consumer credit scoring agencies, advertisers, brokers, lenders, or insurance underwriters under any circumstances.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="sms-engine" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">04.</span> SMS Processing & Local Device Permission Grant
          </h2>
          <p>
            To activate automated expense detection, you may optionally grant Regent Money Android SMS permissions (<code className="text-[#10B981] bg-black/40 px-1.5 py-0.5 rounded text-xs">RECEIVE_SMS</code> and <code className="text-[#10B981] bg-black/40 px-1.5 py-0.5 rounded text-xs">READ_SMS</code>). By enabling this feature, you grant the software a limited, revocable license to process inbound transaction alerts locally.
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-400">
            <p>• <strong>Strict On-Device Scope:</strong> Regex matching, amount parsing, and merchant classification execute locally on your smartphone processor. Raw personal messages, OTPs, and private chats are discarded from memory without transmission.</p>
            <p>• <strong>Voluntary & Revocable:</strong> You may grant or revoke SMS permissions at any moment in Android System Settings. Manual transaction entry and manual receipt logging remain fully operational without SMS permissions.</p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="auth-security" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">05.</span> Account Authentication & Biometric Protection
          </h2>
          <p>
            Regent Money integrates official Google OAuth 2.0 Sign-In. We verify your cryptographic identity token on our backend server without ever accessing or storing your Google Account master password.
          </p>
          <p>
            You are solely responsible for maintaining physical possession and control over your smartphone. We strongly encourage activating Regent Money's built-in <strong>Biometric App Lock</strong> (Fingerprint / Face ID) and automated screen timeout locks to prevent unauthorized physical access.
          </p>
        </section>

        {/* Section 6 */}
        <section id="backups" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">06.</span> Offline Operation, Local Storage & Cloud Sync
          </h2>
          <p>
            Regent Money is engineered with an offline-first architecture utilizing high-performance, encrypted MMKV key-value storage. When network connectivity is absent, your transactions remain cached and secured on-device. When connectivity resumes, updates synchronize over TLS 1.3 encrypted transport to our hardened database cluster.
          </p>
          <p className="text-xs text-slate-400">
            While RAO DEV STUDIOS employs automated snapshots and database replication, we recommend exporting your CSV/JSON ledger periodically via the in-app export feature for independent recordkeeping.
          </p>
        </section>

        {/* Section 7 */}
        <section id="acceptable-use" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">07.</span> Acceptable Use & User Conduct
          </h2>
          <p>You agree not to engage in any of the following prohibited behaviors:</p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-400">
            <li>Reverse engineering, decompiling, or attempting to extract proprietary parsing heuristics from the compiled APK without express permission.</li>
            <li>Deploying automated scrapers, denial-of-service tools, or packet flooding against Regent Money sync endpoints.</li>
            <li>Utilizing the application to facilitate illicit financial flows, money laundering, fraud, or violations of applicable financial regulations.</li>
            <li>Misrepresenting your identity or utilizing compromised Google OAuth credentials.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section id="termination" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">08.</span> Account Termination & Right to Data Deletion
          </h2>
          <p>
            You may terminate your Regent Money account at any time. We believe in your absolute Right to be Forgotten.
          </p>
          <div className="p-5 rounded-xl bg-black/40 border border-[#10B981]/30 space-y-2">
            <div className="text-white font-bold text-sm">Purge Procedure:</div>
            <p className="text-xs sm:text-sm text-slate-300">
              Users can trigger complete account erasure directly from <strong>Settings &gt; Privacy & Security &gt; Delete Account</strong> within the application, or by transmitting a formal purge request to <a href="mailto:roshanawatirak@gmail.com" className="text-[#10B981] underline">roshanawatirak@gmail.com</a>. Upon verification, all associated cloud database rows, synced expense logs, and authentication tokens will be permanently purged within 48 hours.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section id="liability" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">09.</span> Disclaimer of Warranties & Limitation of Liability
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-wider text-slate-400 font-mono leading-relaxed">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE REGENT MONEY APPLICATION AND CLOUD ENDPOINTS ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            RAO DEV STUDIOS, ITS OFFICERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, INCORRECT CATEGORIZATION OF EXPENSES ARISING FROM UNUSUAL BANK SMS FORMATS, DELAYED NOTIFICATIONS RESULTING FROM MOBILE OS BATTERY OPTIMIZERS, OR FINANCIAL DECISIONS TAKEN BASED ON APPLICATION INSIGHTS. OUR AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY YOU (IF ANY) TO ACCESS THE SERVICE IN THE PRECEDING TWELVE MONTHS.
          </p>
        </section>

        {/* Section 10 */}
        <section id="dispute-law" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">10.</span> Governing Law & Jurisdiction
          </h2>
          <p className="text-sm">
            These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the substantive laws of the <strong>Republic of India</strong>, without regard to conflict of law principles. Any legal action or proceeding shall be subject to the exclusive jurisdiction of the competent courts in India.
          </p>
        </section>

        {/* Section 11 */}
        <section id="contact" className="space-y-4 border-t border-white/[0.08] pt-10 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">11.</span> Official Legal Notices & Contact
          </h2>
          <p>
            For questions, notices, compliance filings, or licensing queries regarding these Terms of Service, please reach our legal and engineering team:
          </p>
          <div className="p-6 rounded-2xl bg-[#151922] border border-white/[0.08] space-y-2 text-sm">
            <p className="font-extrabold text-white text-base">RAO DEV STUDIOS</p>
            <p className="text-slate-300">Software Product: <strong className="text-white">Regent Money</strong></p>
            <p className="text-slate-300">Legal Contact: <a href="mailto:roshanawatirak@gmail.com" className="text-[#10B981] underline font-semibold">roshanawatirak@gmail.com</a></p>
            <p className="text-slate-300">Official Portal: <a href="https://raodevstudios.in/regentmoney" className="text-[#10B981] underline">raodevstudios.in/regentmoney</a></p>
          </div>
        </section>

      </div>

      {/* Cross-Link Card to Privacy Policy */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#151922] to-[#0B0E14] border border-[#10B981]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs uppercase font-extrabold text-[#10B981] tracking-wider">Related Legal Charter</span>
          <h3 className="text-xl font-extrabold text-white">Need to review our Cryptographic Privacy Standard?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Read our complete Zero-Tolerance Guarantee, local SMS isolation specifications, and AES-256 encryption architecture.
          </p>
        </div>
        <a
          href="/regentmoney/privacy"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/privacy');
          }}
          className="px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#0ea372] text-white font-bold text-xs sm:text-sm transition flex-shrink-0 flex items-center gap-2 shadow-lg shadow-[#10B981]/20"
        >
          <span>Read Privacy Policy</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>

    </div>
  );
};
