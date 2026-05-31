export const brainNodes = [
  {
    id: "revenue",
    title: "Revenue",
    problem:
      "Customers purchasing one-year AppleCare Services plans had no structured renewal capability despite being eligible for extended protection.",
    decision:
      "Build a complete renewal lifecycle instead of treating renewal as a one-off communication problem.",
    outcome:
      "Created a new recurring revenue capability and achieved approximately 6% renewal conversion.",
    learning:
      "Analytics should have been treated as a first-class capability from day one.",
    futureApproach:
      "If rebuilding today I would instrument the entire lifecycle, run structured experiments, and focus on increasing visibility before optimization."
  },
  {
    id: "operations",
    title: "Operations",
    problem:
      "Plan onboarding depended heavily on manual coordination between teams, creating significant delays.",
    decision:
      "Convert onboarding from a service process into a self-serve platform capability.",
    outcome:
      "Reduced onboarding turnaround time from approximately 25 days to 2 days.",
    learning:
      "Operational bottlenecks often hide larger platform opportunities.",
    futureApproach:
      "Use AI agents to guide onboarding workflows, validate configurations, and reduce operational involvement further."
  },
  {
    id: "platform",
    title: "Platform",
    problem:
      "Partner requirements frequently appeared unique but shared common patterns beneath the surface.",
    decision:
      "Invest in reusable capabilities rather than partner-specific implementations.",
    outcome:
      "Created long-term infrastructure supporting multiple programs and business initiatives.",
    learning: "Platform investments take longer to justify but compound for years.",
    futureApproach:
      "Design systems that become increasingly configurable through AI-assisted workflows."
  },
  {
    id: "customer",
    title: "Customer",
    problem:
      "Customer journeys often became fragmented because business processes were not designed around lifecycle continuity.",
    decision:
      "Focus on complete lifecycle ownership instead of individual transactions.",
    outcome:
      "Improved retention opportunities and customer continuity across products.",
    learning:
      "Customers experience journeys while organizations experience processes.",
    futureApproach:
      "Create lifecycle intelligence capable of identifying customer needs before customers express them."
  },
  {
    id: "engineering",
    title: "Engineering",
    problem:
      "Business teams often requested custom solutions for individual partner requirements.",
    decision:
      "Work closely with engineering to identify abstraction opportunities.",
    outcome: "Reduced long-term complexity and improved scalability.",
    learning: "Good abstractions create disproportionate leverage.",
    futureApproach:
      "Leverage AI-assisted development to prototype abstractions faster."
  },
  {
    id: "compliance",
    title: "Compliance",
    problem:
      "European insurance products introduced significant consent, notification, and regulatory requirements.",
    decision:
      "Design compliance as part of the customer experience rather than an external constraint.",
    outcome: "Successful AppleCare+ launches across multiple European markets.",
    learning:
      "Compliance is often a product design challenge disguised as a legal requirement.",
    futureApproach:
      "Use intelligent systems to proactively validate compliance workflows."
  },
  {
    id: "partners",
    title: "Partners",
    problem:
      "Global partners often operate with different assumptions, timelines, and expectations.",
    decision: "Invest heavily in alignment, testing, and communication.",
    outcome: "Successful international launches and stronger execution quality.",
    learning: "Many product failures are coordination failures.",
    futureApproach:
      "Create shared operational visibility through intelligent partner tooling."
  },
  {
    id: "experimentation",
    title: "Experimentation",
    problem: "Teams often optimize solutions before understanding user behavior.",
    decision: "Use data and iteration to reduce uncertainty.",
    outcome: "Improved decision quality across product initiatives.",
    learning: "The fastest path to a solution is often through better questions.",
    futureApproach:
      "Use AI to generate hypotheses and accelerate learning cycles."
  },
  {
    id: "ai",
    title: "AI",
    problem:
      "Many operational workflows still depend on repetitive human decision making.",
    decision:
      "Invest time learning how AI can improve product discovery, documentation, and workflow automation.",
    outcome:
      "Faster execution and clearer understanding of future product opportunities.",
    learning:
      "AI is most powerful when embedded into workflows rather than added as a feature.",
    futureApproach:
      "Build systems where AI becomes an operational participant instead of a passive tool."
  }
] as const;

export const brainEdges = [
  ["platform", "operations"],
  ["platform", "engineering"],
  ["platform", "partners"],
  ["revenue", "customer"],
  ["revenue", "experimentation"],
  ["operations", "engineering"],
  ["customer", "compliance"],
  ["partners", "compliance"],
  ["ai", "operations"],
  ["ai", "experimentation"],
  ["ai", "platform"],
  ["partners", "revenue"]
] as const;
