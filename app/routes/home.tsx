import { Logo } from "~/logo";
import type { Route } from "./+types/home";
import { useState, type ReactNode } from "react";
import { Icon } from "@iconify/react";
import Turnstile from "~/components/Turnstile";
import { Form } from "react-router";
import z, { ZodError } from "zod";
import { validateTurnstile } from "~/utils/turnstile.server";
import { sendEmail } from "~/utils/resend.server";

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

  console.log(data)

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

export default function Home(props) {
  const [turnstilePassed, setTurnstilePassed] = useState(false)
  const { success } = props.actionData || {}
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
          {
            success ? (
              <div className="border rounded-lg border-emerald-200 bg-emerald-950 p-4 text-center text-emerald-200">Thank you for getting in touch</div>
            ) : (
              <Form method="POST" className="flex flex-col gap-2">

                <input type="text" name="name" placeholder="Your name" className="border border-zinc-800 rounded-lg py-2 indent-4" />
                <input type="email" name="email" placeholder="Your email" className="border border-zinc-800 rounded-lg py-2 indent-4" />
                <textarea name="message" className="border border-zinc-800 rounded-lg py-2 px-4 w-full" rows={4} placeholder="How can we help?"></textarea>
                <Turnstile
                  sitekey="0x4AAAAAAB5hhuF0Buue1-HF"
                  onVerify={(token) => {
                    setTurnstilePassed(true);
                  }}
                  size="flexible"
                  theme="dark"
                  className="turnstile"
                />
                <button type="submit" disabled={!turnstilePassed} className="rounded-lg bg-emerald-400 text-emerald-950 p-4 hover:bg-emerald-500 cursor-pointer">Send Message</button>
              </Form>
            )
          }
        </div>
        <Subprocessors />
      </div>
    </div>
  )
}

function Subprocessors() {
  return (
    <div className="mt-16">

      <h2 className="text-lg">Services we love</h2>
      <ul className="flex flex-col gap-4 mt-4">
        <Subprocessor
          name="Cloudflare, Inc."
          purpose="Web application firewall"
          url="https://cloudflare.com"
        />
        <Subprocessor
          name="Railway Corp."
          purpose="Server hosting"
          url="https://railway.com?referralCode=dsmedia"
          offer="Get $20 in free credits when you sign up for railway"
        />
        <Subprocessor
          name="Stripe, Inc."
          purpose="Payment processing, invoicing, billing"
          url="https://stripe.com"
        />
        <Subprocessor
          name="Better Stack, Inc."
          purpose="Uptime monitoring, status page"
          url="https://betterstack.com/?ref=b-cezv"
          icon="simple-icons:betterstack"
          offer={<>&nbsp;</>}
        />
        <Subprocessor
          name="Plausible Insights"
          purpose="Analytics data"
          url="https://plausible.io"
          country="EU"
          icon="simple-icons:plausibleanalytics"
        />
        <Subprocessor
          name="Resend"
          purpose="Email Delivery"
          url="https://resend.com"
          country="USA"
          icon="simple-icons:resend"
        />
        <Subprocessor
          name="Twilio, Inc."
          purpose="SMS & Voice"
          url="https://twilio.com"
          country="USA"
        // icon="simple-icons:twilio"
        />
      </ul>
    </div>
  );
}
function Subprocessor({
  name,
  country = "USA",
  purpose,
  url,
  icon,
  offer
}: {
  name: ReactNode;
  country?: "USA" | string;
  purpose: ReactNode;
  url: string;
  icon?: string | ReactNode;
  offer?: string
}) {
  return (
    <li className="border border-zinc-800 rounded-lg p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          {icon ? (
            <Icon icon={icon} className="size-4" />
          ) : (
            <img
              src={`${url.split('?')[0]}/favicon.ico`}
              // src={`https://img.logo.dev/${url.replace('https://', '')}?token=pk_Ph2V6TJKQmOcRTtwS_klMQ&size=24&format=png`}
              alt={`${name} logo`}
              style={{ width: "16px" }}
            />
          )}
          <strong className="text-xl">{name}</strong> ({country})
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="underline hover:text-zinc-600 text-sm flex items-center gap-0.5"
          >
            {url.split('?')[0]}
            <Icon icon="mdi:external-link" />
          </a>
        </div>
      </div>
      <div className="text-zinc-400 mt-3 text-center md:text-left">Purpose: {purpose}</div>
      {offer && <div className="text-xs text-zinc-500 mt-2 text-center md:text-left">
        <span className="rounded-lg border border-emerald-600 bg-emerald-950 text-emerald-200 px-1 mr-2">Affiliate</span>
        {offer}</div>}
    </li>
  );
}
