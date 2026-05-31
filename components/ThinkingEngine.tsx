"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { decisionJournal } from "@/data/decisionJournal";

type ThinkingEngineProps = {
  data: typeof decisionJournal;
};

export function ThinkingEngine({ data }: ThinkingEngineProps) {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const scenario = data[scenarioIndex];

  const progress = useMemo(
    () => `${scenarioIndex + 1} / ${data.length}`,
    [data.length, scenarioIndex]
  );

  return (
    <section className="section-shell" id="thinking">
      <div className="mx-auto max-w-5xl">
        <p className="kicker">Decision Simulator</p>
        <h2 className="display mt-3 max-w-4xl text-4xl leading-tight sm:text-6xl">
          Step into the interview and choose under constraint.
        </h2>

        <div className="mt-9 overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/54 shadow-soft">
          <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink/52">
              Scenario {progress}
            </p>
            <div className="h-2 w-32 overflow-hidden rounded-full bg-ink/10">
              <motion.div
                animate={{
                  width: `${((scenarioIndex + 1) / data.length) * 100}%`
                }}
                className="h-full rounded-full bg-river"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]"
              exit={{ opacity: 0, y: -14 }}
              initial={{ opacity: 0, y: 14 }}
              key={scenario.id}
              transition={{ duration: 0.35 }}
            >
              <div className="bg-ink p-7 text-paper sm:p-9">
                <p className="text-sm font-semibold text-brass">
                  {scenario.title}
                </p>
                <p className="display mt-5 text-3xl leading-tight">
                  {scenario.context}
                </p>
              </div>

              <div className="p-6 sm:p-8">
                <div className="space-y-3">
                  {scenario.optionsConsidered.map((option) => (
                    <button
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        choice === option
                          ? "border-river bg-river/10"
                          : "border-ink/10 bg-paper/70 hover:border-river/50"
                      }`}
                      key={option}
                      onClick={() => setChoice(option)}
                    >
                      <span className="flex items-center gap-3 text-base font-semibold">
                        {choice === option && <CheckCircle2 size={18} />}
                        {option}
                      </span>
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {choice && (
                    <motion.div
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      className="mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-white p-5 shadow-line"
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      initial={{ opacity: 0, height: 0, y: -10 }}
                    >
                      {[
                        ["Decision Taken", scenario.decision],
                        ["Reasoning", scenario.reasoning],
                        ["Outcome", scenario.outcome],
                        ["Lesson", scenario.lesson]
                      ].map(([label, value]) => (
                        <div className="mb-4 last:mb-0" key={label}>
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-river">
                            {label}
                          </p>
                          <p className="mt-1 leading-7 text-ink/75">
                            {value}
                          </p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-6 flex justify-end">
                  <Button
                    disabled={!choice}
                    onClick={() => {
                      setScenarioIndex((scenarioIndex + 1) % data.length);
                      setChoice(null);
                    }}
                  >
                    Next Scenario
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
