import { SanityLive } from "@/sanity/lib/live";

export default function BlogLayout({ children }) {
  return (
    <>
      {children}
      <SanityLive />
    </>
  );
}
