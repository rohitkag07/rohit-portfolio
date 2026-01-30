'use client';

import { Briefcase, Calendar, GraduationCap, Award, MapPin } from 'lucide-react';
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
            role: 'AI Product Development',
            company: 'Self-Initiated Projects',
            period: '2023 - Present',
            location: 'Indore, India',
            description: 'Engineering autonomous systems and AI-integrated platforms.',
            achievements: [
                'Built Kag Batteries e-commerce with AI chatbot & automated inventory',
                'Developed Claude API workflows for business process optimization',
                'Deployed Moltbot (AI Assistant) on AWS with Bolt integration'
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
                'Architected premium personal brand strategy with modern UI/UX'
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
            grade: 'Core Focus: Software Engineering'
        },
        {
            degree: 'Senior Secondary (12th)',
            institution: 'MP Board',
            location: 'Indore',
            period: '2013 - 2014',
            grade: '74%'
        },
        {
            degree: 'High School (10th)',
            institution: 'MP Board',
            location: 'Indore',
            period: '2011',
            grade: '66.5%'
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
