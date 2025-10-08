
import { Resend, type CreateEmailOptions } from "resend";
import { env } from "./env.server";

export const resend = new Resend(env.RESEND_API_KEY);
export const sendEmail = async ({
  from,
  to,
  subject,
  html,
  attachments,
}: CreateEmailOptions) => {

  const res = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text: "",
    attachments,
  });

  const { data, error } = res;

  if (error) {
    console.error({ error });
  }
  if (data) {
    console.log({ data });
  }

  return res;
};
