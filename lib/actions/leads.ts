"use server";

import { createServerSupabaseClient } from "@/lib/supabase";
import { sendAuditConfirmationEmail } from "./emails";
import { headers } from "next/headers";

export type LeadData = {
  email: string;
  company_name?: string;
  role?: string;
  team_size?: number;
  audit_data?: any;
  savings?: number;
};

const RATE_LIMIT_MS = 60000; // 1 minute per email/IP
const submissionCache = new Map<string, number>();

export async function captureLead(data: LeadData) {
  try {
    const headerList = await headers();
    const ip = headerList.get("x-forwarded-for") || "unknown";
    const cacheKey = `${ip}:${data.email}`;

    const lastSubmission = submissionCache.get(cacheKey);
    if (lastSubmission && Date.now() - lastSubmission < RATE_LIMIT_MS) {
      return { success: false, error: "Too many requests. Please wait a minute." };
    }

    const supabase = await createServerSupabaseClient();

    const { error } = await supabase.from("leads").insert([
      {
        email: data.email,
        company_name: data.company_name,
        role: data.role,
        team_size: (data.team_size !== undefined && data.team_size !== null && data.team_size !== "") ? parseInt(String(data.team_size)) : null,
        audit_data: data.audit_data,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    console.log("Lead captured in DB. Savings detected:", data.savings);

    submissionCache.set(cacheKey, Date.now());

    // Trigger transactional email if it's an audit lead
    if (data.savings !== undefined) {
      console.log("Triggering confirmation email...");
      await sendAuditConfirmationEmail(data.email, data.savings);
    } else {
      console.log("No savings data provided. Skipping email trigger.");
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error:", err);
    return { success: false, error: "Failed to capture lead" };
  }
}
