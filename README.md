# Rohit Kag Portfolio

Personal portfolio for Rohit Kag, focused on AI product engineering, autonomous agents, business automation, and production-grade web applications.

Live: https://rohit-portfolio-brown.vercel.app

## What This Is

This is the public portfolio site for presenting Rohit's work as a founder-builder and AI systems engineer. It showcases projects, skills, experience, contact paths, and a premium interactive frontend.

## Product Surface

| Area | What it does |
| --- | --- |
| Hero | High-impact introduction with motion and particle background |
| Projects | Showcase for AI, SaaS, web, and automation work, with WhatsAI/XeroWA surfaced as the flagship case study |
| Skills | Frontend, backend, AI, deployment, and product skills |
| Experience | Career and project timeline |
| Contact | Direct conversion path for clients and opportunities |
| Resume | Static resume asset served from `public/` |

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js |
| Language | TypeScript |
| Styling | CSS Modules and custom design tokens |
| Motion | Framer Motion, tsParticles |
| Icons | Lucide React |
| UX | Responsive layout, reduced-motion support, scroll animation hooks |

## Local Development

```bash
npm install
npm run dev
```

Build and checks:

```bash
npm run lint
npm run build
```

## Key Files

```text
app/page.tsx                        Main page composition
app/case-studies/whatsai-xerowa/    Flagship WhatsAI / XeroWA case study
components/Hero.tsx                 Hero and first impression
components/Projects.tsx             Project showcase
components/Skills.tsx               Skills surface
components/Experience.tsx           Timeline
components/Contact.tsx              Contact flow
hooks/                              Animation and counter hooks
public/rohit-kag-it-resume.pdf      Current resume download asset
```

## Positioning

The portfolio is designed to support senior AI engineering, founding engineer, and client-facing automation opportunities. It should function as a fast credibility layer before someone opens the deeper project repos.

## Flagship case study

The Projects section leads with **WhatsAI Assistant / XeroWA**, Rohit's WhatsApp-first lead-conversion platform for Indian SMBs. The card highlights the recruiter-relevant proof: webhook ingress, tenant playbooks, Supabase/PostgreSQL persistence, deterministic approved replies, follow-up scheduling, owner handoff, and local proof gates for readiness and keyword-engine behavior.
