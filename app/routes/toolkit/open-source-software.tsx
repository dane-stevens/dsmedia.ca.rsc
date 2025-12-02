import { Icon } from "@iconify/react";
import type { ReactNode } from "react";
import { Container, Vertical } from "~/components/Container";
import { H1 } from "~/components/Headings";
import type { Route } from "./+types/open-source-software";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Open Source Software - DS Media" },
    { name: "description", content: "DS Media" },
  ];
}

export function ServerComponent() {
  return (
    <Container>
      <Vertical>
        <H1>Open Source Software We Love</H1>


        <Section title="Creative & Technical Tools">
          <Software
            name="Penpot"
            description="The open-source design tool that speaks real code (Figma alternative)"
            icon="simple-icons:penpot"
            url="https://penpot.app"
          />
          <Software
            name="Excalidraw"
            description="Virtual whiteboard for sketching hand-drawn like diagrams"
            // icon="simple-icons:penpot"
            url="https://excalidraw.com"
          />
          <Software
            name="VSCodium"
            description="Free/Libre Open Source Software Binaries of VS Code"
            icon="devicon:vscodium"
            url="https://vscodium.com/"
          />
          <Software
            name="DBeaver"
            description="Free, Cross-Platform, Open-Source Database Management Tool"
            icon="devicon:dbeaver"
            url="https://dbeaver.io/"
          />
        </Section>

        <Section title="Knowledge Management">
          <Software
            name="Obsidian"
            description="The free and flexible app for your private thoughts."
            url="https://obsidian.md/"
          />
        </Section>

        <Section title="Backup & Sync">
          <Software
            name="Syncthing"
            description="Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it’s transmitted over the internet."
            icon='simple-icons:syncthing'
            url="https://syncthing.net/"
          />
          <Software
            name="Duplicati"
            description="Secure, encrypted backups with zero‑knowledge simplicity. Select files or full systems, to any storage, on any operating system."
            icon="simple-icons:duplicati"
            url="https://duplicati.com/"
          />
        </Section>


        <Section title="Finance">
          <Software
            name="Actual Budget"
            description="Actual Budget is a super fast and privacy-focused app for managing your finances."
            icon="simple-icons:actualbudget"
            url="https://actualbudget.org"
          />
        </Section>

        <Section title="Photo & Video">
          <Software
            name="Immich"
            description="Self-hosted photo and video management solution"
            // icon="simple-icons:actualbudget"
            url="https://immich.app"
          />
          <Software
            name="VLC media player"
            description="VLC is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols."
            icon="flat-color-icons:vlc"
            url="https://videolan.org"
          />
        </Section>

        <Section title="Network Security">
          <Software
            name="Headscale"
            description="Headscale is an open source, self-hosted implementation of the Tailscale control server."
            icon='simple-icons:tailscale'
            url="https://headscale.net"
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
  offer
}: {
  name: ReactNode;
  description: ReactNode;
  url: string;
  icon?: string | ReactNode;
  offer?: string
}) {
  return (
    <li className="border border-zinc-800 rounded-lg p-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          {icon ? (
            <Icon icon={icon} className="size-4" />
          ) : (
            <img
              src={`${url.split('?')[0]}/favicon.ico`}
              // src={`https://img.logo.dev/${url.replace('https://', '')}?token=pk_Ph2V6TJKQmOcRTtwS_klMQ&size=24&format=png`}
              alt={`${name} logo`}
              style={{ width: "16px" }}
            />
          )}
          <strong className="text-xl">{name}</strong>
        </div>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="underline hover:text-zinc-600 text-sm flex items-center gap-0.5"
          >
            {url.split('?')[0]}
            <Icon icon="mdi:external-link" />
          </a>
        </div>
      </div>
      <div className="text-zinc-400 mt-3 text-center md:text-left">{description}</div>
      {offer && <div className="text-xs text-zinc-500 mt-2 text-center md:text-left">
        <span className="rounded-lg border border-emerald-600 bg-emerald-950 text-emerald-200 px-1 mr-2">Affiliate</span>
        {offer}</div>}
    </li>
  );
}

