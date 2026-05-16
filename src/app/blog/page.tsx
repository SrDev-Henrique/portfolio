import type { Metadata } from "next";
import { BlogPostCard } from "@/components/blog-post-card";
import { Reveal } from "@/components/reveal";
import { getMainBlogPost, getSecondaryBlogPosts } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Henrique Albuquerque",
  description:
    "Insights, tutoriais e ideias sobre sites, webapps, performance, SEO e APIs.",
};

export default function BlogPage() {
  const mainPost = getMainBlogPost();
  const secondaryPosts = getSecondaryBlogPosts();

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <section className="px-5 pt-36 pb-20 sm:px-8 lg:px-12 lg:pt-44 lg:pb-28">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal as="header" className="max-w-5xl">
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              Blog
            </p>
            <h1 className="font-semibold text-6xl leading-none tracking-normal sm:text-8xl lg:text-9xl">
              DEV INSIGHTS & IDEIAS
            </h1>
            <p className="mt-6 max-w-3xl font-inter text-base text-muted-foreground leading-7 sm:text-lg">
              Estratégias, tutoriais e decisões técnicas para criar sites,
              webapps, e-commerce, APIs, SEO e experiências digitais com mais
              clareza, performance e resultado.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-14 lg:mt-18">
            <BlogPostCard post={mainPost} size="featured" />
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:mt-20">
            {secondaryPosts.map((post, index) => (
              <Reveal key={post.slug} delay={0.06} staggerIndex={index}>
                <BlogPostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
