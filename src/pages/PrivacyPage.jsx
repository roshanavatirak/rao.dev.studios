import React from 'react';

export const PrivacyPage = ({ onNavigate }) => {
  const sections = [
    { id: 'scope', title: '1. Scope & Core Principles' },
    { id: 'sms-engine', title: '2. SMS Processing Engine' },
    { id: 'storage-encryption', title: '3. Storage & Encryption' },
    { id: 'google-auth', title: '4. Google Account Limited Scope' },
    { id: 'anti-monetization', title: '5. Zero-Commodification' },
    { id: 'retention-purge', title: '6. Retention & Account Purge' },
    { id: 'changes', title: '7. Policy Changes' },
    { id: 'contacts', title: '8. Direct Contacts' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-slate-300">
      
      {/* Top Breadcrumb & Quick Link */}
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
          href="/regentmoney/terms"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/terms');
          }}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#10B981] hover:text-[#0ea372] transition"
        >
          <span>View Terms of Service</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>

      {/* Header */}
      <div className="border-b border-white/[0.08] pb-10 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 text-xs font-extrabold mb-5 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>ENTERPRISE PRIVACY & SECURITY CHARTER</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
          Privacy Policy & Cryptographic Data Protection Standard
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
          At <strong>RAO DEV STUDIOS</strong>, data privacy is not a compliance checkbox—it is the foundational pillar upon which <strong>Regent Money</strong> was engineered. We maintain a zero-tolerance policy against the commodification or unauthorized access of your financial data.
        </p>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400 pt-3 border-t border-white/[0.06]">
          <span>Effective Date: <strong>October 2026</strong></span>
          <span>•</span>
        
          <span>Publisher: <strong>RAO DEV STUDIOS</strong></span>
          <span>•</span>
            <span>Application: <strong>Regent Money</strong></span>
          <span>•</span>
          <span className="text-[#10B981] font-semibold">Classification: Non-Public Financial Privacy Standard</span>
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

      {/* Zero Tolerance Trust Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#151922] border border-[#10B981]/40 mb-14 shadow-2xl relative overflow-hidden">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#10B981]/15 text-[#10B981] flex-shrink-0 flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              Our Zero-Tolerance Guarantee to Every Regent Money User
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We never sell your data. We never rent your data. We never share your transactions with brokers, insurers, or advertising networks. We never read your personal messages. Financial management is an intimate aspect of human life, and our cryptographic architecture ensures that only <em>you</em> hold the keys to your personal balance sheet.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-14 text-sm sm:text-base leading-relaxed">
        
        {/* Section 1 */}
        <section id="scope" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">01.</span> Scope & Core Principles
          </h2>
          <p>
            This Privacy Policy governs the collection, local processing, cryptographic handling, and cloud synchronization of personal and financial information for the <strong>Regent Money</strong> mobile application across Android devices and related web infrastructure operated by <strong>RAO DEV STUDIOS</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#151922] border border-white/[0.08]">
              <div className="text-[#10B981] font-bold text-sm mb-1">Local-First Processing</div>
              <div className="text-xs text-slate-400">Heuristics, SMS parsing, and budgeting are executed directly on your device CPU.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#151922] border border-white/[0.08]">
              <div className="text-[#10B981] font-bold text-sm mb-1">Zero Third-Party SDKs</div>
              <div className="text-xs text-slate-400">No ad-tech, behavioral telemetry, tracking pixels, or third-party marketing trackers.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#151922] border border-white/[0.08]">
              <div className="text-[#10B981] font-bold text-sm mb-1">Cryptographic Sovereignty</div>
              <div className="text-xs text-slate-400">Data is encrypted at rest and in transit with bank-grade AES-256 and TLS 1.3.</div>
            </div>
          </div>
        </section>

        {/* Section 2: SMS Architecture in Deep Detail */}
        <section id="sms-engine" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">02.</span> Transactional SMS Engine — Dedicated & Isolated Processing
          </h2>
          <p>
            Regent Money offers automated transaction tracking via Android permissions (<code className="text-[#10B981] bg-black/40 px-2 py-0.5 rounded text-xs">android.permission.RECEIVE_SMS</code> and <code className="text-[#10B981] bg-black/40 px-2 py-0.5 rounded text-xs">android.permission.READ_SMS</code>). We understand the sensitivity of message access and enforce strict technical safeguards:
          </p>
          
          <div className="space-y-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0B0E14] border border-white/[0.06] space-y-2">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                Strict Financial Institution Whitelist
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Our parsing engine only inspects messages originating from recognized financial Sender IDs (e.g., Banks, UPI providers, and credit card issuers such as HDFC, SBI, ICICI, AXIS, KOTAK, PNB, PAYTM, GPAY, PHONEPE). Messages from personal contacts, unknown 10-digit mobile numbers, family, or friends are <strong>completely ignored and immediately discarded</strong>.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0E14] border border-white/[0.06] space-y-2">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                Ephemeral, On-Device Parsing Only (No Cloud Upload)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                The entire parsing process occurs in the temporary volatile RAM of your device. <strong>Raw SMS bodies are NEVER uploaded to our servers, never stored in plaintext, and never shared with any third party.</strong> Only the structured transaction record (Amount, Merchant/Payee, Timestamp, Last 4 digits of Account) is retained.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0E14] border border-white/[0.06] space-y-2">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                Automated Sensitive Data Stripping (OTP Filter)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Our regex engine actively scrubs One-Time Passwords (OTPs), bank security codes, internet banking login tokens, and balances before saving the categorized expense row.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B0E14] border border-white/[0.06] space-y-2">
              <h3 className="text-white font-bold text-sm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                User-Controlled Revocation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                SMS tracking is 100% voluntary. You can disable this feature at any moment in the application settings or revoke SMS permissions via your Android System Settings. The application remains fully functional with manual expense logging.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Data Storage & Encryption */}
        <section id="storage-encryption" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">03.</span> Cryptographic Architecture & Storage
          </h2>
          <p>
            Your financial intelligence is shielded with end-to-end industry security protocols:
          </p>
          <div className="space-y-3">
            <div className="p-5 rounded-2xl bg-[#151922] border border-white/[0.08] space-y-2">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-[#10B981]">▸</span> Encryption at Rest
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All local caches on your Android device leverage encrypted MMKV instances backed by keys generated inside the hardware-backed <strong>Android KeyStore</strong> (TEE/StrongBox). Cloud database entities are encrypted with <strong>AES-256-GCM</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#151922] border border-white/[0.08] space-y-2">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-[#10B981]">▸</span> Encryption in Transit
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All communications between the Regent Money mobile app and our backend APIs are secured with <strong>TLS 1.3</strong> transport encryption. Plain HTTP or unencrypted connections are rejected at the network layer.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#151922] border border-white/[0.08] space-y-2">
              <h3 className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-[#10B981]">▸</span> Biometric Hardware Shield
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Regent Money incorporates native Biometric Authentication (Fingerprint & Face Recognition). The cryptographic verification is handled by your smartphone operating system, ensuring no biometric signatures ever leave your physical device.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Google User Data Policy Compliance */}
        <section id="google-auth" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">04.</span> Google Account Integration & Limited Use Compliance
          </h2>
          <p>
            Regent Money supports Google Sign-In for streamlined authentication. Our usage strictly complies with the <strong>Google API Services User Data Policy</strong>, including the Limited Use requirements:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
            <li><strong>Minimal Scope Requested:</strong> We only request basic identification tokens (<code className="text-[#10B981] bg-black/40 px-1.5 py-0.5 rounded">profile</code> and <code className="text-[#10B981] bg-black/40 px-1.5 py-0.5 rounded">email</code>) to provision your unique cryptographic user ID.</li>
            <li><strong>No Secondary Monetization:</strong> We do not share Google user data with third-party tools, ad networks, or data brokers.</li>
            <li><strong>No Model Training:</strong> Your transaction records and Google identity are never used to train generalized artificial intelligence models or machine learning datasets.</li>
            <li><strong>Human Oversight Restrictions:</strong> No employee or engineer at RAO DEV STUDIOS inspects your personal financial ledger unless explicitly authorized by you for a targeted customer support ticket.</li>
          </ul>
        </section>

        {/* Section 5: The Anti-Commodification Guarantee */}
        <section id="anti-monetization" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">05.</span> The Anti-Commodification Guarantee
          </h2>
          <p>
            Conventional financial apps often treat users as the product by monetizing aggregated spending patterns. <strong>RAO DEV STUDIOS refuses this business model entirely.</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-black/40 border border-[#10B981]/20 space-y-1">
              <div className="text-white font-bold text-sm">We Do NOT:</div>
              <p className="text-xs text-slate-400">Sell, rent, or trade transaction histories to lenders, credit rating bureaus, or advertising networks.</p>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-[#10B981]/20 space-y-1">
              <div className="text-white font-bold text-sm">We Do NOT:</div>
              <p className="text-xs text-slate-400">Inject behavioral trackers, Google Analytics marketing tags, Meta Pixel, or third-party advertising SDKs into the mobile application.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Data Retention & Complete Account Deletion */}
        <section id="retention-purge" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">06.</span> Data Retention & Your Absolute Right to Erasure
          </h2>
          <p>
            You hold total sovereignty over your financial timeline. We provide seamless tools to purge your data permanently:
          </p>
          
          <div className="space-y-3">
            <h3 className="text-white font-bold text-sm">Initiating Account & Data Deletion:</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              You can trigger complete data purging directly within the app by navigating to <strong>Settings &gt; Privacy &gt; Delete Account</strong>, or by emailing our designated privacy contact at <a href="mailto:roshanawatirak@gmail.com" className="text-[#10B981] underline">roshanawatirak@gmail.com</a>.
            </p>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-400">
              <li>Specify the subject: <strong>"Regent Money Complete Data Erasure Request"</strong></li>
              <li>Provide your registered Google Account email address for verification.</li>
            </ol>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] text-xs text-slate-400">
              <strong>Purge Guarantee:</strong> Upon identity confirmation, all server database rows, cloud backup replicas, and security tokens are permanently scrubbed from our production clusters within 48 hours. No ghost records or historical shadows are retained.
            </div>
          </div>
        </section>

        {/* Section 7: Updates to Policy */}
        <section id="changes" className="space-y-4 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">07.</span> Changes to this Policy
          </h2>
          <p>
            Should we amend our data handling practices or introduce major architectural capabilities, this document will be updated immediately with a revised effective date. Material changes will be accompanied by an in-app notice prior to taking effect.
          </p>
        </section>

        {/* Section 8: Legal & Contact Information */}
        <section id="contacts" className="space-y-4 border-t border-white/[0.08] pt-10 scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span className="text-[#10B981]">08.</span> Direct Engineering & Privacy Contacts
          </h2>
          <p>
            For privacy inquiries, security audits, technical clarification, or regulatory compliance requests, contact the engineering team directly:
          </p>
          <div className="p-6 rounded-2xl bg-[#151922] border border-white/[0.08] space-y-2 text-sm">
            <p className="font-extrabold text-white text-base">RAO DEV STUDIOS</p>
            <p className="text-slate-400">Primary Domain: <a href="https://raodevstudios.in" target="_blank" rel="noreferrer" className="text-[#10B981] underline">raodevstudios.in</a></p>
            <p className="text-slate-400">Application Gateway: <a href="https://raodevstudios.in/regentmoney" className="text-[#10B981] underline">raodevstudios.in/regentmoney</a></p>
            <p className="text-slate-400">Direct Privacy Officer: <a href="mailto:roshanawatirak@gmail.com" className="text-[#10B981] font-medium underline">roshanawatirak@gmail.com</a></p>
            <p className="text-xs text-slate-500 pt-2">Registered under RAO DEV STUDIOS software engineering operations.</p>
          </div>
        </section>

      </div>

      {/* Cross-Link Card to Terms of Service */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#151922] to-[#0B0E14] border border-[#10B981]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs uppercase font-extrabold text-[#10B981] tracking-wider">Governing Framework</span>
          <h3 className="text-xl font-extrabold text-white">Review our Legal Terms of Service</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Understand our non-custodial boundaries, user rights, data sovereignty, and software warranty limitations.
          </p>
        </div>
        <a
          href="/regentmoney/terms"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/terms');
          }}
          className="px-6 py-3.5 rounded-xl bg-[#10B981] hover:bg-[#0ea372] text-white font-bold text-xs sm:text-sm transition flex-shrink-0 flex items-center gap-2 shadow-lg shadow-[#10B981]/20"
        >
          <span>Read Terms of Service</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>
      </div>

    </div>
  );
};
