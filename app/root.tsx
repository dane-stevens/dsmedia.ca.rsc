import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: 'apple-touch-icon', sizes: '180x180', href: "/apple-touch-icon.png",
  },
  {
    rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"
  },
  {
    rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"
  },
  {
    rel: "manifest", href: "/site.webmanifest"
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script async src="https://plausible.io/js/pa-ZdlSzDV3JTwCgMD1B2J1u.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          window.plausible=window.plausible||function(){(plausible.q = plausible.q || []).push(arguments)},plausible.init=plausible.init||function(i){plausible.o = i || {}};
          plausible.init()
        `}} />
        <Meta />
        <Links />
      </head>
      <body className="w-full h-dvh">
        <header>
          <nav>
            <ul className="flex items-center justify-center gap-4 mt-8">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/id-generator'>ID Generator</NavLink></li>
              <li><NavLink to='/json-formatter'>JSON Formatter</NavLink></li>
            </ul>
          </nav>
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
