import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route('utilities/id-generator/:type?', "routes/utilities/id-generator.tsx"),
  route('utilities/json-formatter', "routes/utilities/json-formatter.tsx"),
  route('utilities/timestamp', "routes/utilities/timestamp.tsx"),
  route('utilities/whats-my-ip', "routes/utilities/ip.tsx"),

  route('toolkit/hardware', "routes/toolkit/hardware.tsx"),
  route('toolkit/web-services', "routes/toolkit/web-services.tsx"),
  route('toolkit/open-source-software', "routes/toolkit/open-source-software.tsx"),
] satisfies RouteConfig
