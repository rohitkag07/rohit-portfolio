'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Cloud, Database, Server, Terminal, Zap } from 'lucide-react';
import styles from './Skills.module.css';

import type { LucideIcon } from 'lucide-react';

interface SkillCategory {
    title: string;
    icon: LucideIcon;
    skills: string[];
}

export default function Skills() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const skillCategories: SkillCategory[] = [
        {
            title: 'Frontend Engineering',
            icon: Terminal,
            skills: [
                'React & Next.js App Router',
                'TypeScript & Vite',
                'TailwindCSS & CSS Modules',
                'Dashboards & Admin Panels',
                'Responsive Product UI'
            ]
        },
        {
            title: 'AI & Automation',
            icon: Brain,
            skills: [
                'LLM Workflow Design',
                'Claude / OpenAI / Anthropic SDKs',
                'Agent Routing & Tool Gateways',
                'RAG with Ollama & ChromaDB',
                'SSE / Event-Driven Concepts'
            ]
        },
        {
            title: 'Backend & Data',
            icon: Database,
            skills: [
                'Node.js & Express APIs',
                'FastAPI Services',
                'Supabase Auth & RLS',
                'PostgreSQL & Prisma',
                'SQLite Local Persistence'
            ]
        },
        {
            title: 'Products Built',
            icon: Server,
            skills: [
                'Xero Seven Agency OS',
                'KAG Dealer CRM',
                'X7 Photography OS',
                'X7 RealEstate OS',
                'X7 CA Platform'
            ]
        },
        {
            title: 'Deployment & Tools',
            icon: Cloud,
            skills: [
                'Vercel Deployment',
                'Git & GitHub',
                'Cloud Run-Style Services',
                'Razorpay Foundations',
                'Vitest / Playwright Basics'
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <div className="section-title">
                    <span>Expertise</span>
                    <h2>Core Competencies</h2>
                </div>

                <motion.div
                    ref={sectionRef}
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            variants={itemVariants}
                        >
                            <div className={styles.categoryHeader}>
                                <category.icon className={styles.categoryIcon} />
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill, sIndex) => (
                                    <div key={sIndex} className={styles.skillItem}>
                                        <Zap size={14} className={styles.skillDot} />
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
