import { LegalLayout } from "@/components/LegalLayout";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="Last updated: May 23, 2026">
      <section className="space-y-8">
        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">1. Data Collection</h2>
          <p>
            DexAudit collects information necessary to perform AI spend analysis. This includes
            subscription data, seat allocation counts, and anonymized usage frequency. We use
            read-only API tokens for all external integrations.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">2. Security & Compliance</h2>
          <p>
            We are committed to SOC2 compliance standards. All data is encrypted at rest and in
            transit using TLS 1.3. DexAudit never stores proprietary source code or sensitive
            engineering secrets.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">3. Data Usage</h2>
          <p>
            The collected data is used exclusively to generate your surgical audit reports and
            identify saving opportunities. We do not sell or trade your data to third-party
            advertisers.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">4. Cookie Policy</h2>
          <p>
            We use essential cookies to maintain your session and persistence for the multi-step
            audit flow. Analytics cookies are anonymized and used only for product improvement.
          </p>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm italic text-slate-400">
            For any privacy-related inquiries, please contact privacy@dexaudit.com
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
