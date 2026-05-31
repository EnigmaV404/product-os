export const caseStudies = [

{
id: "applecare-renewals",

title: "AppleCare Services Renewals",

tagline:
"Creating recurring revenue from an overlooked lifecycle.",

problem:
"Customers purchasing one-year AppleCare Services plans could continue protection beyond the initial period, but no renewal infrastructure existed to support that journey.",

ownership: [
"Purchase lifecycle",
"Renewal lifecycle",
"Cancellation lifecycle",
"Partner coordination",
"Product rollout"
],

outcomes: [
"Created new renewal capability",
"Achieved 6% renewal conversion",
"Established recurring revenue foundation"
],

challenge:
"The biggest challenge was limited visibility into the customer lifecycle and renewal funnel.",

learning:
"My biggest mistake was underestimating the importance of analytics instrumentation.",

futureVersion:
"If rebuilding today, I would prioritize lifecycle analytics, experimentation frameworks, and predictive renewal intelligence."
},

{
id: "applecare-europe",

title: "AppleCare+ Europe",

tagline:
"Scaling subscriptions in compliance-heavy markets.",

problem:
"Launching subscriptions across Europe required solving for delayed payment systems, customer communications, regulatory requirements, and operational readiness.",

ownership: [
"Product requirements",
"Partner collaboration",
"Testing strategy",
"Operational readiness",
"Launch planning",
"Production monitoring"
],

outcomes: [
"Successful multi-market launch",
"Reusable operational patterns",
"Compliant subscription journeys"
],

challenge:
"Understanding SEPA and BACS payment workflows where confirmation occurs days after service activation.",

learning:
"The hardest challenges were organizational rather than technical.",

futureVersion:
"I would build richer operational observability and simulation tooling to reduce uncertainty before launch."
},

{
id: "platform-foundations",

title: "Platform Foundations",

tagline:
"Building leverage through reusable systems.",

problem:
"Many partner requirements looked different but relied on similar underlying capabilities.",

ownership: [
"Renewal infrastructure",
"Payment link infrastructure",
"Plan onboarding platform"
],

outcomes: [
"25-day onboarding reduced to 2 days",
"Reusable infrastructure across programs",
"Reduced operational dependency"
],

challenge:
"Balancing immediate business needs against long-term platform investments.",

learning:
"The best platform products are often invisible because they quietly enable everything else.",

futureVersion:
"Introduce AI-assisted configuration, onboarding agents, and workflow intelligence layers."
}

] as const;
