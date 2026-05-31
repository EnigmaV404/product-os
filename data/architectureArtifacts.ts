export const architectureArtifacts = [

{
id: "payment-link-platform",

title: "Payment Link Infrastructure",

description:
"Servify-owned abstraction layer built above payment gateways.",

nodes: [

{
id: "customer",
label: "Customer",
type: "entry"
},

{
id: "servify-link",
label: "Servify Payment Link",
type: "core"
},

{
id: "journey",
label: "Standard Checkout Journey",
type: "core"
},

{
id: "analytics",
label: "Analytics Layer",
type: "support"
},

{
id: "communications",
label: "Communication Layer",
type: "support"
},

{
id: "stripe",
label: "Stripe",
type: "gateway"
},

{
id: "razorpay",
label: "Razorpay",
type: "gateway"
},

{
id: "moka",
label: "Moka",
type: "gateway"
},

{
id: "noon",
label: "NoonPay",
type: "gateway"
}
],

edges: [
["customer", "servify-link"],
["servify-link", "journey"],
["journey", "analytics"],
["journey", "communications"],
["journey", "stripe"],
["journey", "razorpay"],
["journey", "moka"],
["journey", "noon"]
],

metrics: {
revenue: "$20M+",
launch: "Jan 2024",
coverage: "Global"
}
},

{
id: "plan-onboarding-platform",

title: "Plan Onboarding Platform",

description:
"Business-owned onboarding replacing engineering-heavy configuration workflows.",

nodes: [

{
id: "partner",
label: "Partner Requirements"
},

{
id: "pm",
label: "Project Manager"
},

{
id: "portal",
label: "Self-Service Portal"
},

{
id: "validation",
label: "Validation Engine"
},

{
id: "preview",
label: "Plan Preview"
},

{
id: "launch",
label: "Launch"
}
],

edges: [
["partner", "pm"],
["pm", "portal"],
["portal", "validation"],
["validation", "preview"],
["preview", "launch"]
],

metrics: {
plans: "1000+",
programs: "25+",
tatReduction: "7-15 Days → 2 Days"
}
},

{
id: "platform-ecosystem",

title: "Revenue Systems Ecosystem",

description:
"How multiple platform investments support business growth.",

nodes: [

{
id: "renewals",
label: "Renewal Infrastructure"
},

{
id: "payments",
label: "Payment Links"
},

{
id: "onboarding",
label: "Plan Onboarding"
},

{
id: "partners",
label: "Partner Programs"
},

{
id: "markets",
label: "Markets"
},

{
id: "revenue",
label: "Revenue"
}
],

edges: [
["onboarding", "partners"],
["partners", "renewals"],
["partners", "payments"],
["renewals", "revenue"],
["payments", "revenue"],
["markets", "partners"]
],

centralInsight:
"Most business outcomes were driven by reusable infrastructure rather than individual features."
}
] as const;
