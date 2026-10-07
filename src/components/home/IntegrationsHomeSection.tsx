import Link from "next/link";
import { Eyebrow, SectionTitle, Accent, Lead, HomeButton, HomeSection } from "./primitives";

type Node = { name: string; note: string };

const LEFT: Node[] = [
  { name: "Facebook & Instagram Lead Ads", note: "Leads in seconds" },
  { name: "Google Lead Forms", note: "Capture campaign leads" },
  { name: "Web Forms & Webhooks", note: "Your website, Zapier, Make" },
  { name: "CSV Import", note: "Bring in existing leads" },
];
const RIGHT: Node[] = [
  { name: "WhatsApp", note: "Conversations & follow-ups" },
  { name: "Your Email (SMTP)", note: "Gmail, Outlook, Zoho" },
  { name: "Google Calendar", note: "Sync meetings & events" },
  { name: "REST API", note: "Build custom workflows" },
];

function NodeCard({ node }: { node: Node }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-highlight" aria-hidden="true">
        {node.name[0]}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium text-white">{node.name}</p>
        <p className="text-xs text-white/50">{node.note}</p>
      </div>
    </li>
  );
}

export function IntegrationsHomeSection() {
  return (
    <HomeSection id="integrations">
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-3 text-center">
        <Eyebrow>Fits your stack</Eyebrow>
        <SectionTitle className="mt-1">
          Plugs into the tools you <Accent>already use.</Accent>
        </SectionTitle>
        <Lead>
          A lead should never disappear after the first conversation. Move opportunities through clear stages, understand
          what is active or stalled, and give your team a shared view of the pipeline.
        </Lead>
      </div>

      <div className="mt-12 grid items-center gap-6 lg:grid-cols-[1fr_200px_1fr]">
        <ul className="space-y-3">
          {LEFT.map((n) => (
            <NodeCard key={n.name} node={n} />
          ))}
        </ul>
        <div className="flex flex-col items-center justify-center gap-3 py-4" aria-hidden="true">
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-highlight/60 to-transparent lg:h-24 lg:w-px lg:bg-gradient-to-b" />
          <span className="grid h-24 w-24 place-items-center rounded-3xl border border-white/15 bg-white/[0.06] text-4xl font-bold text-white shadow-[0_0_60px_rgba(94,232,120,0.18)]">
            R
          </span>
          <span className="text-xs text-white/50">+7 more integrations</span>
          <span className="h-px w-24 bg-gradient-to-r from-transparent via-highlight/60 to-transparent lg:h-24 lg:w-px lg:bg-gradient-to-b" />
        </div>
        <ul className="space-y-3">
          {RIGHT.map((n) => (
            <NodeCard key={n.name} node={n} />
          ))}
        </ul>
      </div>

      <div className="mt-10 flex justify-center">
        <HomeButton href="/features/integrations" variant="secondary" size="md" arrow>
          Explore All Integrations
        </HomeButton>
      </div>
    </HomeSection>
  );
}
