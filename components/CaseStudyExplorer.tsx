"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ShieldCheck, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { architectureArtifacts } from "@/data/architectureArtifacts";
import { caseStudies } from "@/data/caseStudies";
import { workflowArtifacts } from "@/data/workflowArtifacts";

type CaseStudyExplorerProps = {
  cases: typeof caseStudies;
  workflows: typeof workflowArtifacts;
  architecture: typeof architectureArtifacts;
};

export function CaseStudyExplorer({
  cases,
  workflows,
  architecture
}: CaseStudyExplorerProps) {
  const [active, setActive] = useState<string>(cases[0]?.id ?? "");
  const selected = cases.find((item) => item.id === active) ?? cases[0];

  return (
    <section className="section-shell" id="work">
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="kicker">Case Study Explorer</p>
          <h2 className="display mt-3 text-4xl leading-tight sm:text-6xl">
            Three products, three different systems of thought.
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {cases.map((study) => (
            <Button
              key={study.id}
              onClick={() => setActive(study.id)}
              size="sm"
              variant={active === study.id ? "default" : "outline"}
            >
              {study.title.replace("AppleCare ", "")}
            </Button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          initial={{ opacity: 0, y: 20 }}
          key={selected.id}
          transition={{ duration: 0.35 }}
        >
          {selected.id === "applecare-renewals" && (
            <RenewalsExperience
              study={selected}
              workflow={workflows.find((item) => item.id === "renewals")}
            />
          )}
          {selected.id === "applecare-europe" && (
            <EuropeExperience
              study={selected}
              workflow={workflows.find((item) => item.id === "europe-launch")}
            />
          )}
          {selected.id === "platform-foundations" && (
            <PlatformExperience
              architecture={architecture.find(
                (item) => item.id === "platform-ecosystem"
              )}
              study={selected}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function RenewalsExperience({
  study,
  workflow
}: {
  study: (typeof caseStudies)[number];
  workflow?: (typeof workflowArtifacts)[number];
}) {
  const journey: readonly string[] =
    workflow && "journey" in workflow ? workflow.journey : [];

  return (
    <div className="rounded-[1.5rem] border border-ink/10 bg-white/50 p-6 shadow-soft">
      <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
        <div>
          <Workflow className="text-river" />
          <h3 className="display mt-4 text-4xl">{study.title}</h3>
          <p className="mt-3 text-lg leading-8 text-ink/68">{study.tagline}</p>
          <p className="mt-6 leading-8 text-ink/72">{study.problem}</p>
        </div>
        <div className="space-y-3">
          {journey.map((step, index) => (
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-4"
              initial={{ opacity: 0, x: -24 }}
              key={step}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-river text-sm font-bold text-paper">
                {index + 1}
              </div>
              <p className="font-semibold text-ink">{step}</p>
              <div className="ml-auto h-1 w-16 overflow-hidden rounded-full bg-ink/10">
                <motion.div
                  animate={{ x: ["-100%", "0%"] }}
                  className="h-full bg-brass"
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EuropeExperience({
  study,
  workflow
}: {
  study: (typeof caseStudies)[number];
  workflow?: (typeof workflowArtifacts)[number];
}) {
  const [layer, setLayer] = useState<string>(study.ownership[0]);
  const markets: readonly string[] =
    workflow && "markets" in workflow ? workflow.markets : [];

  return (
    <div className="grid gap-5 lg:grid-cols-[0.62fr_0.38fr]">
      <div className="relative min-h-[540px] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink p-6 text-paper shadow-soft">
        <ShieldCheck className="text-brass" />
        <h3 className="display mt-4 text-4xl">{study.title}</h3>
        <p className="mt-3 max-w-xl leading-8 text-paper/72">{study.problem}</p>
        <div className="absolute inset-x-6 bottom-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {study.ownership.map((item, index) => (
            <button
              className={`rounded-2xl border p-4 text-left transition ${
                layer === item
                  ? "border-brass bg-brass text-ink"
                  : "border-paper/14 bg-paper/5 hover:bg-paper/10"
              }`}
              key={item}
              onClick={() => setLayer(item)}
              style={{ transform: `translateY(${index % 2 ? 18 : 0}px)` }}
            >
              <p className="text-sm font-bold">{item}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-[1.5rem] border border-ink/10 bg-white/55 p-6 shadow-line">
        <p className="kicker">Active Layer</p>
        <h4 className="display mt-3 text-4xl">{layer}</h4>
        <p className="mt-5 leading-8 text-ink/72">{study.challenge}</p>
        <div className="mt-7">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-ink/46">
            Markets
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {markets.map((market) => (
              <span
                className="rounded-full border border-ink/10 bg-paper px-3 py-1 text-sm font-semibold"
                key={market}
              >
                {market}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformExperience({
  study,
  architecture
}: {
  study: (typeof caseStudies)[number];
  architecture?: (typeof architectureArtifacts)[number];
}) {
  const nodes = architecture?.nodes ?? [];
  const edges = architecture?.edges ?? [];

  return (
    <div className="rounded-[1.5rem] border border-ink/10 bg-white/50 p-6 shadow-soft">
      <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
        <div>
          <Layers className="text-river" />
          <h3 className="display mt-4 text-4xl">{study.title}</h3>
          <p className="mt-3 text-lg leading-8 text-ink/68">{study.tagline}</p>
          <p className="mt-6 leading-8 text-ink/72">{study.futureVersion}</p>
        </div>
        <div className="relative min-h-[440px] rounded-[1.25rem] bg-ink p-5 text-paper">
          {edges.map(([source, target]) => (
            <div
              className="mb-3 rounded-full border border-paper/12 bg-paper/5 px-4 py-2 text-sm text-paper/70"
              key={`${source}-${target}`}
            >
              {nodes.find((node) => node.id === source)?.label} {"->"}{" "}
              {nodes.find((node) => node.id === target)?.label}
            </div>
          ))}
          <div className="absolute bottom-5 right-5 rounded-full bg-brass px-5 py-3 font-bold text-ink">
            {architecture && "centralInsight" in architecture
              ? architecture.centralInsight
              : "Reusable infrastructure creates leverage."}
          </div>
        </div>
      </div>
    </div>
  );
}
