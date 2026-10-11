import { IndexPage, indexMetadata } from "@/lib/content-pages";

export const metadata = indexMetadata("blog");

export default function ContentIndexPage() {
  return <IndexPage type="blog" />;
}
