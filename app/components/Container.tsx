import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center px-8 py-16 max-w-(--breakpoint-xl) mx-auto">
      {children}
    </div>
  )
}

export function Vertical({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-8">
      {children}
    </div>
  )
}