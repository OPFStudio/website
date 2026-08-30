import Image from "next/image";
import Link from "next/link";
import { defineQuery } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";

export const POSTS_QUERY = defineQuery(/* groq */ `
  *[
    _type == "post" &&
    defined(slug.current)
  ]
  | order(coalesce(publishedAt, _createdAt) desc, _id asc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "publishedAt": coalesce(publishedAt, _createdAt),
    mainImage {
      asset,
      alt,
      crop,
      hotspot
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current
    }
  }
`);

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export const metadata = {
  title: "Blog | OPF Studio",
  description:
    "Artículos sobre sistemas eléctricos de potencia, mercados eléctricos y transición energética.",
};

export default async function BlogPage() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <header className="mb-12 max-w-3xl">
          <p className="mb-3 font-semibold tracking-wider text-cyan-400">
            BLOG
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Sistemas eléctricos de potencia
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Análisis y artículos técnicos sobre operación, planeación,
            mercados eléctricos y transición energética.
          </p>
        </header>

        {posts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold">
              Todavía no hay artículos publicados
            </h2>
            <p className="mt-2 text-slate-400">
              Crea y publica el primer artículo desde Sanity Studio.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post._id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition hover:border-cyan-500/50"
              >
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage)
                      .width(900)
                      .height(520)
                      .fit("crop")
                      .url()}
                    alt={post.mainImage.alt || post.title}
                    width={900}
                    height={520}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="aspect-video w-full object-cover"
                  />
                )}

                <div className="p-6">
                  {post.categories?.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <span
                          key={category._id}
                          className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-sm text-slate-400">
                    {dateFormatter.format(new Date(post.publishedAt))}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-cyan-400"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {post.excerpt && (
                    <p className="mt-3 line-clamp-3 leading-7 text-slate-300">
                      {post.excerpt}
                    </p>
                  )}

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Leer artículo →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
