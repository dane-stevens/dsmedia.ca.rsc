
import { Icon } from "@iconify/react";
import type { ReactNode } from "react";
import { Container, Vertical } from "~/components/Container";
import { H1 } from "~/components/Headings";
import type { Route } from "./+types/uses";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Uses - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}

export function ServerComponent() {
  return (
    <Container>
      <Vertical>
        <H1>/uses</H1>
        <h2 className="text-center text-xl -mt-8 mb-8 text-gray-400">Hardware, software and tools I use daily for software development.</h2>


        <Section title="Hardware">
          <Software
            name="Intel NUC"
            description={
              <>
                <div className="flex gap-2 items-center"><Icon icon='solar:cpu-bold' className="size-5" /> CPU: 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz</div>
                <div className="flex gap-2 items-center"><Icon icon='fa-solid:memory' className="size-5" /> Memory: 32GB</div>
                <div className="flex gap-2 items-center"><Icon icon='bi:nvme-fill' className="size-5" /> Storage: 2TB NVMe Drive</div>
                <div className="flex gap-2 items-center"><Icon icon='simple-icons:popos' className="size-5" /> Operating System: POP!_os</div>
              </>
            }
            icon=""
            url=""
          />
          <Software
            name="Monitors"
            description={
              <>
                <div className="flex gap-2 items-center"><Icon icon='mdi:monitor' className="size-5" /> Triple ViewSonic 27" Monitors @ 1080x1920</div>
              </>
            }
            icon=""
            url=""
          />
          <Software
            name="Keyboard + Mouse"
            description={
              <>
                <div className="flex gap-2 items-center"><Icon icon='material-symbols:keyboard' className="size-5" /> Logitech MX Mechanical</div>
                <div className="flex gap-2 items-center"><Icon icon='material-symbols:mouse' className="size-5" /> Logitech MX Master 2S</div>
              </>
            }
            icon=""
            url=""
          />
          <Software
            name="Webcam / Microphone"
            description={
              <>
                <div className="flex gap-2 items-center"><Icon icon='mdi:camera' className="size-5" /> Canon EOS Rebel SL2 + EF-s 18-55mm + HDMI capture card</div>
                <div className="flex gap-2 items-center"><Icon icon='mdi:microphone' className="size-5" /> FIFiNE USB Microphone</div>
              </>
            }
            icon=""
            url=""
          />
          <Software
            name="Headphones"
            description={
              <>
                <div className="flex gap-2 items-center"><Icon icon='mdi:headphones' className="size-5" /> Audio-Technica ATH-M50: Still using the same pair I bought in 2010, 3rd set of ear pads and head band.</div>
              </>
            }
            icon=""
            url=""
          />
        </Section>

        <Section title="Development Software">
          <Software
            name="Obsidian"
            description="The free and flexible app for your private thoughts."
            url="https://obsidian.md/"
            icon="simple-icons:obsidian"
          />
          <Software
            name="VSCodium + Neovim Bindings"
            description="VSCodium is a community-driven, freely-licensed binary distribution of Microsoft’s editor VS Code."
            url="https://vscodium.com/"
            icon="devicon-plain:vscodium"
          />
          <Software
            name="GitKraken"
            description="Make Git Easy: Visual, Powerful, AI-Assisted. (Don't use AI features.)"
            url="https://gitkraken.com/"
            icon="simple-icons:gitkraken"
          />
        </Section>

        <Section title="Stack">
          <Software
            name="React Router (Framework Mode)"
            description="A user‑obsessed, standards‑focused, multi‑strategy router you can deploy anywhere."
            icon='devicon-plain:reactrouter'
            url="https://reactrouter.com/"
          />
          <Software
            name="Drizzle"
            description="ORM for you to ship ship ship"
            icon="lineicons:drizzle"
            url="https://orm.drizzle.team/"
          />
          <Software
            name="MySQL"
            description="The world's most popular open source database"
            icon="grommet-icons:mysql"
            url="https://www.mysql.com/"
          />
          <Software
            name="Redis"
            description="In-memory key-value store"
            icon="devicon-plain:redis"
            url="https://redis.io/open-source/"
          />
          <Software
            name="BullMQ"
            description="The open source message queue for Redis™, trusted by thousands of companies processing billions of jobs every day."
            icon="game-icons:charging-bull"
            url="https://bullmq.io/"
          />
          <Software
            name="Typesense"
            description="Lightning Fast, Open Source Search"
            icon="logos:typesense-icon"
            url="https://typesense.org/"
          />
        </Section>


      </Vertical>
    </Container>
  )
}

function Section({ title, children }: { title: ReactNode, children: ReactNode }) {
  return (
    <div className="mt-16">
      <h2>{title}</h2>
      <ul className="flex flex-col gap-4 mt-4">
        {children}
      </ul>
    </div>
  )
}

function Software({
  name,
  description,
  url,
  icon,
  offer,
  deploy
}: {
  name: ReactNode;
  description: ReactNode;
  url?: string;
  icon?: string | ReactNode;
  offer?: string
  deploy?: string
}) {
  return (
    <li className="border border-zinc-800 rounded-lg p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && (
            <Icon icon={icon} className="size-4" />
          )}
          <strong className="text-xl">{name}</strong>
        </div>
        <div>
          {url && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={url}
              className="underline hover:text-zinc-600 text-sm flex items-center gap-0.5"
            >
              {url.split('?')[0]}
              <Icon icon="mdi:external-link" />
            </a>
          )}
        </div>
      </div>
      <div className="text-zinc-400 mt-3 text-center md:text-left">{description}</div>
      {offer && <div className="text-xs text-zinc-500 mt-2 text-center md:text-left">
        <span className="rounded-lg border border-emerald-600 bg-emerald-950 text-emerald-200 px-1 mr-2">Affiliate</span>
        {offer}</div>}
      {deploy &&
        <div className="flex">
          <a target="_blank" rel="noopener noreferrer" className="cursor-pointer mt-4 flex gap-2 items-center text-sm px-4 py-2 rounded-lg bg-[rgb(133,59,206)] hover:bg-[rgb(166,103,228)]" href={deploy}>
            <img src="https://railway.com/brand/logo-light.svg" className="size-5" />
            Deploy on Railway</a>
        </div>
      }

    </li>
  );
}

