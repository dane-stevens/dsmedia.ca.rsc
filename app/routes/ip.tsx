import { Icon } from "@iconify/react";
import { createId } from "@paralleldrive/cuid2";
import { useEffect, useState } from "react";
import { Copy } from "~/components/Copy";
import type { Route } from "./+types/ip";
import { useInterval } from "~/hooks/interval";
import { intlFormat } from 'date-fns'

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "IP - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    ip: request.headers.get('CF-Connecting-IP'),
    ipv6: request.headers.get('CF-Connecting-IPv6')
  }
}

export default function Timestamp(props: Route.ComponentProps) {
  const [now, setNow] = useState<Date | null>(null)

  useInterval(() => {
    setNow(new Date())
  }, 0)

  if (!now) return null

  return (
    <div className="flex items-center justify-center px-8 py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-xl mb-4">IP</h1>

        <div>
          Your IP address: {props.loaderData.ip}
        </div>

      </div>


    </div>
  )
}