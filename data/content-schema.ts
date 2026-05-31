export interface BrainNode {
  id: string;
  title: string;
  problem: string;
  decision: string;
  outcome: string;
  learning: string;
  futureApproach: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  ownership: string[];
  outcomes: string[];
  challenge: string;
  learning: string;
  futureVersion: string;
}

export interface Belief {
  id: string;
  text: string;
}

export interface EvolutionStage {
  id: string;
  title: string;
  period: string;
  headline: string;
  description: string;
  keyShift: string;
}

export interface Roadmap {
  today: string[];
  next: string[];
  future: string[];
}
