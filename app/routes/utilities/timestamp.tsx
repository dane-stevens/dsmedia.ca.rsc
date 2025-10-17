import { useEffect, useState } from "react";
import { Copy } from "~/components/Copy";
import type { Route } from "./+types/timestamp";
import { useInterval } from "~/hooks/interval";
import { intlFormat } from 'date-fns'
import { H1 } from "~/components/Headings";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Timestamp - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}
export default function Timestamp() {
  const [now, setNow] = useState<Date | null>(null)

  useInterval(() => {
    setNow(new Date())
  }, 0)

  if (!now) return null

  return (
    <div className="flex items-center justify-center px-8 py-16">
      <div className="flex flex-col items-center justify-center">
        <H1>Timestamp</H1>

        <pre>
          <Copy>
            {intlFormat(new Date, { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </Copy>
        </pre>
        <pre className="flex items-center">
          Seconds: <Copy>{String(now.getTime()).slice(0, -3)}</Copy>
        </pre>
        <pre className="flex items-center">
          Milliseconds: <Copy>{String(now.getTime())}</Copy>
        </pre>
        <pre>
          Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </pre>

      </div>


    </div>
  )
}