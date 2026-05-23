import { LegalLayout } from "@/components/LegalLayout";

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" subtitle="How we use data to improve your experience.">
      <section className="space-y-8">
        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">1. What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device that help our application remember
            your preferences and progress.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">2. Essential Cookies</h2>
          <p>
            We use essential cookies to maintain your multi-step audit session. Without these, the
            audit progress would be lost on page refresh.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">3. Performance & Analytics</h2>
          <p>
            We use anonymized analytics cookies to understand how users interact with our audit
            engine, helping us improve the precision of our recommendations.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-xl font-black text-slate-900">4. Managing Cookies</h2>
          <p>
            You can disable cookies through your browser settings, but please note that the DexAudit
            engine may not function correctly without essential session cookies.
          </p>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm italic text-slate-400">
            Questions? Reach out to privacy@dexaudit.com
          </p>
        </div>
      </section>
    </LegalLayout>
  );
}
