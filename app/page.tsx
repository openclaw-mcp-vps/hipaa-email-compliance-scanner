export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 border border-[#58a6ff]/30 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HIPAA Compliance
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Scan Emails for{' '}
          <span className="text-[#58a6ff]">HIPAA Violations</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically detect PHI exposure in your email communications and attachments. Stay compliant, avoid fines, and protect your patients.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Scanning — $17/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: '🔍', title: 'PHI Detection', desc: 'NLP + regex patterns catch SSNs, MRNs, diagnoses, and more.' },
          { icon: '📎', title: 'Attachment Scan', desc: 'Scans PDFs, Word docs, and images for embedded PHI.' },
          { icon: '📋', title: 'Compliance Reports', desc: 'Audit-ready reports with violation details and remediation steps.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited email scans',
              'Attachment PHI detection',
              'Monthly compliance reports',
              'Gmail & Outlook OAuth',
              'Email alerts on violations',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What types of PHI can you detect?',
              a: 'We detect Social Security Numbers, Medical Record Numbers, patient names in context, dates of birth, diagnoses, prescription details, and more using a combination of NLP models and HIPAA-specific regex patterns.'
            },
            {
              q: 'Is my email data stored securely?',
              a: 'Email content is processed in-memory and never stored permanently. Only metadata about violations (not the PHI itself) is saved for your compliance reports. All data is encrypted in transit and at rest.'
            },
            {
              q: 'Which email providers are supported?',
              a: 'We currently support Gmail and Microsoft Outlook via OAuth 2.0. Additional providers including Yahoo Mail and custom IMAP servers are on our roadmap.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} HIPAA Email Compliance Scanner. Not a substitute for legal counsel.
      </footer>
    </main>
  )
}
