import { articlePageFor, metadataFor, staticParamsFor } from "@/lib/content-pages";

const featureStaticParams = staticParamsFor("features");

export const generateStaticParams = () =>
  featureStaticParams().filter(
    (p) => p.slug !== "lead-management" && p.slug !== "pipeline-kanban",
  );
export const generateMetadata = metadataFor("features");
export default articlePageFor("features");
