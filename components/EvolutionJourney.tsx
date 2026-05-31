"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { evolution } from "@/data/evolution";

type EvolutionJourneyProps = {
  data: typeof evolution;
};

export function EvolutionJourney({ data }: EvolutionJourneyProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -100 * (data.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.8,
          end: () => `+=${window.innerWidth * (data.length - 1)}`
        }
      });
    }, section);

    return () => ctx.revert();
  }, [data.length]);

  return (
    <section
      className="overflow-hidden border-y border-ink/10 bg-ink text-paper"
      id="evolution"
      ref={sectionRef}
    >
      <div className="flex h-screen w-max" ref={trackRef}>
        {data.map((stage, index) => (
          <article
            className="flex h-screen w-screen items-center px-6 sm:px-12 lg:px-[calc((100vw-1180px)/2)]"
            key={stage.id}
          >
            <div className="grid w-full items-center gap-8 lg:grid-cols-[0.35fr_0.65fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">
                  {stage.period}
                </p>
                <p className="display mt-4 text-[8rem] leading-none text-paper/10 sm:text-[12rem]">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div className="max-w-4xl">
                <p className="kicker text-brass">Evolution Journey</p>
                <h2 className="display mt-4 text-5xl leading-none sm:text-7xl">
                  {stage.headline}
                </h2>
                <p className="mt-7 max-w-3xl text-xl leading-9 text-paper/72">
                  {stage.description}
                </p>
                <div className="mt-9 border-l border-brass pl-5">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-paper/48">
                    Key Shift
                  </p>
                  <p className="display mt-2 text-3xl">{stage.keyShift}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
