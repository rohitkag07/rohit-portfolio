'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Video, Terminal, Cpu, Database, Globe, Layers, Zap } from 'lucide-react';
import styles from './Skills.module.css';

interface Skill {
    name: string;
    icon?: any;
}

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
            title: 'AI & Automation',
            icon: Brain,
            skills: [
                'Agentic AI Workflows',
                'LLM Integration',
                'AWS & Vercel Deployment',
                'Claude Code'
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
                'Git & GitHub',
                'Java & Web Dev',
                'React & Next.js',
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
