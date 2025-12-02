import type { ReactNode } from "react";
import type { Route } from "./+types/hardware";
import { Icon } from "@iconify/react";
import { H1 } from "~/components/Headings";
import { Container } from "~/components/Container";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Recommended Web Services - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}

export function ServerComponent() {
  return (
    <Container>
      <div className="flex flex-col gap-8">
        <H1>Web Services We Love</H1>
        <Subprocessors />


      </div>
    </Container>
  )
}

function Subprocessors() {
  return (
    <div className="mt-16">

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
