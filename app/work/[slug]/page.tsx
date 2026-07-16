import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — Yusuf Hasan` : "Yusuf Hasan" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-6 md:px-12">
        <Link href="/" className="label link-line">Yusuf Hasan</Link>
        <Link href="/#work" className="label link-line">← All work</Link>
      </header>

      <article className="mx-auto max-w-[1100px] px-6 pb-28 md:px-12">
        {/* Title block */}
        <div className="border-b hairline pb-10 pt-10 md:pt-16">
          <p className="font-display text-6xl text-[--caption] md:text-7xl">{project.numeral}</p>
          <h1 className="font-display mt-4 text-4xl leading-tight md:text-6xl">{project.title}</h1>
          <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
            <p className="label max-w-xl">{project.medium}</p>
            <p className="label">{project.year}</p>
          </div>
        </div>

        {/* Sections */}
        {project.sections.map((s) => (
          <section key={s.heading} className="border-b hairline py-12 md:py-16">
            <div className="grid gap-8 md:grid-cols-12">
              <h2 className="font-display text-2xl md:col-span-4 md:text-3xl">{s.heading}</h2>
              <div className="space-y-6 md:col-span-8">
                {s.paragraphs?.map((p) => (
                  <p key={p.slice(0, 32)} className="text-sm leading-relaxed text-neutral-600">{p}</p>
                ))}
                {s.bullets && (
                  <ul className="space-y-3">
                    {s.bullets.map((b) => (
                      <li key={b.slice(0, 32)} className="flex gap-4 text-sm leading-relaxed text-neutral-600">
                        <span className="label mt-1 shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.table && (
                  <table className="w-full border hairline text-sm">
                    <thead>
                      <tr className="border-b hairline bg-white">
                        {s.table.header.map((h) => (
                          <th key={h} className="label px-4 py-3 text-left !normal-case !tracking-normal font-medium">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map(([k, v]) => (
                        <tr key={k} className="border-b hairline last:border-b-0">
                          <td className="px-4 py-3 text-neutral-600">{k}</td>
                          <td className="px-4 py-3 font-medium">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {s.images && (
                  <div className={`grid gap-6 ${s.images.length > 1 ? "sm:grid-cols-2" : ""}`}>
                    {s.images.map((img) => (
                      <figure key={img.src}>
                        <div className="overflow-hidden border hairline bg-white">
                          <Image
                            src={`${BASE}${img.src}`}
                            alt={img.alt}
                            width={1200}
                            height={800}
                            className="h-auto w-full object-contain"
                          />
                        </div>
                        {img.caption && <figcaption className="label mt-3">{img.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                )}
                {s.video && (
                  <figure>
                    <video controls playsInline className="w-full border hairline bg-white" preload="metadata">
                      <source src={`${BASE}${s.video.src}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <figcaption className="label mt-3">{s.video.caption}</figcaption>
                  </figure>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* Footer nav */}
        <div className="flex items-center justify-between pt-12">
          <Link href="/#work" className="label link-line">← All work</Link>
          <a href="mailto:yusuf.zeaul.hasan@gmail.com" className="label link-line">Get in touch</a>
        </div>
      </article>
    </main>
  );
}
