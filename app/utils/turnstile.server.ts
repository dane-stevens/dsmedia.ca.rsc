import { env } from "~/utils/env.server";
import { createId } from "@paralleldrive/cuid2";

export async function validateTurnstile(request: Request) {
  const nextRequest = request.clone()
  const payload = await nextRequest.formData();
  const token = payload.get("cf-turnstile-response");
  const ip = nextRequest.headers.get("CF-Connecting-IP");

  const formData = new FormData();
  formData.append("secret", env.TURNSTILE_SECRET_KEY);
  formData.append("response", token);
  formData.append("remoteip", ip);
  formData.append("idempotency_key", createId());

  const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  const result = await fetch(url, {
    body: formData,
    method: "POST",
  });
  const outcome = await result.json();
  if (outcome.success) {
    return true;
  }

  return false;
}