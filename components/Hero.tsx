'use client';

import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import ParticleBackground from './ParticleBackground';
import TypeWriter from './TypeWriter';

export default function Hero() {
    const scrollToNext = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const roles = [
        'AI Product Developer',
        'Automation Specialist',
        'Tech Entrepreneur',
        'Digital Innovator',
        'Workflow Architect'
    ];

    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    const codeCardVariants = {
        hidden: { opacity: 0, x: 50, rotateY: 20 },
        visible: {
            opacity: 1,
            x: 0,
            rotateY: 0,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.5
            }
        }
    };

    return (
        <section id="home" className={styles.hero}>

            <ParticleBackground />

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className={styles.badge} variants={itemVariants}>
                        <div className={styles.badgeDot}></div>
                        <span>Available for AI & Automation Projects</span>
                    </motion.div>

                    <motion.h1 className={styles.name} variants={itemVariants}>
                        <span className={styles.firstName}>ROHIT</span>
                        <span className={styles.lastName}> KAG</span>
                    </motion.h1>

                    <motion.div className={styles.titleWrapper} variants={itemVariants}>
                        <TypeWriter words={roles} className={styles.dynamicTitle} />
                    </motion.div>

                    <motion.p className={styles.description} variants={itemVariants}>
                        Empowering businesses with <strong>Agentic AI Workflows</strong> and
                        intelligent automation. B.Tech graduate dedicated to building the
                        future of digital innovation.
                    </motion.p>

                    <motion.div className={styles.cta} variants={itemVariants}>
                        <motion.a
                            href="#contact"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Hire Me</span>
                        </motion.a>
                        <motion.a
                            href="/rohit-kag-resume.pdf"
                            download="rohit-kag-resume.pdf"
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={20} />
                            <span>Download CV</span>
                        </motion.a>
                    </motion.div>

                    <motion.div className={styles.social} variants={itemVariants}>
                        {[
                            { href: 'https://github.com/rohitkag07', icon: Github, label: 'GitHub' },
                            { href: 'https://www.linkedin.com/in/rohit-kag-7b3943b9/', icon: Linkedin, label: 'LinkedIn' },
                            { href: 'https://wa.me/917869161842', icon: MessageCircle, label: 'WhatsApp' },
                            { href: 'mailto:kag07rohit@gmail.com', icon: Mail, label: 'Email' }
                        ].map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                aria-label={item.label}
                                className={styles.socialLink}
                                whileHover={{ y: -5, color: 'var(--color-accent-primary)' }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <item.icon size={20} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <div className={styles.illustration}>
                    <motion.div
                        className={styles.floatingCard}
                        variants={codeCardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{
                            scale: 1.03,
                            rotateY: 5,
                            rotateX: -5,
                        }}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.dots}>
                                <span className={styles.dot} style={{ background: '#ff5f56' }}></span>
                                <span className={styles.dot} style={{ background: '#ffbd2e' }}></span>
                                <span className={styles.dot} style={{ background: '#27c93f' }}></span>
                            </div>
                            <span className={styles.fileName}>entrepreneur.js</span>
                        </div>
                        <div className={styles.code}>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>1</span>
                                <span className={styles.keyword}>const</span> entrepreneur = {'{'}
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>2</span>
                                &nbsp;&nbsp;<span className={styles.property}>name</span>: <span className={styles.string}>"Rohit Kag"</span>,
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>3</span>
                                &nbsp;&nbsp;<span className={styles.property}>strengths</span>: [<span className={styles.string}>"AI Tools"</span>, <span className={styles.string}>"Strategy"</span>, <span className={styles.string}>"Innovation"</span>],
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>4</span>
                                &nbsp;&nbsp;<span className={styles.property}>mission</span>: <span className={styles.string}>"Building the Future"</span>,
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>5</span>
                                &nbsp;&nbsp;<span className={styles.property}>openToConnect</span>: <span className={styles.boolean}>true</span>
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>6</span>
                                {'}'};
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating elements */}
                    <motion.div
                        className={styles.floatingShape1}
                        animate={{
                            y: [-20, 20, -20],
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />
                    <motion.div
                        className={styles.floatingShape2}
                        animate={{
                            y: [20, -20, 20],
                            rotate: [360, 0]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />
                </div>
            </div>

            <motion.button
                className={styles.scrollDown}
                onClick={scrollToNext}
                aria-label="Scroll down"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(102, 126, 234, 0.5)'
                }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowDown size={24} className={styles.bounceArrow} />
            </motion.button>
        </section>
    );
}

