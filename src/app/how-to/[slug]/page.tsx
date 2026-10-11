import { articlePageFor, metadataFor, staticParamsFor } from "@/lib/content-pages";

export const generateStaticParams = staticParamsFor("how-to");
export const generateMetadata = metadataFor("how-to");
export default articlePageFor("how-to");
