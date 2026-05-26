"use server";

import { createServerSupabaseClient } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Login error:", error.message);
      return { success: false, error: error.message };
    }

    revalidatePath("/", "layout");
    return { success: true, user: data.user };
  } catch (err) {
    console.error("Unexpected login error:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function signup(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const supabase = await createServerSupabaseClient();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error("Signup error:", error.message);
      return { success: false, error: error.message };
    }

    revalidatePath("/", "layout");
    return { success: true, user: data.user };
  } catch (err) {
    console.error("Unexpected signup error:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function logout() {
  try {
    const supabase = await createServerSupabaseClient();
    await supabase.auth.signOut();
    revalidatePath("/", "layout");
    return { success: true };
  } catch (error) {
    console.error("Logout error:", error);
    return { success: false };
  }
}

export async function getUser() {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch {
    return null;
  }
}
