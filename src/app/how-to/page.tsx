import { IndexPage, indexMetadata } from "@/lib/content-pages";

export const metadata = indexMetadata("how-to");

export default function ContentIndexPage() {
  return <IndexPage type="how-to" />;
}
