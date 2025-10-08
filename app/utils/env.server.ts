
import { z } from "zod";

export const ENV = z.object({
  TURNSTILE_SECRET_KEY: z.string(),
  RESEND_API_KEY: z.string().startsWith('re_')
});
export type ENV = z.infer<typeof ENV>;
export const env = ENV.parse(process.env);
