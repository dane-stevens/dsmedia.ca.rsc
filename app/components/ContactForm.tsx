"use client";
import { useState } from "react";
import { Form, useActionData } from "react-router";
import type { action } from '~/routes/home'
import Turnstile from "./Turnstile";

export function ContactForm() {
  const [turnstilePassed, setTurnstilePassed] = useState(false)
  const { success } = useActionData<typeof action>() || {}

  return (
    <>
      {
        success ? (
          <div className="border rounded-lg border-emerald-200 bg-emerald-950 p-4 text-center text-emerald-200">Thank you for getting in touch</div>
        ) : (
          <Form method="POST" className="flex flex-col gap-2">

            <input type="text" name="name" placeholder="Your name" className="border border-zinc-800 rounded-lg py-2 indent-4" />
            <input type="email" name="email" placeholder="Your email" className="border border-zinc-800 rounded-lg py-2 indent-4" />
            <textarea name="message" className="border border-zinc-800 rounded-lg py-2 px-4 w-full" rows={4} placeholder="How can we help?"></textarea>
            <Turnstile
              sitekey="0x4AAAAAAB5hhuF0Buue1-HF"
              onVerify={(token) => {
                setTurnstilePassed(true);
              }}
              size="flexible"
              theme="dark"
              className="turnstile"
            />
            <button type="submit" disabled={!turnstilePassed} className="rounded-lg bg-emerald-400 text-emerald-950 p-4 hover:bg-emerald-500 cursor-pointer">Send Message</button>
          </Form>
        )
      }
    </>
  )
}