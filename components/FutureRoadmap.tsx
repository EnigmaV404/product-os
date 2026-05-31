"use client";

import { motion } from "framer-motion";

import { roadmap } from "@/data/roadmap";

type FutureRoadmapProps = {
  data: typeof roadmap;
};

export function FutureRoadmap({ data }: FutureRoadmapProps) {
  const stages = [
    ["Today", data.today, "Current learning loops"],
    ["Next", data.next, "Near-term operating systems"],
    ["Future", data.future, "Longer-range curiosity"]
  ] as const;

  return (
    <section className="section-shell" id="future">
      <div className="mb-10 max-w-3xl">
        <p className="kicker">Future Roadmap</p>
        <h2 className="display mt-3 text-4xl leading-tight sm:text-6xl">
          Not AI expertise. A learning roadmap for the next layer of leverage.
        </h2>
      </div>

      <div className="relative grid gap-5 lg:grid-cols-3">
        {stages.map(([title, items, subtitle], index) => (
          <motion.article
            className="relative rounded-[1.5rem] border border-ink/10 bg-white/55 p-6 shadow-line"
            initial={{ opacity: 0, y: 24 }}
            key={title}
            transition={{ delay: index * 0.12 }}
            viewport={{ once: true, amount: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-river">
                  {subtitle}
                </p>
                <h3 className="display mt-2 text-4xl">{title}</h3>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-bold text-paper">
                {index + 1}
              </div>
            </div>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  className="rounded-2xl border border-ink/10 bg-paper p-4 font-semibold"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
