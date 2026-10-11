import { articlePageFor, metadataFor, staticParamsFor } from "@/lib/content-pages";

export const generateStaticParams = staticParamsFor("features");
export const generateMetadata = metadataFor("features");
export default articlePageFor("features");
