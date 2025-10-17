import { useEffect, useState } from "react";
import { Copy } from "~/components/Copy";
import type { Route } from "./+types/ip";
import { useInterval } from "~/hooks/interval";
import { H1 } from "~/components/Headings";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "IP - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    ip: request.headers.get('CF-Connecting-IP'),
    ipv6: request.headers.get('CF-Connecting-IPv6'),
    cf_ray: request.headers.get('cf-ray'),
    cf_ipcountry: request.headers.get('cf-ipcountry'),
  }
}


export function ServerComponent(props: Route.ComponentProps) {

  return (
    <div className="flex items-center justify-center px-8 py-16">
      <div className="flex flex-col items-center justify-center">
        <H1>What's My IP?</H1>

        <div className="flex items-center gap-2">
          Your IP address: <Copy>{props.loaderData.ip}</Copy>
        </div>
        {/* <div className="flex items-center gap-2">
          Your IPv6 address: <Copy>{props.loaderData.ipv6}</Copy>
        </div> */}
        <div className="flex items-center gap-2">
          CF Ray: <Copy>{props.loaderData.cf_ray}</Copy>
        </div>
        <div className="flex items-center gap-2">
          CF Country: <Copy>{props.loaderData.cf_ipcountry}</Copy>
        </div>

      </div>

    </div>
  )
}