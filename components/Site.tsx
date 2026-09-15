"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { projects } from "@/lib/projects";

/* Prefix for static assets — set to "/portfolio" when deploying to GitHub Pages */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/* ------------------------------------------------------------------ */
/* Motion helper                                                       */
/* ------------------------------------------------------------------ */
function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Content — factual, sourced from resume                              */
/* ------------------------------------------------------------------ */
const experience = [
  {
    role: "Software Development Engineer Intern",
    org: "Amazon",
    place: "Vancouver",
    time: "Jun – Aug 2026",
    body:
      "Sole engineer on a full-stack self-service configuration platform: Smithy-defined API, Java on AWS Lambda, a React + TypeScript SPA, and AWS CDK infrastructure — ~64 ms reads against a 500 ms SLO, 99+ tests.",
  },
  {
    role: "Undergraduate Research Assistant",
    org: "Radio Science Laboratory, UBC",
    place: "Vancouver",
    time: "Jan – Apr 2026",
    body:
      "WSPR transmitters for long-range HF propagation experiments, including payload deployments aboard maritime platforms for ionospheric studies.",
  },
  {
    role: "Hardware Pre-Development Intern",
    org: "Robert Bosch GmbH",
    place: "Reutlingen, Germany",
    time: "Jun 2024 – Apr 2025",
    body:
      "STM32-based test PCBs, C firmware, and measurement methodology for characterizing next-generation MEMS inertial sensors — including offset g-sensitivity of gyroscopes via a modified rate-table approach.",
  },
  {
    role: "Automation Intern",
    org: "Inter Pipeline",
    place: "Calgary",
    time: "May – Aug 2023",
    body:
      "Service-desk automation and a generative-AI chatbot on Azure, projected to save $150,000 per year.",
  },
];

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */
function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-[#faf9f6]">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-12">
        <a href="#top" className="label !text-current link-line">Yusuf Hasan</a>
        <div className="flex gap-8">
          {[
            ["Experience", "#experience"],
            ["Work", "#work"],
            ["Contact", "#contact"],
          ].map(([t, h]) => (
            <a key={h} href={h} className="label !text-current link-line">{t}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

const heroIndex = [
  { num: "01", label: "Experience", href: "#experience" },
  { num: "02", label: "Selected Work", href: "#work" },
  { num: "03", label: "Contact", href: "#contact" },
];

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="relative min-h-screen">
      <div className="mx-auto grid min-h-screen max-w-[1400px] items-center gap-12 px-6 pb-16 pt-28 md:grid-cols-12 md:gap-10 md:px-12">
        {/* Left — name, intro, contact, index */}
        <div className="md:col-span-6 lg:col-span-6">
          <motion.p
            className="label mb-6"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Electrical Engineer — Vancouver, BC
          </motion.p>
          <h1 className="font-display text-[15vw] leading-[0.82] tracking-[-0.02em] md:text-[7.5rem] lg:text-[8.5rem]">
            {["YUSUF", "HASAN"].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="mt-7 max-w-md text-sm leading-relaxed text-neutral-600"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
          >
            Embedded systems, sensor fusion, robotics, and software — from MEMS
            inertial sensors at Bosch to full-stack platforms at Amazon.
            UBC Electrical Engineering, class of 2026.
          </motion.p>

          {/* Contact + résumé, visible immediately */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75 }}
          >
            <a
              href={`${BASE}/assets/Yusuf_Hasan_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="label border border-[--ink] bg-[--ink] px-5 py-3 !text-[--paper] transition-colors duration-300 hover:bg-transparent hover:!text-[--ink]"
            >
              Résumé — PDF
            </a>
            <a className="label link-line" href="mailto:yusuf.zeaul.hasan@gmail.com">Email</a>
            <a className="label link-line" href="https://www.linkedin.com/in/yusuf-hasan-ab8186279/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </motion.div>

          {/* Index — the site's table of contents */}
          <motion.nav
            aria-label="Site index"
            className="mt-10 border-t hairline"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            {heroIndex.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="group flex items-baseline justify-between border-b hairline py-4"
              >
                <span className="flex items-baseline gap-5">
                  <span className="label">{item.num}</span>
                  <span className="font-display text-2xl transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-3xl">
                    {item.label}
                  </span>
                </span>
                <span className="label transition-transform duration-500 ease-out group-hover:translate-x-2">↓</span>
              </a>
            ))}
          </motion.nav>
        </div>

        {/* Right — capstone showcase photo */}
        <motion.figure
          className="md:col-span-6"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden border hairline bg-white">
            <Image
              src={`${BASE}/images/capstone-team.jpg`}
              alt="The PL-206 capstone team beside the Multi-Sensor Fusion poster at the UBC showcase — Yusuf on the far left"
              width={2880}
              height={2160}
              priority
              className="h-auto w-full object-contain"
            />
            {/* Arrow pointing me out */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 75"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <marker id="me-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#0b0b0b" />
                </marker>
              </defs>
              <path
                d="M 29 11 Q 15.5 9 14 25"
                fill="none"
                stroke="#0b0b0b"
                strokeWidth="0.6"
                markerEnd="url(#me-arrow)"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <span
              className="label absolute border hairline bg-[#faf9f6] px-2 py-1 !text-[--ink]"
              style={{ left: "30%", top: "10%" }}
            >
              Me
            </span>
          </div>
          <figcaption className="label mt-4 flex justify-between gap-4">
            <span>PL-206 — Multi-Sensor Fusion for Indoor Positioning</span>
            <span className="hidden sm:block">UBC × Bosch capstone showcase</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <Reveal>
        <div className="mb-20 flex items-end justify-between border-b hairline pb-6">
          <h2 className="font-display text-5xl md:text-7xl">Selected Work</h2>
          <span className="label hidden md:block">Five plates</span>
        </div>
      </Reveal>
      <div className="space-y-28 md:space-y-36">
        {projects.map((w, i) => (
          <Reveal key={w.numeral} delay={0.05}>
            <article className={`grid items-start gap-10 md:grid-cols-12 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="md:col-span-5">
                <p className="font-display text-6xl text-[--caption] md:text-8xl">{w.numeral}</p>
                <h3 className="font-display mt-4 text-3xl md:text-4xl">
                  <Link href={`/work/${w.slug}`} className="link-line">{w.title}</Link>
                </h3>
                <p className="label mt-4">{w.medium}</p>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600">{w.summary}</p>
                <div className="mt-6 flex items-baseline gap-8">
                  <p className="label">{w.year}</p>
                  <Link href={`/work/${w.slug}`} className="label link-line">
                    Case study →
                  </Link>
                </div>
              </div>
              <div className="md:col-span-7">
                <Link href={`/work/${w.slug}`} aria-label={`${w.title} — case study`}>
                  {w.plateImage ? (
                    <motion.div
                      className="overflow-hidden border hairline bg-white"
                      whileHover={{ scale: 0.985 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Image
                        src={`${BASE}${w.plateImage}`}
                        alt={w.plateAlt}
                        width={1200}
                        height={800}
                        className="h-auto w-full object-contain grayscale transition duration-700 hover:grayscale-0"
                      />
                    </motion.div>
                  ) : (
                    <div className="flex aspect-[3/2] items-center justify-center border hairline bg-white">
                      <span className="font-display text-2xl italic text-[--caption]">{w.platePlaceholder}</span>
                    </div>
                  )}
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="bg-[--ink] text-[--paper]">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <Reveal>
          <h2 className="font-display mb-20 text-5xl md:text-7xl">Experience</h2>
        </Reveal>
        <div className="divide-y divide-white/15 border-y border-white/15">
          {experience.map((e) => (
            <Reveal key={e.org}>
              <div className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
                <p className="label !text-white/50 md:col-span-2">{e.time}</p>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl md:text-3xl">{e.org}</h3>
                  <p className="label mt-2 !text-white/50">{e.role} — {e.place}</p>
                </div>
                <p className="text-sm leading-relaxed text-white/70 md:col-span-6">{e.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="label mt-16 !text-white/40">
            Also: Applied AI Developer, UBC AgroBot — Faster R-CNN weed detection, 2023–24
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
      <Reveal>
        <p className="label mb-8">Get in touch</p>
        <a
          href="mailto:yusuf.zeaul.hasan@gmail.com"
          className="font-display link-line inline-block text-[9vw] leading-none tracking-tight md:text-8xl"
        >
          Let&rsquo;s build.
        </a>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t hairline pt-8">
          <div className="flex gap-8">
            <a className="label link-line" href="mailto:yusuf.zeaul.hasan@gmail.com">Email</a>
            <a className="label link-line" href="https://www.linkedin.com/in/yusuf-hasan-ab8186279/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="label link-line" href={`${BASE}/assets/Yusuf_Hasan_Resume.pdf`} target="_blank" rel="noopener noreferrer">Résumé</a>
          </div>
          <p className="label">Vancouver, BC — {new Date().getFullYear()}</p>
        </div>
      </Reveal>
    </footer>
  );
}

export default function Site() {
  return (
    <main>
      <Nav />
      <Hero />
      <Experience />
      <Work />
      <Footer />
    </main>
  );
}
