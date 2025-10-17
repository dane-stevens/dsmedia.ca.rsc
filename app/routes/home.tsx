import { Logo } from "~/logo";
import type { Route } from "./+types/home";
import { type ReactNode } from "react";
import { Icon } from "@iconify/react";
import z, { ZodError } from "zod";
import { validateTurnstile } from "~/utils/turnstile.server";
import { sendEmail } from "~/utils/resend.server";
import { ContactForm } from "~/components/ContactForm";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "DS Media" },
    { name: "description", content: "DS Media" },
  ];
}

export async function action({ request }: Route.ActionArgs) {

  const Payload = z.object({
    name: z.string(),
    email: z.email(),
    message: z.string(),
    "cf-turnstile-response": z.string()
  })

  const formData = await request.clone().formData()

  const parsedData = Payload.safeParse(Object.fromEntries(formData))

  if (!parsedData.success) {
    return {
      errors: parsedData.error
    }
  }
  const data = parsedData?.data

  if (!(await validateTurnstile(request))) {
    const errors = new ZodError([
      {
        code: "custom",
        message: "Please verify you are human.",
        path: ["turnstile"],
      },
    ]);
    return {
      errors,
    };
  }

  await sendEmail({
    from: 'website@m.dsmedia.ca',
    to: 'dane@dsmedia.ca',
    subject: 'Website inquiry',
    html: `
    <b>Name:</b> ${data.name}<br/>
    <b>Email:</b> ${data.email}<br/><br/>
${data.message}    
    `
  })

  return { success: true }
}

export function ServerComponent() {
  return (
    <div className="mx-auto max-w-screen-md py-16 px-8">
      <div>
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="w-20">
            <Logo />
          </div>
          <div className="text-6xl">
            DS Media
          </div>
        </div>
        <div className="mt-24 text-2xl text-balance text-center">
          We build specialized web applications with complex logic requirements
        </div>
        <div>
          <h2 className="text-lg mt-24">
            Get in touch
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

