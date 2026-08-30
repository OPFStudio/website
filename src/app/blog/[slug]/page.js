import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { defineQuery, PortableText } from "next-sanity";

import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";

const POST_QUERY = defineQuery(/* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "publishedAt": coalesce(publishedAt, _createdAt),
    mainImage {
      asset->{
        _id,
        metadata {
          lqip,
          dimensions
        }
      },
      alt,
      crop,
      hotspot
    },
    author->{
      _id,
      name,
      image {
        asset->{
          _id,
          metadata {
            lqip
          }
        },
        crop,
        hotspot
      }
    },
    categories[]->{
      _id,
      title,
      "slug": slug.current
    },
    body[]{
      ...,
      _type == "image" => {
        asset->{
          _id,
          metadata {
            lqip,
            dimensions
          }
        },
        alt,
        crop,
        hotspot
      }
    }
  }
`);

const POST_METADATA_QUERY = defineQuery(/* groq */ `
  *[_type == "post" && slug.current == $slug][0] {
    title,
    excerpt,
    mainImage {
      asset,
      crop,
      hotspot
    }
  }
`);

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

function PortableTextImage({ value }) {
  if (!value?.asset) return null;

  const lqip = value.asset.metadata?.lqip;

  return (
    <figure className="my-10">
      <Image
        src={urlFor(value).width(1200).height(760).fit("crop").url()}
        alt={value.alt || "Imagen del artículo"}
        width={1200}
        height={760}
        sizes="(min-width: 1024px) 896px, 100vw"
        placeholder={lqip ? "blur" : "empty"}
        blurDataURL={lqip}
        className="w-full rounded-2xl border border-white/10 object-cover"
      />
      {value.alt && (
        <figcaption className="mt-3 text-center text-sm text-slate-400">
          {value.alt}
        </figcaption>
      )}
    </figure>
  );
}

const portableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h2 className="mb-5 mt-12 text-3xl font-bold text-white sm:text-4xl">
        {children}
      </h2>
    ),
    h2: ({ children }) => (
      <h2 className="mb-5 mt-12 text-3xl font-bold text-white">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-4 mt-10 text-2xl font-semibold text-white">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-3 mt-8 text-xl font-semibold text-white">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-lg leading-8 text-slate-300">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-cyan-400 bg-cyan-500/5 px-6 py-4 text-xl italic leading-8 text-slate-200">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: PortableTextImage,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-8 ml-6 list-disc space-y-3 text-lg leading-8 text-slate-300 marker:text-cyan-400">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-8 ml-6 list-decimal space-y-3 text-lg leading-8 text-slate-300 marker:text-cyan-400">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => {
      const href = value?.href;
      if (!href) return children;

      const external = href.startsWith("http");

      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="font-medium text-cyan-400 underline decoration-cyan-400/40 underline-offset-4 transition hover:text-cyan-300"
        >
          {children}
        </a>
      );
    },
  },
};

function removeDuplicateTitle(body, title) {
  if (!Array.isArray(body) || body.length === 0) return [];

  const firstBlock = body[0];
  const firstBlockText = firstBlock?.children
    ?.map((child) => child.text || "")
    .join("")
    .trim();

  if (firstBlock?._type === "block" && firstBlockText === title.trim()) {
    return body.slice(1);
  }

  return body;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_METADATA_QUERY,
    params: { slug },
    stega: false,
  });

  if (!post) return {};

  const metadata = {
    title: `${post.title} | OPF Studio`,
    description: post.excerpt,
  };

  if (post.mainImage) {
    metadata.openGraph = {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [
        {
          url: urlFor(post.mainImage)
            .width(1200)
            .height(630)
            .fit("crop")
            .url(),
          width: 1200,
          height: 630,
        },
      ],
    };
  }

  return metadata;
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
  });

  if (!post) notFound();

  const body = removeDuplicateTitle(post.body, post.title);
  const mainImageLqip = post.mainImage?.asset?.metadata?.lqip;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Volver al blog
        </Link>

        <header className="max-w-4xl">
          {post.categories?.length > 0 && (
            <div className="mb-5 flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300"
                >
                  {category.title}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-6 text-xl leading-8 text-slate-300">
              {post.excerpt}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
            {post.author?.name && (
              <span className="font-medium text-slate-200">
                Por {post.author.name}
              </span>
            )}
            {post.author?.name && <span aria-hidden="true">•</span>}
            <time dateTime={post.publishedAt}>
              {dateFormatter.format(new Date(post.publishedAt))}
            </time>
          </div>
        </header>

        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage)
              .width(1600)
              .height(900)
              .fit("crop")
              .url()}
            alt={post.mainImage.alt || post.title}
            width={1600}
            height={900}
            sizes="(min-width: 1024px) 1024px, 100vw"
            priority
            placeholder={mainImageLqip ? "blur" : "empty"}
            blurDataURL={mainImageLqip}
            className="mt-12 aspect-video w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-black/30"
          />
        )}

        <div className="mx-auto mt-14 max-w-3xl">
          {body.length > 0 ? (
            <PortableText value={body} components={portableTextComponents} />
          ) : (
            <p className="text-lg text-slate-400">
              Este artículo todavía no tiene contenido.
            </p>
          )}
        </div>
      </article>
    </main>
  );
}
