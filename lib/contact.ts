import type { ContactPayload } from "@/lib/types";

export async function postContact(
  payload: ContactPayload
): Promise<{ success: boolean; message?: string }> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await response.json()) as {
    success: boolean;
    message?: string;
  };

  if (!response.ok) {
    throw new Error(data.message ?? "Failed to send message");
  }

  return data;
}
