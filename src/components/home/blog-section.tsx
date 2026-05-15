import { BlogPostCard } from "@/components/blog-post-card";
import { PortfolioButton } from "@/components/portfolio-button";
import { Reveal } from "@/components/reveal";
import { getHomeFeaturedBlogPosts } from "@/content/blog-posts";

const featuredPosts = getHomeFeaturedBlogPosts();

export function BlogSection() {
  return (
    <section
      id="blog"
      className="relative scroll-mt-24 overflow-hidden bg-background px-5 py-20 text-foreground sm:scroll-mt-28 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl border-border border-t pt-14 lg:pt-20">
        <Reveal
          as="header"
          className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="mb-5 font-inter font-semibold text-accent text-sm uppercase tracking-normal">
              Blog
            </p>
            <h2 className="max-w-4xl font-semibold text-4xl leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Insights, tutoriais e recursos
            </h2>
          </div>

          <p className="max-w-lg font-inter text-base text-muted-foreground leading-7 lg:text-right">
            conteúdos para ajudar você a planejar, construir e evoluir sua
            presença digital com mais clareza.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredPosts.map((post, index) => (
            <Reveal as="div" key={post.title} delay={0.08} staggerIndex={index}>
              <BlogPostCard post={post} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex justify-center">
          <PortfolioButton
            href="/blog"
            resetScroll
            size="sm"
            variant="outline-green"
          >
            Ver todos os posts
          </PortfolioButton>
        </Reveal>
      </div>
    </section>
  );
}
