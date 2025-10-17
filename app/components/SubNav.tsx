"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router";

export function SubNav({ children, title }: { children: ReactNode; title: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setIsOpen(false)
  }, [location])
  return (
    <li className="group relative z-10" onClick={() => setIsOpen(!isOpen)}>
      {title}
      <ul className={`${isOpen ? '' : 'hidden'} group-hover:block group-active:block absolute bg-gray-900 rounded-lg overflow-hidden`}>
        {children}
      </ul>
    </li>
  )
}