import React from 'react';

const SUPPORT_EMAIL = 'roshanawatirak@gmail.com';
const MAIL_SUBJECT = 'Delete my Regent Money account';
const MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(MAIL_SUBJECT)}`;

const deletedData = [
  'Profile information (name, email, phone number, date of birth, gender, occupation and income).',
  'Profile photographs.',
  'Financial transactions and income records.',
  'Bank and card details stored in your account.',
  'Budgets and financial goals.',
  'Split expenses and peer records.',
  'AI chat history.',
  'Notifications.',
  'Uploaded bank statements, documents and screenshots.',
];

const appSteps = [
  <>Open the Regent Money application.</>,
  <>Navigate to <strong className="text-white">Profile → Settings</strong>.</>,
  <>Select <strong className="text-white">Delete Account</strong>.</>,
  <>Choose your reason for deletion.</>,
  <>Confirm your request. If you signed up with email, enter your account password.</>,
];

const SectionTitle = ({ num, children }) => (
  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
    <span className="text-[#10B981]">{num}.</span> {children}
  </h2>
);

export const DeleteAccountPage = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-slate-300">
      {/* Top Breadcrumb & Back button */}
      <div className="flex items-center justify-between gap-4 mb-8">
        <a
          href="/"
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
          href="/privacy"
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

      {/* Header */}
      <div className="border-b border-white/[0.08] pb-10 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 text-xs font-extrabold mb-5 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
          <span>ACCOUNT DELETION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
          Delete Your Regent Money Account
        </h1>
        <p className="text-slate-400 italic text-sm mb-5">Regent Money by RAO Dev Studios</p>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl">
          We respect your privacy and give you control over your personal information. You can request permanent deletion of your Regent Money account and associated data using either of the methods below.
        </p>
      </div>

      <div className="space-y-12 text-sm sm:text-base leading-relaxed">
        {/* Option 1 */}
        <section id="in-app" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <span className="text-xs uppercase font-extrabold px-2.5 py-1 rounded bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
            Fastest
          </span>
          <SectionTitle num="01">Option 1: Delete Your Account Through the App</SectionTitle>
          <p>The fastest way to delete your account:</p>
          <ol className="space-y-3">
            {appSteps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-slate-400">Your account deletion request will then be scheduled.</p>
        </section>

        {/* Option 2 */}
        <section id="by-email" className="space-y-4 scroll-mt-24">
          <SectionTitle num="02">Option 2: Request Account Deletion Without the App</SectionTitle>
          <p>
            If you no longer have access to Regent Money or have uninstalled the application, you can request account deletion through email.
          </p>
          <p>Send an email from your registered email address:</p>
          <div className="p-5 rounded-xl bg-black/30 border border-white/[0.06] space-y-2 text-sm">
            <div>
              <span className="text-slate-400">Email: </span>
              <a href={MAILTO} className="text-[#10B981] font-semibold underline break-all">{SUPPORT_EMAIL}</a>
            </div>
            <div>
              <span className="text-slate-400">Subject: </span>
              <strong className="text-white">{MAIL_SUBJECT}</strong>
            </div>
          </div>
          <p>Please include your registered email address in your request so we can identify your account.</p>
          <a
            href={MAILTO}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#0ea372] text-white text-sm font-bold transition"
          >
            Email a deletion request
          </a>
        </section>

        {/* Deleted data */}
        <section id="deleted-data" className="space-y-4 scroll-mt-24">
          <SectionTitle num="03">What Information Will Be Deleted?</SectionTitle>
          <p>When your account is permanently deleted, the following information will be erased:</p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            {deletedData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Timeline */}
        <section id="timeline" className="space-y-4 scroll-mt-24">
          <SectionTitle num="04">Account Deletion Timeline</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#151922] border border-white/[0.08] space-y-2">
              <div className="text-[#10B981] font-bold">7-Day Grace Period</div>
              <p className="text-sm text-slate-300">
                After submitting your deletion request, your account enters a 7-day grace period. During this period, logging back into your account cancels the deletion request and restores your account.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#151922] border border-white/[0.08] space-y-2">
              <div className="text-[#10B981] font-bold">Permanent Deletion</div>
              <p className="text-sm text-slate-300">
                After the 7-day grace period, our automated deletion process permanently removes your account and associated personal information.
              </p>
            </div>
          </div>
          <p className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-200 text-sm">
            Once permanently deleted, your account and its data cannot be recovered.
          </p>
        </section>

        {/* Retention */}
        <section id="retention" className="space-y-4 scroll-mt-24">
          <SectionTitle num="05">Data Retention</SectionTitle>
          <p>
            We retain only a minimal security audit record containing an internal user identifier and a one-way hashed email address after account deletion.
          </p>
          <p>
            This limited information is retained for security, fraud prevention and abuse prevention purposes. It does not contain your readable personal profile or financial transaction information.
          </p>
        </section>

        {/* Help */}
        <section id="help" className="space-y-4 p-6 sm:p-8 rounded-2xl bg-[#151922] border border-white/[0.08] scroll-mt-24">
          <SectionTitle num="06">Need Help?</SectionTitle>
          <p>For account deletion assistance or privacy-related questions, contact:</p>
          <div className="space-y-1.5 text-sm">
            <div className="text-white font-bold">RAO Dev Studios</div>
            <div>
              <span className="text-slate-400">Email: </span>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-[#10B981] underline break-all">{SUPPORT_EMAIL}</a>
            </div>
            <div>
              <span className="text-slate-400">Website: </span>
              <a href="https://raodevstudios.in" target="_blank" rel="noreferrer" className="text-[#10B981] underline">https://raodevstudios.in</a>
            </div>
          </div>
          <p className="text-slate-400 italic text-sm pt-2">
            We respect your privacy and your right to control your personal data.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DeleteAccountPage;
