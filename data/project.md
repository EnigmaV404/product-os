# project.md

## Project Name

Product OS

---

## Goal

Build an interactive portfolio experience that demonstrates how Vatsal thinks, not simply what he has built.

The website should feel like a product created by a Product Manager.

The experience should communicate:

* Systems Thinking
* Business Acumen
* Platform Product Expertise
* Leadership Potential
* Learning Velocity
* AI Curiosity

The website should avoid feeling like:

* Resume
* Portfolio template
* SaaS landing page
* LinkedIn profile

---

# Technical Stack

Mandatory

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* Framer Motion
* GSAP
* React Flow
* ShadCN
* Lucide React

Optional

* Three.js
* Motion One

---

# Performance Requirements

* Lighthouse > 90
* First Load JS < 250KB if possible
* All animations GPU accelerated
* No layout shifts
* Mobile responsive
* Works from 375px to 4K

---

# Folder Structure

/app
/page.tsx

/components

Hero
ProductBrain
ThinkingEngine
BeliefWall
EvolutionJourney
CaseStudyExplorer
PlatformVisualizer
FutureRoadmap
HumanSection
ContactSection

/data

portfolio.ts
beliefs.ts
caseStudies.ts
productBrain.ts

/lib

animations.ts
constants.ts

/public

portrait.webp
resume.pdf

---

# Navigation

Sticky floating navigation.

Sections:

* Home
* Brain
* Thinking
* Work
* Future
* Contact

Hide on downward scroll.

Reveal on upward scroll.

Smooth scrolling.

---

# User Journey

Hero

↓

Product Brain

↓

How I Think

↓

Evolution

↓

Work

↓

Beliefs

↓

Future

↓

Human

↓

Contact

---

# Hero Section

Purpose:

Establish identity.

Height:

100vh

Layout:

Two columns desktop.

Single column mobile.

Left:

Portrait

Right:

Narrative

---

# Hero Copy

Headline:

Most companies add people when complexity grows.

I prefer adding systems.

Subheadline:

Over the last six years I've built products across subscriptions, payments, onboarding, renewals, and partner operations.

The work taught me a simple lesson:

Every recurring problem is a product opportunity.

---

# Hero Animations

Portrait

* Mouse parallax
* Depth effect
* Spotlight follows cursor
* Subtle scale on hover

Headline

* Word by word reveal
* Stagger animation
* 0.08s delay between words

Scroll

* Progress indicator
* Animated arrow

---

# Product Brain Section

Purpose:

Show how Vatsal thinks.

This becomes the centerpiece.

Use React Flow.

---

# Product Brain Nodes

Revenue

Operations

Customer

Engineering

Compliance

Partners

Platform

Experimentation

AI

---

# Node Behaviour

Hover

* Scale 1.1
* Connected edges glow
* Unrelated nodes fade

Click

Open side panel.

Panel width:

480px desktop

100% mobile

---

# Panel Content

Problem

Decision

Outcome

Learning

What I'd do differently today

---

# Product Brain Acceptance Criteria

Users can spend 3 minutes exploring.

Every node reveals unique insights.

No repeated content.

---

# How I Think Section

Purpose:

Simulate product thinking.

---

# Interaction

Show real product scenarios.

Present multiple options.

Example:

Renewal conversion is lower than expected.

What do you investigate first?

Options:

* Discount
* Funnel
* Notifications
* UX

User selects.

Reveal reasoning.

Then reveal actual decision.

---

# Acceptance Criteria

Users understand reasoning process.

Not just outcomes.

---

# Evolution Journey

Purpose:

Visualize growth.

Not titles.

Not promotions.

---

# Stages

Understanding Workflows

↓

Shipping Features

↓

Owning Systems

↓

Driving Outcomes

↓

Designing Future Operating Models

---

# Animation

Horizontal scroll storytelling.

Each stage occupies full viewport.

Pinned section.

GSAP ScrollTrigger.

---

# Case Study Explorer

Purpose:

Interactive storytelling.

No cards.

No accordions.

---

# Case Study 1

AppleCare Renewals

Interactive lifecycle.

Customer Purchase

↓

Coverage End

↓

Renewal Opportunity

↓

Decision Points

↓

Outcome

---

# Case Study 2

AppleCare Europe

Interactive complexity map.

Nodes

* Compliance
* SEPA
* BACS
* Customer Communication
* Operations

Users click layers.

Reveal complexity progressively.

---

# Case Study 3

Platform Foundations

Architecture visualization.

Nodes:

Renewals

Payments

Onboarding

Partners

Markets

Revenue

Animate relationships.

Show reuse.

Show leverage.

---

# Belief Wall

Purpose:

Humanize thinking.

---

# Interaction

Draggable cards.

Physics.

Magnetic hover.

Cards:

Every recurring problem is a product opportunity.

Features create value once.

Capabilities create value repeatedly.

Operations is underrated.

Strategy starts with constraints.

AI changes operating models more than interfaces.

---

# Future Roadmap

Purpose:

Demonstrate ambition.

Not expertise.

---

# Layout

Timeline.

Three columns.

Today

Next

Future

---

# Today

Research

Documentation

Discovery

Prototyping

---

# Next

Operational Copilots

Agentic Onboarding

Workflow Intelligence

---

# Future

Autonomous Operational Systems

AI-Assisted Decision Making

Self-Optimizing Workflows

---

# Human Section

Purpose:

Show personality.

---

# Content

Why Product

What Motivates Me

How I Learn

How I Handle Ambiguity

How I Work With People

---

# Contact Section

Simple.

Elegant.

No forms.

Buttons:

LinkedIn

Email

Resume

---

# Accessibility

Keyboard Navigation

Focus States

Reduced Motion Support

ARIA Labels

Screen Reader Friendly

---

# Final Acceptance Test

If a recruiter leaves understanding:

What Vatsal built

FAIL

If a recruiter leaves understanding:

How Vatsal thinks

PASS