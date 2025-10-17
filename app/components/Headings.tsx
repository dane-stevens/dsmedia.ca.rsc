import type { ReactNode } from "react";

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="text-6xl text-center mb-8">{children}</h1>

}