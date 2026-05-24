"use server";

import Stripe from "stripe";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia" as any,
});

export async function createCheckoutSession(planName: string) {
  const headerList = await headers();
  const origin = headerList.get("origin");

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `DexAudit ${planName} Plan`,
              description: "Full surgical audit with multi-tool optimization insights.",
            },
            unit_amount: planName === "Pro" ? 4900 : 0, // $49.00
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pricing/cancel`,
    });

    return { url: session.url };
  } catch (err: any) {
    console.error("Stripe Error:", err);
    return { error: err.message };
  }
}
