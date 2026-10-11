import { articlePageFor, metadataFor, staticParamsFor } from "@/lib/content-pages";

export const generateStaticParams = staticParamsFor("blog");
export const generateMetadata = metadataFor("blog");
export default articlePageFor("blog");
