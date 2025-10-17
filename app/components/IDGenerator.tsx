"use client";

import { Icon } from "@iconify/react";
import { createId } from "@paralleldrive/cuid2";
import { useEffect, useState } from "react";
import { Copy } from "./Copy";

export function IDGenerator() {
  const [id, setId] = useState(() => createId())
  const [prefix, setPrefix] = useState('')
  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress)
    return () => window.removeEventListener('keypress', handleKeyPress)
  }, [])

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'r') setId(createId())
  }

  return (
    <>
      <div className="flex items-center">
        <input type='text' placeholder="prefix" className="border border-zinc-800 rounded-l-lg indent-4 py-2 w-20" onChange={(e) => setPrefix(e.target.value)} />
        <div className="border-r border-y border-zinc-800 rounded-r-lg px-4 py-2"><Copy>{`${prefix}${id}`}</Copy></div>
      </div>
      <button type='button' className="mt-4 bg-zinc-200 hover:bg-zinc-300 rounded-lg px-4 py-2 text-zinc-900 flex items-center gap-2" onClick={() => setId(createId())} title="Press 'r'">
        <Icon icon='mdi:refresh' className="size-5" />
        Generate another <kbd className="border size-5 rounded flex items-center justify-center">r</kbd>
      </button>

    </>
  )
}