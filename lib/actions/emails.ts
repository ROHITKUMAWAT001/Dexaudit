"use server";

import { resend } from "@/lib/resend";

export async function sendAuditConfirmationEmail(email: string, totalSavings: number) {
  try {
    const isHighSavings = totalSavings > 500;
    
    const subject = isHighSavings 
      ? "🚀 Priority Audit Results: Potential Savings Identified" 
      : "Your DexAudit Report is Ready";

    const content = `
      <div style="font-family: sans-serif; color: #333; line-height: 1.6;">
        <h1 style="color: #2563eb;">DexAudit Report</h1>
        <p>Hello,</p>
        <p>Your AI tool stack audit is complete. We've identified potential annual savings of <strong>$${totalSavings.toLocaleString()}</strong>.</p>
        
        ${isHighSavings ? `
          <div style="background: #eff6ff; padding: 20px; border-radius: 12px; border: 1px solid #bfdbfe;">
            <p style="margin-top: 0; font-weight: bold; color: #1e40af;">Major Savings Detected!</p>
            <p>Our team has flagged your stack for priority review. A Credex expert will reach out to you within 24 hours to discuss a managed migration strategy.</p>
          </div>
        ` : `
          <p>You're already doing a great job optimizing your stack. We'll notify you when new plan arbitrage opportunities arise for your specific tools.</p>
        `}

        <p style="margin-top: 30px; font-size: 12px; color: #666;">
          © 2026 Credex Inc. | Industrial AI Spend Intelligence
        </p>
      </div>
    `;

    const sanitizedEmail = email.trim().toLowerCase();
    
    // Basic validation before calling API
    if (!sanitizedEmail || !sanitizedEmail.includes('@')) {
      console.error("❌ Resend Error: Invalid email skipped", sanitizedEmail);
      return { success: false, error: "Invalid email format" };
    }

    console.log("Attempting to send email to:", sanitizedEmail, "with savings:", totalSavings);

    const { data, error } = await resend.emails.send({
      from: "DexAudit <onboarding@resend.dev>",
      to: [sanitizedEmail],
      subject: subject,
      html: content,
    });

    if (error) {
      console.error("❌ Resend API Error:", error);
      return { success: false, error: error.message };
    }

    console.log("✅ Email sent successfully! ID:", data?.id);
    return { success: true, data };
  } catch (err) {
    console.error("Failed to send email:", err);
    return { success: false, error: "Unexpected email failure" };
  }
}
