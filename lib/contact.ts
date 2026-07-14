import type { ContactPayload } from "@/lib/types";

/**
 * Posts directly to Web3Forms from the browser — their free tier only
 * accepts client-side submissions, and access keys are public by design
 * (spam is handled by their filtering plus the botcheck honeypot).
 */
export async function postContact(
  payload: ContactPayload
): Promise<{ success: boolean; message?: string }> {
  // Honeypot tripped: pretend success so bots don't learn they were caught.
  if (payload.website) {
    return { success: true };
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    throw new Error("Contact form is not configured");
  }

  // FormData keeps this a "simple request" — no CORS preflight, which
  // Web3Forms does not answer.
  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", payload.subject);
  formData.append("email", payload.email);
  formData.append("message", payload.message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = (await response.json()) as {
    success: boolean;
    message?: string;
  };

  if (!response.ok || !data.success) {
    throw new Error(data.message ?? "Failed to send message");
  }

  return { success: true };
}
