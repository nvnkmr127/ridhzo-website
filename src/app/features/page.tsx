import { IndexPage, indexMetadata } from "@/lib/content-pages";
import { FEATURE_CATEGORIES } from "@/lib/navigation";

export const metadata = indexMetadata("features");

export default function FeaturesIndexPage() {
  return <IndexPage type="features" groups={FEATURE_CATEGORIES} />;
}
