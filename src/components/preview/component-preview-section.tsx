type ComponentPreviewSectionProps = {
  children: React.ReactNode;
  description?: string;
  title: string;
};

export function ComponentPreviewSection({
  children,
  description,
  title,
}: ComponentPreviewSectionProps) {
  return (
    <section className="border-border border-t py-12">
      <div className="mb-8 max-w-3xl">
        <h2 className="font-semibold text-4xl text-foreground tracking-normal sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-3 text-base text-muted-foreground leading-7">
            {description}
          </p>
        ) : null}
      </div>

      {children}
    </section>
  );
}
