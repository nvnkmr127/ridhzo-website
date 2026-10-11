import { articlePageFor, metadataFor, staticParamsFor } from "@/lib/content-pages";

export const generateStaticParams = staticParamsFor("help");
export const generateMetadata = metadataFor("help");
export default articlePageFor("help");
