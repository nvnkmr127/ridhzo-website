import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Braces, Calendar, FileSpreadsheet, Mail, Megaphone, MessageCircle, Search, Webhook } from "lucide-react";
import { Eyebrow, SectionTitle, Accent, Lead, HomeButton, HomeSection } from "./primitives";

type NodeDef = { name: string; note: string; Icon: LucideIcon; y: number };

// y = vertical centre of the node inside the 1200 x 560 diagram.
const LEFT: NodeDef[] = [
  { name: "Facebook & Instagram Lead Ads", note: "Leads in seconds", Icon: Megaphone, y: 70 },
  { name: "Google Lead Forms", note: "Capture campaign leads", Icon: Search, y: 205 },
  { name: "Web Forms & Webhooks", note: "Your website, Zapier, Make", Icon: Webhook, y: 345 },
  { name: "CSV Import", note: "Bring in existing leads", Icon: FileSpreadsheet, y: 480 },
];
const RIGHT: NodeDef[] = [
  { name: "WhatsApp", note: "Conversations & follow-ups", Icon: MessageCircle, y: 70 },
  { name: "Your Email (SMTP)", note: "Gmail, Outlook, Zoho", Icon: Mail, y: 205 },
  { name: "Google Calendar", note: "Sync meetings & events", Icon: Calendar, y: 345 },
  { name: "REST API", note: "Build custom workflows", Icon: Braces, y: 480 },
];

const W = 1200;
const H = 560;
const HUB = { x: 600, y: 270 };
const NODE_W = 262;

function NodeCard({ node }: { node: NodeDef }) {
  const { Icon } = node;
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/12 bg-white/65 p-2 text-black">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-sm font-medium leading-5">{node.name}</p>
        <p className="text-xs leading-[18px] text-black/65">{node.note}</p>
      </div>
    </div>
  );
}

function Hub() {
  return (
    <div className="grid h-[109px] w-[110px] place-items-center rounded-3xl bg-white p-2">
      <Image src="/logo/Ridhzo-Logo-Final_Logo-Icon-Dark.png" alt="Ridhzo" width={56} height={56} className="h-14 w-14" />
    </div>
  );
}

/** Connector from a node edge to the hub. Direction matters for the animated green flow. */
function Connectors() {
  const paths = [
    ...LEFT.map((n, i) => ({ d: `M${NODE_W},${n.y} C${NODE_W + 190},${n.y} ${HUB.x - 190},${HUB.y} ${HUB.x - 55},${HUB.y}`, delay: i * 0.4 })),
    ...RIGHT.map((n, i) => ({ d: `M${HUB.x + 55},${HUB.y} C${HUB.x + 190},${HUB.y} ${W - NODE_W - 190},${n.y} ${W - NODE_W},${n.y}`, delay: 1.6 + i * 0.4 })),
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true" fill="none">
      {paths.map((p, i) => (
        <g key={i}>
          <path d={p.d} stroke="rgba(255,255,255,0.28)" strokeWidth="2" opacity="0.9" />
          <path
            d={p.d}
            pathLength={100}
            stroke="#5EE878"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="14 86"
            className="animate-flow-dash motion-reduce:hidden"
            style={{ animationDelay: `${p.delay}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

export function IntegrationsHomeSection() {
  return (
    <HomeSection id="integrations">
      <div className="mx-auto flex max-w-[692px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <Eyebrow>Fits your stack</Eyebrow>
          <SectionTitle className="mt-1">
            Plugs into the tools you <Accent>already use.</Accent>
          </SectionTitle>
          <Lead>
            A lead should never disappear after the first conversation. Move opportunities through clear stages, understand
            what is active or stalled, and give your team a shared view of the pipeline.
          </Lead>
        </div>
        <HomeButton href="/features/integrations" variant="secondary" size="md" arrow>
          Explore All Integrations
        </HomeButton>
      </div>

      {/* Desktop: hub-and-spoke diagram */}
      <div className="relative mx-auto mt-14 hidden aspect-[1200/560] w-full max-w-[1200px] lg:block">
        <Connectors />
        {LEFT.map((n) => (
          <div key={n.name} className="absolute left-0 -translate-y-1/2" style={{ top: `${(n.y / H) * 100}%`, width: `${(NODE_W / W) * 100}%` }}>
            <NodeCard node={n} />
          </div>
        ))}
        {RIGHT.map((n) => (
          <div key={n.name} className="absolute right-0 -translate-y-1/2" style={{ top: `${(n.y / H) * 100}%`, width: `${(NODE_W / W) * 100}%` }}>
            <NodeCard node={n} />
          </div>
        ))}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(HUB.x / W) * 100}%`, top: `${(HUB.y / H) * 100}%` }}>
          <Hub />
        </div>
        <p
          className="absolute -translate-x-1/2 text-lg font-semibold leading-[26px] tracking-[-0.015em] text-white/65"
          style={{ left: `${(HUB.x / W) * 100}%`, top: `${((HUB.y + 85) / H) * 100}%` }}
        >
          +7 more integrations
        </p>
      </div>

      {/* Mobile / tablet: stacked cards around the hub */}
      <div className="mx-auto mt-12 flex max-w-[480px] flex-col items-stretch gap-3 lg:hidden">
        {LEFT.map((n) => (
          <NodeCard key={n.name} node={n} />
        ))}
        <div className="flex flex-col items-center gap-2 py-3">
          <Hub />
          <p className="text-lg font-semibold text-white/65">+7 more integrations</p>
        </div>
        {RIGHT.map((n) => (
          <NodeCard key={n.name} node={n} />
        ))}
      </div>
    </HomeSection>
  );
}
