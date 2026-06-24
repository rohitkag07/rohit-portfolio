'use client';

import { Briefcase, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Experience.module.css';

export default function Experience() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const experiences = [
        {
            role: 'AI Product Developer / Founder-Builder',
            company: 'Self-Initiated Product Builds',
            period: '2023 - Present',
            location: 'Indore, India',
            description: 'Built practical full-stack products and AI automation workflows for Indian business operations.',
            achievements: [
                'Built Xero Seven, KAG Batteries Digital Suite, X7 Photography OS, X7 RealEstate OS, and X7 CA Platform',
                'Developed React/Next.js products, Supabase/Prisma dashboards, Express/FastAPI services, and Vercel deployments',
                'Designed AI workflow architectures using LLM APIs, local Ollama, ChromaDB, agent routing, and tool-gateway patterns'
            ]
        },
        {
            role: 'Business Workflow Digitization',
            company: 'Xero Seven Product Portfolio',
            period: '2023 - Present',
            location: 'Indore, India',
            description: 'Converted offline business processes into working software systems.',
            achievements: [
                'Built dealer CRM, product catalogue, order/payment tracking, and analytics surfaces for KAG Batteries',
                'Designed studio CRM, guest portal, client portal, and QR/selfie-based delivery flows for photography studios',
                'Created real-estate builder CRM and CA firm local AI/RAG architecture'
            ]
        },
        {
            role: 'Generative AI Content Creation',
            company: 'Freelance & Project Based',
            period: '2023 - Present',
            location: 'Remote',
            description: 'Leveraging cutting-edge AI for high-end digital media production.',
            achievements: [
                'Produced AI marketing videos using Kling AI, HeyGen & ElevenLabs',
                'Orchestrated automated coding workflows using Claude Code',
                'Used AI coding workflows for product scaffolding, UI implementation, documentation, and automation planning'
            ]
        },
        {
            role: 'Business Development & Entrepreneurship',
            company: 'Multiple Strategic Ventures',
            period: '2016 - 2022',
            location: 'Indore, India',
            description: 'Visionary leadership and operational management for digital and F&B startups.',
            achievements: [
                'KEF Global (Co-Founder): Scaled social media marketing for F&B clients',
                'Kickstart BBQ (Partner): Expanded to 4 outlets with Zomato/Swiggy logistics',
                'OnlinePhataka.com: Founded e-commerce platform for seasonal distribution',
                'Simhastha 2016: Led large-scale event management & business ops'
            ]
        }
    ];

    const education = [
        {
            degree: 'B.Tech in Computer Science',
            institution: 'Acropolis Institute of Technology and Research',
            location: 'Indore | RGPV',
            period: '2014 - 2018',
            grade: 'CGPA: 6.2'
        },
        {
            degree: 'Senior Secondary (12th)',
            institution: 'MP Board',
            location: 'Indore',
            period: '2013 - 2014',
            grade: 'First Division'
        },
        {
            degree: 'High School (10th)',
            institution: 'MP Board',
            location: 'Indore',
            period: '2011',
            grade: 'First Division'
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-title">
                    <span>Journey</span>
                    <h2>Experience & Education</h2>
                </div>

                <div ref={sectionRef} className={styles.grid}>
                    {/* Experience Timeline */}
                    <div className={styles.timelineColumn}>
                        <div className={styles.columnHeader}>
                            <Briefcase className={styles.headerIcon} />
                            <h3>Professional Track</h3>
                        </div>
                        <div className={styles.timeline}>
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.timelineItem}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                >
                                    <div className={styles.dot} />
                                    <div className="glass-card">
                                        <div className={styles.cardHeader}>
                                            <h4>{exp.role}</h4>
                                            <span className={styles.period}>{exp.period}</span>
                                        </div>
                                        <p className={styles.company}>{exp.company}</p>
                                        <ul className={styles.achievements}>
                                            {exp.achievements.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className={styles.educationColumn}>
                        <div className={styles.columnHeader}>
                            <GraduationCap className={styles.headerIcon} />
                            <h3>Academic Foundation</h3>
                        </div>
                        <div className={styles.eduList}>
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="glass-card"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                >
                                    <div className={styles.eduHeader}>
                                        <h4>{edu.degree}</h4>
                                        <span className={styles.grade}>{edu.grade}</span>
                                    </div>
                                    <p className={styles.institution}>{edu.institution}</p>
                                    <div className={styles.eduFooter}>
                                        <span className={styles.eduMeta}>
                                            <Calendar size={14} /> {edu.period}
                                        </span>
                                        <span className={styles.eduMeta}>
                                            <MapPin size={14} /> {edu.location}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
