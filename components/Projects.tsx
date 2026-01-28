'use client';

import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MouseEvent } from 'react';
import styles from './Projects.module.css';

export default function Projects() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const projects = [
        {
            title: 'Onlinegharke',
            subtitle: 'E-Commerce Platform',
            description: 'Full-stack e-commerce platform enabling online shopping for household items with secure checkout.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express'],
            features: ['User Authentication', 'Product Management', 'Shopping Cart', 'Order Tracking'],
            github: '#',
            live: '#',
            gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            icon: '🛒'
        },
        {
            title: 'Swasthya 2016',
            subtitle: 'Blood Donation Platform',
            description: 'Social impact application connecting blood donors with recipients for life-saving connections.',
            tech: ['JavaScript', 'PHP', 'MySQL', 'Google Maps'],
            features: ['Donor Registration', 'Emergency Requests', 'Location Search', 'Notifications'],
            github: '#',
            live: '#',
            gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            icon: '🩸'
        },
        {
            title: 'Portfolio Website',
            subtitle: 'Modern Developer Portfolio',
            description: 'Responsive portfolio with Next.js featuring dark mode, animations, and optimized performance.',
            tech: ['Next.js', 'TypeScript', 'Framer Motion', 'CSS'],
            features: ['Server-side Rendering', 'Smooth Animations', 'Contact Form', 'Responsive'],
            github: '#',
            live: '#',
            gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            icon: '💼'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Featured Projects</h2>
                    <p className={styles.subtitle}>
                        A selection of projects I've built with passion and precision
                    </p>
                </motion.div>

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

interface Project {
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    features: string[];
    github: string;
    live: string;
    gradient: string;
    icon: string;
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
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onMouseMove={handleMouseMove}
            whileHover={{ y: -8 }}
        >
            {/* Spotlight effect */}
            <motion.div
                className={styles.spotlight}
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            rgba(102, 126, 234, 0.15),
                            transparent 80%
                        )
                    `
                }}
            />

            {/* Gradient border */}
            <div className={styles.gradientBorder} style={{ background: project.gradient }} />

            <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                    <motion.span
                        className={styles.projectIcon}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                        {project.icon}
                    </motion.span>
                    <div>
                        <h3 className={styles.projectTitle}>{project.title}</h3>
                        <span className={styles.projectSubtitle}>{project.subtitle}</span>
                    </div>
                </div>

                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.techStack}>
                    {project.tech.map((tech, techIndex) => (
                        <motion.span
                            key={techIndex}
                            className={styles.techTag}
                            whileHover={{ scale: 1.05, y: -2 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                <div className={styles.features}>
                    {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className={styles.feature}>
                            <span className={styles.featureCheck}>✓</span>
                            {feature}
                        </div>
                    ))}
                </div>

                <div className={styles.projectLinks}>
                    <motion.a
                        href={project.github}
                        className={styles.linkBtn}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={18} />
                        <span>Code</span>
                    </motion.a>
                    <motion.a
                        href={project.live}
                        className={styles.linkBtnPrimary}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>Live Demo</span>
                        <ArrowUpRight size={18} />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}
