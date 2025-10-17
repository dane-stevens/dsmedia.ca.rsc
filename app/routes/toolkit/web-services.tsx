import type { ReactNode } from "react";
import type { Route } from "./+types/hardware";
import { Icon } from "@iconify/react";
import { H1 } from "~/components/Headings";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Recommendations - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}
const products = [
  {
    url: "https://amzn.to/3W8ayjd", title: 'Beelink SER9 Pro', image: "https://m.media-amazon.com/images/I/41dZ1FlexML._AC_SL1500_.jpg",
    description: "Beelink SER9 Pro Mini Desktop PC with AMD Ryzen AI 9 HX 370 12C/24T, 32GB LPDDR5X 1TB NVMe M.2 SSD, Triple Display Output, WiFi 6, USB4, 2.5G RJ45, Bluetooth 5.2 W-11 Mini Gaming Computer"
  },
  {
    url: "https://amzn.to/4qe6744",
    title: "LG 32U631A 31.5\" QHD Monitor",
    image: "https://m.media-amazon.com/images/I/71o7A0jJ-pL._AC_SL1500_.jpg",
    description: `LG 32U631A 31.5" QHD Monitor, IPS Display, 100Hz, sRGB 99% (Typ.), USB-C, Reader Mode, Flicker Safe, Dynamic Action Sync, Black Stabilizer, LG Switch App, 3-Side Borderless, Tilt Adjustable`
  },
  {
    url: "https://amzn.to/3L0PCIp",
    title: "Logitech MX Master 4",
    image: "https://m.media-amazon.com/images/I/61z3ENJubZL._AC_SL1500_.jpg",
    description: `Logitech MX Master 4, Ergonomic Wireless Mouse with Advanced Performance Haptic Feedback, Ultra-Fast Scrolling, USB-C Charging, Bluetooth, Windows, MacOS - Graphite`
  },
  {
    url: "https://amzn.to/46Y4G2j",
    title: "Logitech MX Keys S",
    image: "https://m.media-amazon.com/images/I/71G7uXAb9BL._AC_SL1500_.jpg",
    description: `Logitech MX Keys S Wireless Keyboard, Low Profile, Fluid Precise Quiet Typing, Programmable Keys, Backlighting, Bluetooth, USB C Rechargeable, for Windows PC, Linux, Chrome, Mac - Graphite`
  },
  {
    url: "https://amzn.to/42OE3u1",
    title: "NB North Bayou Monitor Mount",
    image: "https://m.media-amazon.com/images/I/51FvgCU1lCL._AC_SL1500_.jpg",
    description: `NB North Bayou Monitor Mount,Fits 17-30" or Bigger Computer Monitors(Within 19.8lbs), Adjustable Stand with Tilt Rotation Swivel Function, Desk Mount F80`
  }



]

export function ServerComponent() {
  return (
    <div className="flex items-center justify-center px-8 py-16">

      <div className="flex flex-col gap-8">
        <H1>Web Services We Love</H1>
        <Subprocessors />


      </div>
    </div>
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
