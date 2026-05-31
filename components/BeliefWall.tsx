"use client";

import { motion } from "framer-motion";

import { beliefs } from "@/data/beliefs";

type BeliefWallProps = {
  data: typeof beliefs;
};

export function BeliefWall({ data }: BeliefWallProps) {
  return (
    <section className="section-shell overflow-hidden">
      <div className="mb-9 max-w-3xl">
        <p className="kicker">Belief Wall</p>
        <h2 className="display mt-3 text-4xl leading-tight sm:text-6xl">
          Opinions discovered through shipped work.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((belief, index) => (
          <motion.div
            animate={{ opacity: 1, y: 0, rotate: index % 2 ? 1.4 : -1.2 }}
            className="min-h-44 cursor-grab rounded-[1.25rem] border border-ink/10 bg-white/58 p-5 shadow-line active:cursor-grabbing"
            drag
            dragConstraints={{ left: -60, right: 60, top: -40, bottom: 40 }}
            dragElastic={0.25}
            initial={{
              opacity: 0,
              y: 32,
              rotate: index % 2 ? 4 : -4
            }}
            key={belief.id}
            transition={{ delay: index * 0.035, duration: 0.45 }}
            whileHover={{
              scale: 1.04,
              rotate: 0,
              boxShadow: "0 22px 70px rgba(18, 20, 23, 0.16)"
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-river">
              {belief.id}
            </p>
            <p className="display mt-5 text-2xl leading-tight text-ink">
              {belief.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
