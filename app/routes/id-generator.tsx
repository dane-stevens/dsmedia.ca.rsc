import type { Route } from "./+types/id-generator";
import { IDGenerator } from "~/components/IDGenerator";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "ID Generator - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}
export default function Generator() {
  return (
    <div className="flex items-center justify-center px-8 py-16">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-xl mb-4">Cuid2 Generator</h1>
        <IDGenerator />
        <div className="flex flex-col gap-8 mt-32 text-zinc-300">
          <div>
            <h2 className="text-xl mb-4">What is this?</h2>
            <p>Use this page to generate unique ID's for use in development or anywhere you need a unique ID.</p>
          </div>
          <div>
            <h2 className="text-xl mb-4">What about UUID's, ULIDs, cuid?</h2>
            <p>Cuid2 is considered: "The most secure, collision-resistant ids optimized for horizontal scaling and performance."</p>
          </div>
        </div>
      </div>
    </div>
  )
}