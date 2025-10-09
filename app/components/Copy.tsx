import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";

export function Copy({ children, text = '' }: { children: string; text?: string }) {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    let timeout = setTimeout(() => { }, 0);
    if (isCopied) {
      timeout = setTimeout(() => setIsCopied(false), 2500);
    }
    return () => clearTimeout(timeout);
  }, [isCopied]);
  function handleCopy(e) {
    e.stopPropagation()
    e.preventDefault()
    navigator?.clipboard?.writeText(text || children);
    return setIsCopied(true);
  }
  const ref = useRef(null);
  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex gap-1 items-center group cursor-pointer"
      title="Click to copy"
    >
      {children}
      <Icon
        icon={
          // isCopied ? "mdi:clipboard-check-outline" : "mdi:clipboard-outline"
          isCopied ? "mdi:check" : "mdi:content-copy"
        }
        className={`size-4 ${isCopied ? "text-emerald-600" : "text-base-400 group-hover:text-base-600"} `}
      />
    </button>
  );
}