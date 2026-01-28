'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import styles from './Skills.module.css';

interface Skill {
    name: string;
    level: number;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

function AnimatedSkillBar({ skill, delay }: { skill: Skill; delay: number }) {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    });

    const count = useAnimatedCounter({
        end: skill.level,
        duration: 1500,
        isActive: inView
    });

    return (
        <motion.div
            ref={ref}
            className={styles.skillItem}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay }}
        >
            <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillLevel}>{count}%</span>
            </div>
            <div className={styles.skillBar}>
                <motion.div
                    className={styles.skillProgress}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const skillCategories: SkillCategory[] = [
        {
            title: 'AI & Modern Tools',
            skills: [
                { name: 'AI-Assisted Development', level: 90 },
                { name: 'ChatGPT & Claude', level: 85 },
                { name: 'Prompt Engineering', level: 80 },
                { name: 'AI Code Generation', level: 85 },
                { name: 'Automation Tools', level: 75 },
            ]
        },
        {
            title: 'Business & Entrepreneurship',
            skills: [
                { name: 'E-Commerce Management', level: 85 },
                { name: 'Digital Marketing', level: 75 },
                { name: 'Customer Relations', level: 80 },
                { name: 'Project Management', level: 78 },
                { name: 'Business Development', level: 75 },
            ]
        },
        {
            title: 'Core Competencies',
            skills: [
                { name: 'Fast Learning', level: 95 },
                { name: 'Problem Solving', level: 90 },
                { name: 'Adaptability', level: 92 },
                { name: 'Self-Motivation', level: 88 },
                { name: 'Research Skills', level: 85 },
            ]
        },
        {
            title: 'Professional Skills',
            skills: [
                { name: 'Team Collaboration', level: 85 },
                { name: 'Communication', level: 82 },
                { name: 'Leadership', level: 80 },
                { name: 'Time Management', level: 85 },
                { name: 'Initiative', level: 88 },
            ]
        }
    ];

    return (
        <section id="skills" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Skills & Expertise
                </motion.h2>

                <div ref={sectionRef} className={styles.skillsGrid}>
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={categoryIndex}
                            className="glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            whileHover={{
                                y: -5,
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                            }}
                        >
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill, skillIndex) => (
                                    <AnimatedSkillBar
                                        key={skillIndex}
                                        skill={skill}
                                        delay={categoryIndex * 0.1 + skillIndex * 0.05}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
