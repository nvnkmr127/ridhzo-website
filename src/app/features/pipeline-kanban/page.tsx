import { pageMetadata } from "@/lib/metadata";
import { PipelineView } from "@/components/features/PipelineView";

export const metadata = pageMetadata({
  title: "Pipeline Board, Hot Leads & Going Cold",
  description:
    "When a lead changes stage, the whole team sees what moved. Ridhzo's Kanban board organizes opportunities from New to Active to Won, Lost and beyond.",
  path: "/features/pipeline-kanban",
});

export default function PipelinePage() {
  return <PipelineView />;
}

