'use client';

import { ExternalLink, Github, ArrowUpRight, Building2, Camera, Landmark, MessageCircle, Network, ShoppingCart } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { MouseEvent } from 'react';
import type React from 'react';
import styles from './Projects.module.css';

type Project = {
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    features: string[];
    proof?: string[];
    github: string;
    live: string;
    caseStudy: string;
    gradient: string;
    icon: React.ReactNode;
};

export default function Projects() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const projects: Project[] = [
        {
            title: 'WhatsAI Assistant / XeroWA',
            subtitle: 'WhatsApp Lead Conversion Platform',
            description: 'Multi-tenant WhatsApp receptionist for Indian SMBs: approved replies, lead qualification, appointment/site-visit capture, follow-ups, broadcasts, owner handoff, and operator-visible evidence.',
            tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'WhatsApp Cloud API', 'Vercel'],
            features: ['Webhook Ingress', 'Tenant Playbooks', 'Follow-Up Scheduler', 'Owner Handoff'],
            proof: [
                'Built around deterministic business-approved replies, not generic chatbot output.',
                'Local proof gates cover readiness, tenant isolation, RLS/evidence paths, and keyword-engine behavior.'
            ],
            github: 'https://github.com/rohitkag07/whatsai-assistant',
            live: 'https://landing-iota-lemon.vercel.app/',
            caseStudy: '/case-studies/whatsai-xerowa',
            gradient: 'linear-gradient(135deg, #22c55e 0%, #059669 100%)',
            icon: <MessageCircle size={24} />
        },
        {
            title: 'Xero Seven',
            subtitle: 'AI Agency OS',
            description: 'Public website and protected operations dashboard for an AI automation agency, with lead, client, project, proposal, analytics, live AI demo, and agent activity surfaces.',
            tech: ['React', 'Vite', 'TypeScript', 'InsForge', 'Zustand', 'Vercel'],
            features: ['Live AI Demo', 'Auth Dashboard', 'Realtime Hooks', 'Agent Endpoints'],
            github: 'https://github.com/rohitkag07/xero-seven',
            live: 'https://xero-seven.vercel.app',
            caseStudy: 'https://xero-seven.vercel.app',
            gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
            icon: <Network size={24} />
        },
        {
            title: 'KAG Batteries Digital Suite',
            subtitle: 'B2B Website + Dealer CRM',
            description: 'Business digitization suite with public product catalogue, dealer inquiry, restricted dealer CRM, order/payment tracking, Supabase Auth, RLS, and analytics dashboards.',
            tech: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Recharts', 'Vercel'],
            features: ['17 Product Pages', 'Dealer CRM', 'RLS Policies', 'WhatsApp CTA'],
            github: 'https://github.com/rohitkag07/kag-batteries-dealer-crm',
            live: 'https://www.kagbatteries.in',
            caseStudy: 'https://www.kagbatteries.in',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            icon: <ShoppingCart size={24} />
        },
        {
            title: 'X7 Photography OS',
            subtitle: 'Studio CRM + Guest Delivery',
            description: 'Full-stack operating system for photographers covering CRM, bookings, editing workflow, client galleries, QR/selfie-based guest photo matching, uploads, albums, and revenue flows.',
            tech: ['Next.js', 'TypeScript', 'Supabase', 'Express', 'Zod', 'Agent Services'],
            features: ['Studio Dashboard', 'Guest Portal', 'Client Portal', 'Camera Uploader'],
            github: 'https://github.com/rohitkag07/x7-photography',
            live: 'https://x7-dashboard.vercel.app',
            caseStudy: 'https://x7-dashboard.vercel.app',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
            icon: <Camera size={24} />
        },
        {
            title: 'X7 RealEstate OS',
            subtitle: 'Builder Sales + Colony Ops',
            description: 'Builder operating system for Tier 2 real-estate businesses with lead qualification, site visits, bookings, campaign operations, colony management, and agent orchestration.',
            tech: ['Next.js', 'TypeScript', 'Supabase', 'React Query', 'Express', 'Prisma'],
            features: ['Lead CRM', 'Site Visits', 'Agent Mesh', 'Colony Operations'],
            github: 'https://github.com/rohitkag07/x7-realestate-os',
            live: 'https://x7-realestate-os.vercel.app',
            caseStudy: 'https://x7-realestate-os.vercel.app',
            gradient: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
            icon: <Building2 size={24} />
        },
        {
            title: 'X7 CA Platform',
            subtitle: 'Local AI/RAG for CA Firms',
            description: 'On-premise AI automation platform for Indian CA firms with local RAG, Ollama, ChromaDB, PostgreSQL tenant isolation, document ingestion, and React/Vite demo shell.',
            tech: ['Python', 'FastAPI', 'React', 'Vite', 'PostgreSQL', 'ChromaDB'],
            features: ['Local AI', 'RAG Engine', 'Tenant Isolation', 'Demo Scenarios'],
            github: 'https://github.com/rohitkag07/x7-ca-platform',
            live: '#',
            caseStudy: 'https://github.com/rohitkag07/x7-ca-platform',
            gradient: 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
            icon: <Landmark size={24} />
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-title">
                    <span>Portfolio</span>
                    <h2>Technical Projects</h2>
                </div>

                <div ref={sectionRef} className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            index={index}
                            inView={sectionInView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index, inView }: { project: Project; index: number; inView: boolean }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className={styles.projectCard}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className={styles.spotlight}
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            450px circle at ${mouseX}px ${mouseY}px,
                            rgba(99, 102, 241, 0.1),
                            transparent 80%
                        )
                    `
                }}
            />

            <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} style={{ background: project.gradient }}>
                    {project.icon}
                </div>
                <div className={styles.titleArea}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <span className={styles.projectSubtitle}>{project.subtitle}</span>
                </div>
            </div>

            <p className={styles.projectDescription}>{project.description}</p>

            {project.proof && (
                <ul className={styles.proofList}>
                    {project.proof.map((point, proofIndex) => (
                        <li key={proofIndex}>{point}</li>
                    ))}
                </ul>
            )}

            <div className={styles.techStack}>
                {project.tech.map((tech: string, techIndex: number) => (
                    <span key={techIndex} className={styles.techTag}>
                        {tech}
                    </span>
                ))}
            </div>

            <div className={styles.footer}>
                <div className={styles.projectLinks}>
                    {project.github !== '#' && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkIcon}
                            whileHover={{ y: -3, color: 'var(--color-accent-primary)' }}
                            aria-label={`${project.title} GitHub`}
                        >
                            <Github size={20} />
                        </motion.a>
                    )}
                    {project.live !== '#' && (
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkIcon}
                            whileHover={{ y: -3, color: 'var(--color-accent-primary)' }}
                            aria-label={`${project.title} live site`}
                        >
                            <ExternalLink size={20} />
                        </motion.a>
                    )}
                </div>
                <motion.a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.detailsBtn}
                    whileHover={{ x: 5 }}
                >
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} />
                </motion.a>
            </div>
        </motion.div>
    );
}
