"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { workflowArtifacts } from "@/data/workflowArtifacts";

type WorkflowVisualizerProps = {
  data: typeof workflowArtifacts;
};

export function WorkflowVisualizer({ data }: WorkflowVisualizerProps) {
  const transformation = data.find((item) => item.id === "plan-onboarding");
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setShowAfter((current) => !current);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  if (!transformation || !("before" in transformation)) return null;

  const steps = showAfter ? transformation.after : transformation.before;
  const metrics = transformation.metrics;

  return (
    <section className="section-shell">
      <div className="mb-8 max-w-3xl">
        <p className="kicker">Workflow Visualizer</p>
        <h2 className="display mt-3 text-4xl leading-tight sm:text-6xl">
          The strongest product moments make old coordination disappear.
        </h2>
      </div>
      <div className="rounded-[1.5rem] border border-ink/10 bg-ink p-5 text-paper shadow-soft">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="display text-3xl">{transformation.title}</h3>
          <button
            className="rounded-full border border-paper/15 px-4 py-2 text-sm font-bold transition hover:bg-paper/10"
            onClick={() => setShowAfter((current) => !current)}
          >
            {showAfter ? "New workflow" : "Old workflow"}
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_320px]">
          <div className="min-h-[500px] rounded-[1.25rem] bg-paper/5 p-4">
            <AnimatePresence mode="popLayout">
              <motion.div
                className="grid gap-3"
                key={showAfter ? "after" : "before"}
                layout
              >
                {steps.map((step, index) => (
                  <motion.div
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="flex items-center gap-4 rounded-2xl border border-paper/12 bg-paper/8 p-4"
                    exit={{ opacity: 0, scale: 0.94, y: -16 }}
                    initial={{ opacity: 0, scale: 0.96, y: 16 }}
                    key={`${showAfter ? "after" : "before"}-${step.step}`}
                    layout
                    transition={{ delay: index * 0.04 }}
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brass font-bold text-ink">
                      {step.step}
                    </div>
                    <div>
                      <p className="font-bold">{step.title}</p>
                      <p className="mt-1 text-sm leading-6 text-paper/58">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid gap-3">
            {[
              ["TAT", `${metrics.beforeTat} -> ${metrics.afterTat}`],
              ["Plans", metrics.plansOnboarded],
              ["Programs", metrics.partnerPrograms],
              ["Parameters", metrics.parameters]
            ].map(([label, value]) => (
              <div
                className="rounded-2xl border border-paper/12 bg-paper/8 p-5"
                key={label}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brass">
                  {label}
                </p>
                <p className="display mt-2 text-4xl">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
