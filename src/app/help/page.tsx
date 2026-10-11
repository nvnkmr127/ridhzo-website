import { IndexPage, indexMetadata } from "@/lib/content-pages";

export const metadata = indexMetadata("help");

export default function ContentIndexPage() {
  return <IndexPage type="help" />;
}
