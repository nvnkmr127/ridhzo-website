import { COMPETITORS } from "@/lib/competitors";
import { ComparePage } from "@/components/compare/ComparePage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Compare Ridhzo",
  description:
    "Honest comparisons of Ridhzo vs Zoho CRM, LeadSquared, Kylas, and AiSensy — see how a mobile-first, WhatsApp-native speed-to-lead CRM stacks up, and which tool fits you.",
  path: "/compare",
});

export default function CompareIndexPage() {
  return <ComparePage competitor={COMPETITORS[0]} />;
}
