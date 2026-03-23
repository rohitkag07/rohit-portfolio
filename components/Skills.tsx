'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Video, Terminal, Cpu, Database, Zap } from 'lucide-react';
import styles from './Skills.module.css';

interface SkillCategory {
    title: string;
    icon: any;
    skills: string[];
}

export default function Skills() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const skillCategories: SkillCategory[] = [
        {
            title: 'Multi-Agent Systems',
            icon: Cpu,
            skills: [
                'Google Agent Dev Kit (ADK)',
                'Agent-to-Agent (A2A) Protocol',
                'Model Context Protocol (MCP)',
                'Orchestrator & Specialist Agents',
                'Interceptor Pattern & Callbacks'
            ]
        },
        {
            title: 'AI & Automation',
            icon: Brain,
            skills: [
                'Agentic AI Workflows',
                'LLM Integration & Claude API',
                'Sequential / Parallel / Loop Agents',
                'Stateful Agent Memory',
                'Claude Code & AWS Deployment'
            ]
        },
        {
            title: 'Cloud & Infrastructure',
            icon: Database,
            skills: [
                'Google Cloud Run & Cloud Build',
                'Cloud SQL (PostgreSQL)',
                'Docker & Artifact Registry',
                'Secret Manager & IAM',
                'Serverless Microservices'
            ]
        },
        {
            title: 'Content Creation',
            icon: Video,
            skills: [
                'Kling AI & HeyGen',
                'ElevenLabs Voice',
                'Video Production',
                'Digital Marketing'
            ]
        },
        {
            title: 'Technical Stack',
            icon: Terminal,
            skills: [
                'React & Next.js',
                'Git & GitHub',
                'Java & Web Dev',
                'API Integration'
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
