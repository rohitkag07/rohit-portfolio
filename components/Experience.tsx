'use client';

import { Briefcase, Calendar } from 'lucide-react';
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
            role: 'Founder & Developer',
            company: 'Onlinegharke.com',
            period: '2016 - Present',
            type: 'E-Commerce',
            description: 'Founded and developed a full-stack e-commerce platform for online household shopping.',
            achievements: [
                'Built complete e-commerce solution from scratch using modern web technologies',
                'Implemented secure payment gateway integration',
                'Managed product catalog with 100+ items',
                'Optimized website performance achieving 90+ Lighthouse score',
                'Handled end-to-end business operations including customer service'
            ]
        },
        {
            role: 'Technical Lead',
            company: 'Swasthya 2016',
            period: '2016',
            type: 'Social Impact',
            description: 'Led development of blood donation platform connecting donors with recipients.',
            achievements: [
                'Developed donor registration and management system',
                'Implemented location-based search using Google Maps API',
                'Created emergency request notification system',
                'Built admin dashboard for monitoring and analytics',
                'Successfully connected donors with recipients, contributing to life-saving efforts'
            ]
        },
        {
            role: 'Business Manager',
            company: 'Pharaoh 66 - Ipmaan Business',
            period: '2015 - 2016',
            type: 'Sports & Recreation',
            description: 'Managed digital operations and customer engagement for sports business.',
            achievements: [
                'Organized cricket tournaments and sporting events',
                'Managed event logistics and participant coordination',
                'Handled customer relations and feedback management',
                'Implemented digital marketing strategies',
                'Grew customer base through social media engagement'
            ]
        }
    ];

    const education = [
        {
            degree: 'B.E. in Computer Science Engineering',
            institution: 'Acropolis Institute of Technology and Research',
            location: 'Indore, India',
            period: '2014 - 2018',
            grade: 'CGPA: 6.20',
            highlights: [
                'Specialized in Software Engineering and Web Development',
                'Completed projects in Data Structures, Algorithms, and Database Management',
                'Active participant in technical workshops and coding competitions'
            ]
        },
        {
            degree: 'Senior Secondary (12th)',
            institution: 'MP Board',
            location: 'Indore, India',
            period: 'Completed 2014',
            grade: '74%',
            highlights: [
                'Science stream with Mathematics',
                'Strong foundation in Physics, Chemistry, and Mathematics'
            ]
        }
    ];

    return (
        <section id="experience" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Experience & Education
                </motion.h2>

                <div ref={sectionRef} className={styles.content}>
                    {/* Experience Section */}
                    <div className={styles.experienceSection}>
                        <h3 className={styles.sectionHeading}>
                            <Briefcase size={24} />
                            Work Experience
                        </h3>

                        <div className={styles.timeline}>
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className={styles.timelineItem}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <div className={styles.timelineDot} />
                                    <motion.div
                                        className="glass-card"
                                        whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}
                                    >
                                        <div className={styles.header}>
                                            <div>
                                                <h4 className={styles.role}>{exp.role}</h4>
                                                <p className={styles.company}>{exp.company}</p>
                                                <span className={styles.type}>{exp.type}</span>
                                            </div>
                                            <div className={styles.period}>
                                                <Calendar size={16} />
                                                {exp.period}
                                            </div>
                                        </div>

                                        <p className={styles.description}>{exp.description}</p>

                                        <ul className={styles.achievements}>
                                            {exp.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className={styles.educationSection}>
                        <h3 className={styles.sectionHeading}>
                            🎓 Education
                        </h3>

                        <div className={styles.educationList}>
                            {education.map((edu, index) => (
                                <div key={index} className="glass-card">
                                    <h4 className={styles.degree}>{edu.degree}</h4>
                                    <p className={styles.institution}>{edu.institution}</p>
                                    <p className={styles.location}>{edu.location}</p>
                                    <div className={styles.eduMeta}>
                                        <span className={styles.period}>
                                            <Calendar size={16} />
                                            {edu.period}
                                        </span>
                                        <span className={styles.grade}>{edu.grade}</span>
                                    </div>

                                    <ul className={styles.highlights}>
                                        {edu.highlights.map((highlight, hlIndex) => (
                                            <li key={hlIndex}>{highlight}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
