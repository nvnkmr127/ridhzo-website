import { pageMetadata } from "@/lib/metadata";
import { LeadManagementView } from "@/components/features/LeadManagementView";

export const metadata = pageMetadata({
  title: "Lead Management: Search, Filters & Lead Profile",
  description:
    "One workspace for the details that matter. Find the right record, know who owns it, and take the next step through a call, WhatsApp or meeting.",
  path: "/features/lead-management",
});

export default function LeadManagementPage() {
  return <LeadManagementView />;
}

