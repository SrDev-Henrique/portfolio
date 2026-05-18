import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  getFeaturedBlogPosts,
} from "@/content/blog-posts";
import { createPageMetadata } from "@/lib/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado | Henrique Albuquerque",
    };
  }

  const metadata = createPageMetadata({
    description: post.description,
    image: post.image,
    imageAlt: post.imageAlt,
    path: `/blog/${post.slug}`,
    title: `${post.title} | Henrique Albuquerque`,
    type: "article",
  });

  return {
    ...metadata,
    description: post.description,
    openGraph: {
      ...metadata.openGraph,
      authors: ["Henrique Albuquerque"],
      description: post.description,
      images: [
        {
          alt: post.imageAlt,
          url: post.image,
        },
      ],
      publishedTime: post.dateTime,
      title: post.title,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getFeaturedBlogPosts(post.id);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <article className="px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pt-40 lg:pb-28">
        <div className="mx-auto w-full max-w-5xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-inter font-semibold text-accent text-sm transition-colors hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ArrowLeft className="size-4" />
              Voltar para o blog
            </Link>
          </Reveal>

          <Reveal as="header" className="mt-10" delay={0.08}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="font-inter font-semibold text-accent text-xs uppercase leading-5 tracking-normal">
                {post.tag}
              </span>
              <span className="size-1 rounded-full bg-foreground-placeholder" />
              <time
                className="font-inter text-foreground-subtle text-xs uppercase leading-5 tracking-normal"
                dateTime={post.dateTime}
              >
                {post.date}
              </time>
              <span className="size-1 rounded-full bg-foreground-placeholder" />
              <span className="font-inter text-foreground-subtle text-xs uppercase leading-5 tracking-normal">
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-5 font-semibold text-5xl leading-none tracking-normal sm:text-7xl lg:text-8xl">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl font-inter text-lg text-muted-foreground leading-8">
              {post.description}
            </p>
          </Reveal>

          <Reveal
            className="relative mt-10 aspect-16/8 overflow-hidden rounded-lg border border-border bg-surface shadow-2xl shadow-overlay-strong"
            delay={0.16}
          >
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-overlay/10" />
          </Reveal>

          <div className="mx-auto mt-12 max-w-3xl space-y-12">
            {post.content.map((section, index) => (
              <Reveal
                as="section"
                key={section.heading}
                delay={0.04}
                staggerIndex={index}
              >
                <h2 className="font-semibold text-4xl leading-none tracking-normal sm:text-5xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="font-inter text-base text-foreground-muted leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets ? (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 font-inter text-base text-foreground-muted leading-7"
                      >
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_14px_rgb(var(--accent-rgb)/0.6)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}

            <Reveal
              className="rounded-lg border border-border bg-surface/75 p-6 sm:p-8"
              delay={0.04}
              staggerIndex={post.content.length}
            >
              <h2 className="font-semibold text-3xl leading-none tracking-normal sm:text-4xl">
                Referências
              </h2>
              <ul className="mt-5 space-y-3">
                {post.references.map((reference) => (
                  <li key={reference.href}>
                    <a
                      href={reference.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-inter text-foreground-muted text-sm leading-6 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <span>{reference.label}</span>
                      <ExternalLink className="size-4 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            {relatedPosts.length > 0 ? (
              <Reveal
                className="border-border border-t pt-10"
                delay={0.04}
                staggerIndex={post.content.length + 1}
              >
                <p className="font-inter font-semibold text-accent text-xs uppercase tracking-normal">
                  Continue lendo
                </p>
                <div className="mt-5 grid gap-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="group rounded-lg border border-border bg-surface/75 p-5 transition-colors hover:border-accent/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <h3 className="font-semibold text-3xl leading-none tracking-normal">
                        {relatedPost.title}
                      </h3>
                      <p className="mt-3 font-inter text-muted-foreground text-sm leading-6">
                        {relatedPost.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </article>
    </main>
  );
}
