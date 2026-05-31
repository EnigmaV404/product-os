export const decisionJournal = [

{
id: "renewals-measurement",

title: "Shipping Renewals Without Building The Learning System",

context:
"While building AppleCare Services renewals, the primary focus was solving the customer and business problem. Analytics and lifecycle visibility were treated as secondary concerns.",

optionsConsidered: [
"Launch quickly and validate demand",
"Delay launch and build analytics first"
],

decision:
"Launch the renewal capability and iterate later.",

reasoning:
"The business opportunity was immediate and creating a renewal capability was more important than waiting for perfect measurement.",

outcome:
"Renewals launched successfully and generated recurring revenue.",

lesson:
"Every product should ship with a learning system attached. Features without visibility slow future decision making.",

whatIDoToday:
"Instrumentation would be part of the MVP definition rather than a future enhancement."
},

{
id: "payment-link-abstraction",

title: "Owning The Experience Instead Of Delegating To Gateways",

context:
"Different payment gateways had different payment-link capabilities, expiries, journeys, and limitations.",

optionsConsidered: [
"Continue using gateway-native payment links",
"Create a Servify-owned abstraction layer"
],

decision:
"Create a Servify-owned payment-link infrastructure.",

reasoning:
"Customer experience, analytics, and future extensibility should be controlled by Servify rather than individual gateways.",

outcome:
"$20M+ processed through payment links globally across multiple payment providers.",

lesson:
"Owning the orchestration layer creates leverage.",

whatIDoToday:
"Add AI-powered recovery and payment optimization workflows."
},

{
id: "platform-over-customization",

title: "Building Reusable Capabilities Instead Of Partner Features",

context:
"Partner requirements frequently appeared unique but often shared similar patterns.",

optionsConsidered: [
"Deliver partner-specific solutions",
"Create configurable platform capabilities"
],

decision:
"Bias toward platformization whenever feasible.",

reasoning:
"Reusable capabilities create value beyond the immediate project.",

outcome:
"Renewals, onboarding, and payment systems became reusable across multiple programs.",

lesson:
"Most custom requests hide a platform opportunity."
},

{
id: "learn-sql",

title: "Learning SQL Instead Of Waiting For Answers",

context:
"Product decisions increasingly required visibility that wasn't readily available.",

optionsConsidered: [
"Depend on analytics teams",
"Learn enough SQL to answer questions independently"
],

decision:
"Learn SQL and build dashboards.",

reasoning:
"Decision quality improves when visibility improves.",

outcome:
"Faster iteration and stronger understanding of customer journeys.",

lesson:
"A PM's ability to learn often matters more than existing expertise."
},

{
id: "onboarding-platform",

title: "Moving Configuration Ownership Closer To Business Users",

context:
"Plan onboarding relied heavily on engineering teams and SQL-based configurations.",

optionsConsidered: [
"Improve existing process",
"Create a self-service onboarding platform"
],

decision:
"Invest in self-service onboarding.",

reasoning:
"The bottleneck wasn't effort. It was dependency.",

outcome:
"Turnaround reduced from 7-15 days to approximately 2 days.",

lesson:
"Removing dependencies often creates more value than optimizing individual steps."
},

{
id: "europe-launch",

title: "Launching Despite Uncertainty",

context:
"The organization had limited experience operating subscriptions using delayed settlement methods like SEPA and BACS.",

optionsConsidered: [
"Wait until every scenario was known",
"Launch and iterate rapidly"
],

decision:
"Launch with strong monitoring and adaptation.",

reasoning:
"Some learning only happens in production.",

outcome:
"Successful launch across multiple European markets.",

lesson:
"Perfect certainty rarely exists in product management."
},

{
id: "problem-vs-solution",

title: "Refusing Solution Requests",

context:
"Stakeholders frequently arrive with proposed solutions rather than underlying problems.",

optionsConsidered: [
"Accept requested solutions",
"Challenge assumptions and investigate the problem"
],

decision:
"Focus on understanding the problem first.",

reasoning:
"The first solution is rarely the best solution.",

outcome:
"Better long-term product decisions.",

lesson:
"Bad product conversations start with solutions."
}
] as const;
