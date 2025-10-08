import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
route("js/script.js", "routes/plausibleScript.ts"),
route("api/events", "routes/plausibleEvents.ts")
] satisfies RouteConfig;
