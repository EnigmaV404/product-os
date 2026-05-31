import dynamic from "next/dynamic";

import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { HumanSection } from "@/components/HumanSection";
import { Navigation } from "@/components/Navigation";
import { architectureArtifacts } from "@/data/architectureArtifacts";
import { beliefs } from "@/data/beliefs";
import { caseStudies } from "@/data/caseStudies";
import { decisionJournal } from "@/data/decisionJournal";
import { evolution } from "@/data/evolution";
import {
  about,
  closingStatement,
  impactMetrics,
  personal,
  profile,
  recruiterSummary,
  workingStyle
} from "@/data/portfolio";
import { brainEdges, brainNodes } from "@/data/productBrain";
import { roadmap } from "@/data/roadmap";
import { workflowArtifacts } from "@/data/workflowArtifacts";

const loadingBlock = (
  <div className="section-shell">
    <div className="h-96 rounded-[1.5rem] border border-ink/10 bg-white/35" />
  </div>
);

const ProductBrain = dynamic(
  () => import("@/components/ProductBrain").then((mod) => mod.ProductBrain),
  { loading: () => loadingBlock }
);
const ThinkingEngine = dynamic(
  () => import("@/components/ThinkingEngine").then((mod) => mod.ThinkingEngine),
  { loading: () => loadingBlock }
);
const EvolutionJourney = dynamic(
  () =>
    import("@/components/EvolutionJourney").then((mod) => mod.EvolutionJourney),
  { loading: () => loadingBlock }
);
const CaseStudyExplorer = dynamic(
  () =>
    import("@/components/CaseStudyExplorer").then(
      (mod) => mod.CaseStudyExplorer
    ),
  { loading: () => loadingBlock }
);
const WorkflowVisualizer = dynamic(
  () =>
    import("@/components/WorkflowVisualizer").then(
      (mod) => mod.WorkflowVisualizer
    ),
  { loading: () => loadingBlock }
);
const ArchitectureVisualizer = dynamic(
  () =>
    import("@/components/ArchitectureVisualizer").then(
      (mod) => mod.ArchitectureVisualizer
    ),
  { loading: () => loadingBlock }
);
const BeliefWall = dynamic(
  () => import("@/components/BeliefWall").then((mod) => mod.BeliefWall),
  { loading: () => loadingBlock }
);
const FutureRoadmap = dynamic(
  () => import("@/components/FutureRoadmap").then((mod) => mod.FutureRoadmap),
  { loading: () => loadingBlock }
);

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero data={profile} metrics={impactMetrics} />
      <ProductBrain edges={brainEdges} nodes={brainNodes} />
      <ThinkingEngine data={decisionJournal} />
      <EvolutionJourney data={evolution} />
      <CaseStudyExplorer
        architecture={architectureArtifacts}
        cases={caseStudies}
        workflows={workflowArtifacts}
      />
      <WorkflowVisualizer data={workflowArtifacts} />
      <ArchitectureVisualizer data={architectureArtifacts} />
      <BeliefWall data={beliefs} />
      <FutureRoadmap data={roadmap} />
      <HumanSection
        aboutData={about}
        personalData={personal}
        recruiterData={recruiterSummary}
        workingStyleData={workingStyle}
      />
      <ContactSection closing={closingStatement} profileData={profile} />
    </main>
  );
}
