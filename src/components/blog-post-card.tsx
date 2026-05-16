import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CursorTarget } from "@/components/cursor-tracker";
import type { BlogPost } from "@/content/blog-posts";
import { cn } from "@/lib/utils";

type BlogPostCardProps = {
  className?: string;
  imageClassName?: string;
  post: BlogPost;
  size?: "default" | "featured";
};

export function BlogPostCard({
  className,
  imageClassName,
  post,
  size = "default",
}: BlogPostCardProps) {
  const isFeatured = size === "featured";

  return (
    <article
      className={cn(
        "group min-w-0 overflow-hidden rounded-lg border border-transparent bg-background transition-colors duration-300 hover:border-accent/45",
        className,
      )}
    >
      <CursorTarget
        className="h-full"
        cursorState={{ label: post.title, mode: "arrow" }}
      >
        <Link
          href={`/blog/${post.slug}`}
          className={cn(
            "block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            isFeatured && "lg:grid lg:grid-cols-[1.08fr_0.92fr]",
          )}
        >
          <div
            className={cn(
              "relative aspect-16/7 overflow-hidden bg-surface",
              isFeatured && "aspect-video lg:aspect-auto lg:min-h-104",
              imageClassName,
            )}
          >
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes={
                isFeatured
                  ? "(max-width: 1024px) 100vw, 55vw"
                  : "(max-width: 1024px) 100vw, 50vw"
              }
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-overlay/20 transition-colors duration-300 group-hover:bg-overlay/10" />
          </div>

          <div
            className={cn(
              "flex h-full flex-col p-5 sm:p-6",
              isFeatured && "justify-end sm:p-8 lg:p-10",
            )}
          >
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

            <h3
              className={cn(
                "mt-4 font-semibold text-3xl text-foreground leading-none tracking-normal sm:text-4xl",
                isFeatured && "sm:text-5xl lg:text-6xl",
              )}
            >
              {post.title}
            </h3>
            <p
              className={cn(
                "mt-4 font-inter text-base text-muted-foreground leading-7",
                isFeatured && "max-w-xl text-foreground-muted",
              )}
            >
              {post.description}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 font-inter font-semibold text-accent text-sm">
              Ler artigo
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </Link>
      </CursorTarget>
    </article>
  );
}
