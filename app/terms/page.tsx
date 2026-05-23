import { LegalLayout } from "@/components/LegalLayout";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" subtitle="Last updated: May 23, 2026">
      <section className="space-y-8">
        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing DexAudit, you agree to be bound by these terms. Our service is provided
            &quot;as is&quot; to help engineering teams optimize their AI infrastructure costs.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">2. Service Scope</h2>
          <p>
            DexAudit provides automated analysis of AI tool subscriptions. While our algorithms aim
            for 99.9% accuracy, final financial decisions remain the responsibility of the user.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">3. User Responsibilities</h2>
          <p>
            Users are responsible for the accuracy of the data provided during the audit flow.
            Unauthorized automated access or scraping of the DexAudit engine is strictly prohibited.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">4. Limitation of Liability</h2>
          <p>
            Credex Inc. and DexAudit shall not be liable for any indirect, incidental, or
            consequential damages resulting from the use or inability to use the service.
          </p>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm italic text-slate-400">
            Questions? Reach out to support@dexaudit.com
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
