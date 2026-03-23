'use client';

import { ArrowDown, Github, Linkedin, Mail, Download, MessageCircle } from 'lucide-react';
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
        'AI Solutions Architect',
        'Multi-Agent Systems Engineer',
        'Workflow Automation Expert',
        'Tech Entrepreneur',
        'Digital Innovator'
    ];

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
                        <span>Available for AI &amp; Multi-Agent Projects</span>
                    </motion.div>

                    <motion.h1 className={styles.name} variants={itemVariants}>
                        <span className={styles.firstName}>ROHIT</span>
                        <span className={styles.lastName}> KAG</span>
                    </motion.h1>

                    <motion.div className={styles.titleWrapper} variants={itemVariants}>
                        <TypeWriter words={roles} className={styles.dynamicTitle} />
                    </motion.div>

                    <motion.p className={styles.description} variants={itemVariants}>
                        Building <strong>Enterprise Multi-Agent AI Systems</strong> with Google ADK, A2A &amp; MCP —
                        deploying autonomous agent workforces on <strong>Google Cloud</strong> with code-level
                        guardrails and stateful memory.
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
                        ].map((item) => (
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
                        whileHover={{ scale: 1.03, rotateY: 5, rotateX: -5 }}
                    >
                        <div className={styles.cardHeader}>
                            <div className={styles.dots}>
                                <span className={styles.dot} style={{ background: '#ff5f56' }}></span>
                                <span className={styles.dot} style={{ background: '#ffbd2e' }}></span>
                                <span className={styles.dot} style={{ background: '#27c93f' }}></span>
                            </div>
                            <span className={styles.fileName}>agentverse.py</span>
                        </div>
                        <div className={styles.code}>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>1</span>
                                <span className={styles.keyword}>architect</span> = {'{'}
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>2</span>
                                &nbsp;&nbsp;<span className={styles.property}>name</span>: <span className={styles.string}>"Rohit Kag"</span>,
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>3</span>
                                &nbsp;&nbsp;<span className={styles.property}>stack</span>: [<span className={styles.string}>"ADK"</span>, <span className={styles.string}>"A2A"</span>, <span className={styles.string}>"MCP"</span>],
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>4</span>
                                &nbsp;&nbsp;<span className={styles.property}>cloud</span>: <span className={styles.string}>"Google Cloud Run"</span>,
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>5</span>
                                &nbsp;&nbsp;<span className={styles.property}>agents</span>: <span className={styles.string}>"∞ scalable"</span>,
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>6</span>
                                &nbsp;&nbsp;<span className={styles.property}>openToConnect</span>: <span className={styles.boolean}>true</span>
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.lineNumber}>7</span>
                                {'}'};
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.floatingShape1}
                        animate={{ y: [-20, 20, -20], rotate: [0, 360], scale: [1, 1.1, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                        className={styles.floatingShape2}
                        animate={{ y: [20, -20, 20], rotate: [360, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowDown size={24} className={styles.bounceArrow} />
            </motion.button>
        </section>
    );
}
