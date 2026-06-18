# Portfolio — Henrique Albuquerque

Personal portfolio and lead-generation website for a full-stack developer. Built with Next.js, it showcases services, selected projects with in-depth case studies, blog content, and a contact form — all optimized for performance, SEO, and conversion.

**Live site:** [henriquealbuquerque.dev](https://henriquealbuquerque.dev)

---

## Features

- **Landing page** — Hero, about, services, projects, testimonials, FAQ, blog preview, and contact sections
- **Project case studies** — Dedicated pages for each project with challenge, solution, stack, and visual showcases
- **Blog** — Article listing and individual post pages with structured content
- **Contact form** — Validated submissions delivered via [Resend](https://resend.com)
- **Theme support** — Light and dark mode with system preference detection
- **Smooth scrolling** — Lenis-powered scroll with route-aware restoration
- **Animations** — Scroll-triggered reveals and micro-interactions powered by Motion
- **SEO** — Metadata, Open Graph, Twitter cards, `sitemap.xml`, and `robots.txt`

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com), [Radix UI](https://www.radix-ui.com) |
| Forms | [React Hook Form](https://react-hook-form.com), [Zod](https://zod.dev) |
| Email | [Resend](https://resend.com) |
| Motion | [Motion](https://motion.dev), [Lenis](https://lenis.darkroom.engineering) |
| Tooling | [Bun](https://bun.sh), ESLint |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 20+

### Installation

```bash
git clone https://github.com/SrDev-Henrique/portfolio.git
cd portfolio
bun install
```

### Environment variables

Create a `.env.local` file in the project root:

```env
# Required for the contact form
RESEND_API_KEY=your_resend_api_key

# Optional — used for canonical URLs and Open Graph metadata
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> On Vercel, `NEXT_PUBLIC_SITE_URL` can be omitted; the app falls back to `VERCEL_URL` automatically.

### Development

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
bun run build
bun start
```

## Project Structure

```
src/
├── app/                  # App Router pages and layouts
│   ├── blog/             # Blog listing and post pages
│   ├── projetos/         # Project listing and case study pages
│   ├── sobre-mim/        # About page
│   └── preview/          # Internal component previews
├── actions/              # Server actions (contact email)
├── components/           # UI and section components
│   ├── home/             # Landing page sections
│   ├── site-header/      # Navigation and header
│   └── ui/               # shadcn/ui primitives
├── content/              # Projects and blog post data
└── lib/                  # Shared utilities (SEO, forms, etc.)
```

## Featured Projects

| Project | Description |
| --- | --- |
| [Coimcamp](https://coimcamp.com) | Commercial site for a security and automation company |
| Jaber Seguros | Insurance brokerage platform with lead capture |
| Achadinho Preferido | E-commerce and admin dashboard |
| Arcane | Immersive fan experience for the Arcane universe |

## Scripts

| Command | Description |
| --- | --- |
| `bun dev` | Start the development server |
| `bun run build` | Create a production build |
| `bun start` | Serve the production build |
| `bun run lint` | Run ESLint |

## Deployment

The site is designed to deploy on [Vercel](https://vercel.com). Connect the repository, set the environment variables, and deploy. No additional configuration is required beyond what is defined in `next.config.ts`.

## Author

**Henrique Albuquerque** — Full-stack developer

- Website: [henriquealbuquerque.dev](https://henriquealbuquerque.dev)
- GitHub: [@SrDev-Henrique](https://github.com/SrDev-Henrique)
- Email: [contato@henriquealbuquerque.dev](mailto:contato@henriquealbuquerque.dev)
- WhatsApp: [+55 19 99401-2785](https://wa.me/5519994012785)

---

This is a private portfolio project. All rights reserved.
