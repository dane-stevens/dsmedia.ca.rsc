import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route('id-generator/:type?', "routes/id-generator.tsx"),
  route('json-formatter', "routes/json-formatter.tsx"),
] satisfies RouteConfig;
