export const workflowArtifacts = [

{
id: "plan-onboarding",

title: "Plan Onboarding Transformation",

before: [
{
step: 1,
title: "Partner Submission",
description:
"Partner shares pricing, benefits, claims information and terms."
},

{
step: 2,
title: "Project Team Intake",
description:
"Business team routes requirements to project managers."
},

{
step: 3,
title: "Jira Creation",
description:
"Project manager creates onboarding request."
},

{
step: 4,
title: "Engineering Configuration",
description:
"Engineering creates SQL insert queries across 600+ configurable parameters."
},

{
step: 5,
title: "QA Validation",
description:
"QA validates configurations and identifies issues."
},

{
step: 6,
title: "Engineering Rework",
description:
"Configuration defects are corrected."
},

{
step: 7,
title: "Environment Promotion",
description:
"Configuration promoted through environments."
},

{
step: 8,
title: "Production Release",
description:
"Plan becomes live."
}
],

after: [
{
step: 1,
title: "Project Manager Creates Plan",
description:
"Business users directly configure plans."
},

{
step: 2,
title: "Rule Validation",
description:
"System validates configuration integrity."
},

{
step: 3,
title: "Preview & Review",
description:
"Users verify expected outputs."
},

{
step: 4,
title: "Launch",
description:
"Configuration becomes production ready."
}
],

metrics: {
beforeTat: "7-15 days",
afterTat: "2 days",
plansOnboarded: "1000+",
partnerPrograms: "25+",
parameters: "600+"
}
},

{
id: "renewals",

title: "AppleCare Services Renewal Lifecycle",

journey: [
"Plan Purchase",
"Coverage Period",
"Renewal Eligibility",
"Customer Communication",
"Renewal Decision",
"Payment Collection",
"Coverage Extension"
],

keyLearning:
"The challenge was not creating a renewal flow. The challenge was understanding why customers renewed or dropped off."
},

{
id: "europe-launch",

title: "AppleCare+ Europe Launch",

journey: [
"Regulatory Review",
"Consent Design",
"Payment Setup",
"SEPA/BACS Handling",
"Partner Validation",
"Market Testing",
"Production Launch"
],

markets: [
"United Kingdom",
"France",
"Spain",
"Italy",
"Ireland"
]
}
] as const;
