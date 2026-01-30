'use client';

import { ExternalLink, Github, ArrowUpRight, Bot, Zap, ShoppingCart, Droplets, Info } from 'lucide-react';
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
            title: 'Kag Batteries',
            subtitle: 'AI-Enhanced E-Commerce',
            description: 'Advanced platform for battery distribution featuring integrated AI chatbots and automated inventory management loops.',
            tech: ['React', 'Next.js', 'LLM Integration', 'Vercel'],
            features: ['AI Chatbot Integration', 'Automated Inventory', 'Real-time Stock', 'Premium Analytics'],
            github: 'https://github.com/rohitkag/kag-batteries',
            live: 'https://kagbatteries.vercel.app/',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            icon: <ShoppingCart size={24} />
        },
        {
            title: 'AI Workflow Automation',
            subtitle: 'Enterprise Efficiency',
            description: 'Intelligent business process automation system leveraging Claude API to streamline complex operational workflows.',
            tech: ['Antigravity', 'Claude API', 'Python', 'Workflows'],
            features: ['Recursive Tasking', 'API Orchestration', 'Cost Optimization', 'Process Mapping'],
            github: '#',
            live: '#',
            gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
            icon: <Zap size={24} />
        },
        {
            title: 'Moltbot AI Assistant',
            subtitle: 'Autonomous Support',
            description: 'Personalized AI assistant deployed on AWS, designed to handle support tickets and automate customer interactions.',
            tech: ['AWS', 'Bolt', 'API Integration', 'Node.js'],
            features: ['Live Support Loop', 'Adaptive Learning', 'Cloud Scalability', 'Webhook Triggers'],
            github: '#',
            live: '#',
            gradient: 'linear-gradient(135deg, #a855f7 0%, #7e22ce 100%)',
            icon: <Bot size={24} />
        },
        {
            title: 'BloodConnect',
            subtitle: 'Social Impact Tech',
            description: 'Real-time platform connecting blood donors with urgent recipients, facilitating life-saving digital bridges.',
            tech: ['Web App', 'Real-time DB', 'Geolocation', 'Auth'],
            features: ['Urgent Request Loop', 'Donor Mapping', 'Live Notifications', 'Verified Profiles'],
            github: '#',
            live: '#',
            gradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
            icon: <Droplets size={24} />
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

function ProjectCard({ project, index, inView }: { project: any; index: number; inView: boolean }) {
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

            <div className={styles.techStack}>
                {project.tech.map((tech: string, techIndex: number) => (
                    <span key={techIndex} className={styles.techTag}>
                        {tech}
                    </span>
                ))}
            </div>

            <div className={styles.footer}>
                <div className={styles.projectLinks}>
                    <motion.a
                        href={project.github}
                        className={styles.linkIcon}
                        whileHover={{ y: -3, color: 'var(--color-accent-primary)' }}
                    >
                        <Github size={20} />
                    </motion.a>
                    {project.live !== '#' && (
                        <motion.a
                            href={project.live}
                            className={styles.linkIcon}
                            whileHover={{ y: -3, color: 'var(--color-accent-primary)' }}
                        >
                            <ExternalLink size={20} />
                        </motion.a>
                    )}
                </div>
                <motion.div
                    className={styles.detailsBtn}
                    whileHover={{ x: 5 }}
                >
                    <span>View Case Study</span>
                    <ArrowUpRight size={16} />
                </motion.div>
            </div>
        </motion.div>
    );
}
