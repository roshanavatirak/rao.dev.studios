import React from 'react';

const CONTACT_EMAIL = 'roshanawatirak@gmail.com';
const LAST_UPDATED = '8 November 2026';

const SectionTitle = ({ num, children }) => (
  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
    <span className="text-[#10B981]">{num}.</span> {children}
  </h2>
);

const Card = ({ title, children }) => (
  <div className="p-4 sm:p-5 rounded-xl bg-[#151922] border border-white/[0.08] space-y-2">
    <h3 className="text-white font-bold text-sm sm:text-base">{title}</h3>
    <div className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">{children}</div>
  </div>
);

const Code = ({ children }) => (
  <code className="text-[#10B981] bg-black/40 px-1.5 py-0.5 rounded text-xs break-all">{children}</code>
);

const collected = [
  {
    title: 'Account & profile information',
    items: [
      'Name, email address and phone number.',
      'Date of birth, gender, occupation and income (if you provide them).',
      'Profile photo (if you upload one).',
      'Google account identifier, name and email when you use Google Sign-In.',
    ],
  },
  {
    title: 'Financial information you add or import',
    items: [
      'Transactions and income records, including amount, merchant/payee, category, date and notes.',
      'Bank and card details you save in the app (such as bank name and the last 4 digits of an account or card).',
      'Budgets, financial goals, split expenses and peer records.',
      'Bank statements, documents and screenshots you upload for import, and the text extracted from them.',
    ],
  },
  {
    title: 'Information derived from bank SMS (only if you enable SMS tracking)',
    items: [
      'Transaction details parsed from bank and payment SMS: amount, merchant/payee, timestamp, account or card last 4 digits, and transaction type.',
      'The SMS sender ID (for example, a bank’s sender code), the SMS message ID (used to avoid duplicate entries), and the available balance when the message contains one.',
    ],
  },
  {
    title: 'Regent AI',
    items: [
      'Messages you send to Regent AI and its replies (your AI chat history).',
      'The financial context needed to answer your question, such as relevant transactions, budgets and totals.',
    ],
  },
  {
    title: 'Device & app information',
    items: [
      'Push notification token, so we can send you notifications.',
      'Whether a notification was opened, so we can tell which notifications are useful.',
      'Device information included in bug reports you choose to send (such as device model, OS version and app version).',
      'Security and login data needed to protect your account, such as bot-protection checks at sign-in.',
    ],
  },
];

const providers = [
  { name: 'Groq, Mistral AI and Google Gemini', purpose: 'AI processing for Regent AI chat, transaction categorisation, and reading uploaded statements and screenshots.', data: 'Transaction data, AI chat messages, uploaded screenshots and statement text needed for the request.' },
  { name: 'Cloudinary', purpose: 'Storing and serving images.', data: 'Profile photos and images you upload.' },
  { name: 'Expo (push notifications)', purpose: 'Delivering push notifications to your device.', data: 'Push notification token and notification content.' },
  { name: 'Google (Gmail) and Brevo', purpose: 'Sending account and service emails, such as verification and security emails.', data: 'Your email address, name and the email content.' },
  { name: 'Google Sign-In', purpose: 'Signing in with your Google account.', data: 'Your Google account identifier, name and email address.' },
  { name: 'Cloudflare Turnstile', purpose: 'Bot and abuse protection on sign-in.', data: 'Technical information about the sign-in request, such as IP address and browser/device signals.' },
  { name: 'Cloud hosting and database providers', purpose: 'Running our backend and storing your account data.', data: 'All account data you sync to Regent Money, stored on our behalf.' },
];

const deletedData = [
  'Profile information (name, email, phone number, date of birth, gender, occupation and income) and profile photos.',
  'Transactions, income records, bank and card details, budgets and goals.',
  'Split expenses and peer records.',
  'AI chat history and notifications.',
  'Uploaded bank statements, documents and screenshots.',
];

export const PrivacyPage = ({ onNavigate }) => {
  const sections = [
    { id: 'scope', title: '1. Who We Are' },
    { id: 'collect', title: '2. Information We Collect' },
    { id: 'sms-engine', title: '3. SMS Processing' },
    { id: 'use', title: '4. How We Use It' },
    { id: 'providers', title: '5. Service Providers' },
    { id: 'security', title: '6. Security' },
    { id: 'retention', title: '7. Retention & Deletion' },
    { id: 'rights', title: '8. Your Rights' },
    { id: 'children', title: '9. Age Requirement' },
    { id: 'changes', title: '10. Changes' },
    { id: 'contacts', title: '11. Contact & Grievances' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const goDeletePage = (e) => {
    e.preventDefault();
    onNavigate('/delete-account');
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
          <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
          <span>PRIVACY POLICY</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-5 leading-tight">
          Regent Money Privacy Policy
        </h1>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
          This policy explains what information <strong>Regent Money</strong> collects, how we use it, who we share it with to run the app, how long we keep it, and the choices and rights you have. Regent Money is published by <strong>RAO DEV STUDIOS</strong>.
        </p>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400 pt-3 border-t border-white/[0.06]">
          <span>Last updated: <strong>{LAST_UPDATED}</strong></span>
          <span>•</span>
          <span>Publisher: <strong>RAO DEV STUDIOS</strong></span>
          <span>•</span>
          <span>Application: <strong>Regent Money</strong></span>
          <span>•</span>
          <span>Jurisdiction: <strong>India</strong></span>
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

      {/* Summary banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#151922] border border-[#10B981]/40 mb-14">
        <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3">In short</h2>
        <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-300">
          <li>We do not sell or rent your personal or financial data, and we do not show ads.</li>
          <li>We share data only with the service providers listed in Section 5, and only so they can run features of the app for us.</li>
          <li>SMS tracking is optional. We only read messages from recognised financial senders, and we do not upload raw SMS text.</li>
          <li>You can delete your account in the app or by email. Deletion becomes permanent after a 7-day grace period.</li>
        </ul>
      </div>

      <div className="space-y-14 text-sm sm:text-base leading-relaxed">

        {/* 1 */}
        <section id="scope" className="space-y-4 scroll-mt-24">
          <SectionTitle num="01">Who We Are & Scope</SectionTitle>
          <p>
            RAO DEV STUDIOS ("we", "us") operates the Regent Money Android app, its backend services and the related website. We are the data fiduciary for the personal data described here. This policy applies to all of them.
          </p>
          <p>
            Regent Money is a personal budgeting and expense-tracking tool. It does not hold your money, move funds, or connect to your bank account.
          </p>
        </section>

        {/* 2 */}
        <section id="collect" className="space-y-4 scroll-mt-24">
          <SectionTitle num="02">Information We Collect</SectionTitle>
          <p>Depending on the features you use, we collect:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collected.map((group) => (
              <Card key={group.title} title={group.title}>
                <ul className="list-disc pl-5 space-y-1.5">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Card>
            ))}
          </div>
          <p className="text-slate-400 text-sm">
            Biometric unlock (fingerprint or face) is handled by your phone's operating system. We never receive your biometric data.
          </p>
        </section>

        {/* 3 */}
        <section id="sms-engine" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <SectionTitle num="03">SMS Processing</SectionTitle>
          <p>
            If you turn on automatic transaction tracking, Regent Money asks for the <Code>RECEIVE_SMS</Code> and <Code>READ_SMS</Code> permissions. SMS tracking is optional. The app works fully with manual entry if you don't grant them.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-300">
            <li><strong className="text-white">Financial senders only.</strong> The app only looks at messages from recognised bank, card and payment sender IDs. Messages from personal contacts and ordinary mobile numbers are ignored.</li>
            <li><strong className="text-white">Parsed on your device.</strong> The message is read on your phone and turned into a transaction record. The full SMS text is not uploaded to our servers.</li>
            <li><strong className="text-white">What is synced.</strong> The parsed transaction (amount, merchant/payee, timestamp, account or card last 4 digits, transaction type), the sender ID, the SMS message ID used to prevent duplicates, and the available balance if the message includes one.</li>
            <li><strong className="text-white">What is not kept.</strong> One-time passwords (OTPs), PINs and login codes are not extracted or stored.</li>
            <li><strong className="text-white">Your control.</strong> You can turn off SMS tracking in the app or revoke the SMS permission in Android Settings at any time.</li>
          </ul>
        </section>

        {/* 4 */}
        <section id="use" className="space-y-4 scroll-mt-24">
          <SectionTitle num="04">How We Use Your Information</SectionTitle>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>To provide the app: record and categorise transactions, calculate budgets, goals, split expenses and analytics. Some of this runs on your device and some on our servers.</li>
            <li>To run Regent AI and to read statements and screenshots you upload.</li>
            <li>To sync your data across your devices and keep it backed up.</li>
            <li>To send notifications and service emails, such as verification, security and account-deletion emails.</li>
            <li>To keep the service secure, prevent fraud and abuse, and fix bugs you report.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p>
            We do not sell or rent your data, and we do not use it for advertising. We do not use your data to train our own AI models.
          </p>
        </section>

        {/* 5 */}
        <section id="providers" className="space-y-4 scroll-mt-24">
          <SectionTitle num="05">Service Providers We Use</SectionTitle>
          <p>
            We use the following service providers to run parts of Regent Money. They process data on our behalf, only for the purpose listed, and we do not allow them to sell it. Some of these providers may process data outside India.
          </p>
          <div className="space-y-3">
            {providers.map((p) => (
              <Card key={p.name} title={p.name}>
                <p><span className="text-slate-400">Purpose: </span>{p.purpose}</p>
                <p><span className="text-slate-400">Data received: </span>{p.data}</p>
              </Card>
            ))}
          </div>
          <p className="text-sm text-slate-400">
            AI providers process your requests under their own API terms. Depending on the provider and plan, they may retain inputs for a limited time for abuse monitoring or service improvement. Please avoid entering information in Regent AI that you don't want processed this way.
          </p>
          <p className="text-sm text-slate-400">
            We may also disclose information if required by law, or to protect the rights, safety and security of our users or the service.
          </p>
        </section>

        {/* 6 */}
        <section id="security" className="space-y-4 scroll-mt-24">
          <SectionTitle num="06">Security</SectionTitle>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong className="text-white">In transit:</strong> All traffic between the app and our servers uses HTTPS (TLS 1.2 or higher).</li>
            <li><strong className="text-white">On your device:</strong> Local app storage is encrypted with keys held in the Android Keystore.</li>
            <li><strong className="text-white">On our servers:</strong> Sensitive transaction fields, such as amount and merchant, are additionally encrypted with AES-256-GCM. Other data is protected by our hosting provider's security and access controls.</li>
            <li><strong className="text-white">Access:</strong> Our team does not look at your financial records, except when needed to investigate a support request you make, or a security or legal issue.</li>
          </ul>
          <p className="text-sm text-slate-400">
            No system is completely secure, but we work to protect your information and will notify you and the authorities of a personal data breach as required by law.
          </p>
        </section>

        {/* 7 */}
        <section id="retention" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <SectionTitle num="07">Data Retention & Account Deletion</SectionTitle>
          <p>We keep your data while your account is active. You can delete individual items or your whole account at any time.</p>

          <div className="space-y-3 text-xs sm:text-sm">
            <Card title="Deleted transactions">
              <p>Transactions you delete are permanently erased from our servers after 30 days.</p>
            </Card>

            <Card title="How to delete your account">
              <p>
                In the app, go to <strong className="text-white">Profile → Settings → Delete Account</strong>. If you no longer have the app, email <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Delete my Regent Money account')}`} className="text-[#10B981] underline break-all">{CONTACT_EMAIL}</a> from your registered email address with the subject "Delete my Regent Money account".
              </p>
              <p>
                Full instructions are on our <a href="/regent-money/delete-account" onClick={goDeletePage} className="text-[#10B981] underline">account deletion page</a>.
              </p>
            </Card>

            <Card title="7-day grace period">
              <p>
                After you request deletion, your account enters a 7-day grace period. Logging back in during this period cancels the request. After 7 days, our automated process permanently deletes your account. This cannot be undone.
              </p>
            </Card>

            <Card title="What is deleted">
              <ul className="list-disc pl-5 space-y-1.5">
                {deletedData.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </Card>

            <Card title="What we keep after deletion">
              <p>
                We keep a minimal security audit record containing an internal user ID and a one-way hashed email address, for security, fraud and abuse prevention. Our cleanup process may also keep internal identifiers of erased records, without their content. None of this includes your readable profile or financial information.
              </p>
            </Card>
          </div>
        </section>

        {/* 8 */}
        <section id="rights" className="space-y-4 scroll-mt-24">
          <SectionTitle num="08">Your Rights</SectionTitle>
          <p>Under India's Digital Personal Data Protection Act, 2023 and other applicable laws, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li><strong className="text-white">Access</strong> a summary of the personal data we hold about you and how we process it.</li>
            <li><strong className="text-white">Correct and update</strong> inaccurate or incomplete data. Most profile details can be edited directly in the app.</li>
            <li><strong className="text-white">Erase</strong> your data by deleting your account (see Section 7).</li>
            <li><strong className="text-white">Withdraw consent</strong> at any time, for example by turning off SMS tracking, revoking app permissions, or deleting your account. Withdrawing consent doesn't affect processing done before it.</li>
            <li><strong className="text-white">Nominate</strong> another person to exercise these rights on your behalf in case of death or incapacity.</li>
            <li><strong className="text-white">Raise a grievance</strong> with us (see Section 11), and if it isn't resolved, complain to the Data Protection Board of India.</li>
          </ul>
          <p>To exercise any of these rights, email <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#10B981] underline break-all">{CONTACT_EMAIL}</a> from your registered email address.</p>
        </section>

        {/* 9 */}
        <section id="children" className="space-y-4 scroll-mt-24">
          <SectionTitle num="09">Age Requirement</SectionTitle>
          <p>
            Regent Money is for users aged 18 and over. We do not knowingly collect data from anyone under 18. If you believe a minor has created an account, contact us and we will delete it.
          </p>
        </section>

        {/* 10 */}
        <section id="changes" className="space-y-4 scroll-mt-24">
          <SectionTitle num="10">Changes to This Policy</SectionTitle>
          <p>
            We will update this policy when our practices change and revise the "Last updated" date above. For significant changes, we will also notify you in the app before they take effect.
          </p>
        </section>

        {/* 11 */}
        <section id="contacts" className="space-y-4 border-t border-white/[0.08] pt-10 scroll-mt-24">
          <SectionTitle num="11">Contact & Grievance Officer</SectionTitle>
          <p>For privacy questions, requests to exercise your rights, or complaints, contact our Grievance Officer:</p>
          <div className="p-6 rounded-2xl bg-[#151922] border border-white/[0.08] space-y-2 text-sm">
            <p className="font-extrabold text-white text-base">RAO DEV STUDIOS</p>
            <p className="text-slate-400">Grievance Officer: <strong className="text-slate-200">Roshan Avatirak</strong></p>
            <p className="text-slate-400">Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#10B981] font-medium underline break-all">{CONTACT_EMAIL}</a></p>
            <p className="text-slate-400">Website: <a href="https://raodevstudios.in" target="_blank" rel="noreferrer" className="text-[#10B981] underline">raodevstudios.in</a></p>
            <p className="text-xs text-slate-500 pt-2">We aim to respond to grievances within 30 days.</p>
          </div>
        </section>

      </div>

      {/* Cross-Link Card to Terms of Service */}
      <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#151922] to-[#0B0E14] border border-[#10B981]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs uppercase font-extrabold text-[#10B981] tracking-wider">Also read</span>
          <h3 className="text-xl font-extrabold text-white">Terms of Service</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            The rules for using Regent Money, including what the app does and doesn't do.
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
