import { IndexPage, indexMetadata } from "@/lib/content-pages";

export const metadata = indexMetadata("usecases");

export default function ContentIndexPage() {
  return <IndexPage type="usecases" />;
}
