'use client';

import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Projects.module.css';

export default function Projects() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const projects = [
        {
            title: 'Onlinegharke - E-Commerce Platform',
            description: 'Founded and developed a full-stack e-commerce platform enabling online shopping for household items. Implemented product catalog, shopping cart, and secure checkout functionality.',
            tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Payment Integration'],
            features: [
                'User authentication and authorization',
                'Product management system',
                'Shopping cart and wishlist',
                'Order tracking and management',
                'Responsive design for mobile and desktop'
            ],
            github: '#',
            live: '#',
            image: '🛒'
        },
        {
            title: 'Swasthya 2016 - Blood Donation Platform',
            description: 'Developed a social impact application connecting blood donors with recipients. The platform facilitates life-saving connections and maintains a database of willing donors.',
            tech: ['JavaScript', 'HTML/CSS', 'PHP', 'MySQL', 'Google Maps API'],
            features: [
                'Donor registration and profile management',
                'Emergency blood request system',
                'Location-based donor search',
                'Real-time notifications',
                'Admin dashboard for monitoring'
            ],
            github: '#',
            live: '#',
            image: '🩸'
        },
        {
            title: 'Personal Portfolio Website',
            description: 'Modern, responsive portfolio website built with Next.js showcasing projects, skills, and professional experience. Features dark mode, smooth animations, and optimized performance.',
            tech: ['Next.js', 'TypeScript', 'CSS Modules', 'React'],
            features: [
                'Server-side rendering for SEO',
                'Dark/Light mode toggle',
                'Smooth scroll animations',
                'Contact form integration',
                'Fully responsive design'
            ],
            github: '#',
            live: '#',
            image: '💼'
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>

                <div ref={sectionRef} className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`glass-card ${styles.projectCard}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{
                                y: -10,
                                rotateX: 2,
                                rotateY: 2,
                                boxShadow: '0 25px 50px rgba(102, 126, 234, 0.2)'
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <motion.div
                                className={styles.projectEmoji}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {project.image}
                            </motion.div>

                            <h3 className={styles.projectTitle}>{project.title}</h3>
                            <p className={styles.projectDescription}>{project.description}</p>

                            <div className={styles.techStack}>
                                {project.tech.map((tech, techIndex) => (
                                    <motion.span
                                        key={techIndex}
                                        className={styles.techTag}
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: 'var(--color-accent-primary)',
                                            color: 'white'
                                        }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            <div className={styles.features}>
                                <h4>Key Features:</h4>
                                <ul>
                                    {project.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: index * 0.2 + featureIndex * 0.05 }}
                                        >
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.projectLinks}>
                                <motion.a
                                    href={project.github}
                                    className="btn btn-secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Github size={18} />
                                    Code
                                </motion.a>
                                <motion.a
                                    href={project.live}
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
