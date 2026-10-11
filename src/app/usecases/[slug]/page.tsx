import { articlePageFor, metadataFor, staticParamsFor } from "@/lib/content-pages";

export const generateStaticParams = staticParamsFor("usecases");
export const generateMetadata = metadataFor("usecases");
export default articlePageFor("usecases");
