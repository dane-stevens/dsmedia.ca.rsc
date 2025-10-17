import { useState } from "react";
import { Copy } from "~/components/Copy";
import js_beautify from 'js-beautify'
import { H1 } from "~/components/Headings";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "JSON Formatter - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}
function beautifyAndDisplay(json: object): void {

  // Beautify JSON with indentation
  const beautified = js_beautify(json, { indent_size: 2 });

  // Escape HTML special chars and colorize
  const html = syntaxHighlight(beautified);
  return html
}

function syntaxHighlight(json: string): string {
  json = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    match => {
      let cls = "text-orange-400"; //number
      if (/^"/.test(match)) {
        if (/:$/.test(match)) cls = "text-purple-400"; //key
        else cls = "text-green-400"; //string
      } else if (/true|false/.test(match)) cls = "text-pink-400"; //boolean
      else if (/null/.test(match)) cls = "text-teal-400";//null
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

export default function Generator() {
  const [code, setCode] = useState('')

  return (
    <div className="flex items-center justify-center px-8 py-16">
      <div className="flex flex-col items-center justify-center w-full max-w-screen-xl">
        <H1>JSON Formatter</H1>
        <div className="grid grid-cols-2 w-full">
          <div>
            <textarea value={code} rows={20} placeholder="Enter your JSON" className="border border-zinc-800 rounded-l-lg px-4 py-2 w-full h-full" onChange={(e) => setCode(e.target.value)}>
            </textarea>
            <button type='button' className="hover:text-zinc-400 cursor-pointer" onClick={() => setCode(js_beautify(code, { indent_size: 2 }))}>Format</button>
          </div>
          <div className="border-r border-y border-zinc-800 rounded-r-lg px-4 py-2 relative">
            {/* <Syntax>{code}</Syntax> */}
            <div className="absolute right-2 top-2">
              <Copy text={js_beautify(code, { indent_size: 2 })}></Copy>
            </div>
            <pre dangerouslySetInnerHTML={{ __html: beautifyAndDisplay(code) }} className="h-full" />
            <div className="flex justify-end mt-4 -mr-4">
              <Copy text={js_beautify(code, { indent_size: 0 }).replace(/\s+/g, "")}>Copy minified</Copy>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-32 text-zinc-300">
          <div>
            <h2 className="text-xl mb-4">What is this?</h2>
            <p>Use this page to format your JSON strings.</p>
          </div>
        </div>

      </div>


    </div>
  )
}