export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Brain", href: "#brain" },
  { label: "Thinking", href: "#thinking" },
  { label: "Work", href: "#work" },
  { label: "Future", href: "#future" },
  { label: "Contact", href: "#contact" }
] as const;

export const sectionKicker = {
  brain: "Product Brain",
  thinking: "Decision Simulator",
  evolution: "Evolution Journey",
  work: "Case Study Explorer",
  workflow: "Workflow Visualizer",
  architecture: "Architecture Visualizer",
  beliefs: "Belief Wall",
  future: "Future Roadmap"
} as const;
