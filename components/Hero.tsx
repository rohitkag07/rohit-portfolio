'use client';

import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
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
        'Tech Entrepreneur',
        'Startup Founder',
        'Digital Innovator',
        'Business Strategist',
        'Problem Solver'
    ];

    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const codeCardVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -20, rotateX: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.4
            }
        }
    };

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.auroraContainer}>
                <div className={styles.aurora}></div>
                <div className={styles.aurora2}></div>
                <div className={styles.aurora3}></div>
            </div>
            <ParticleBackground />

            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className={styles.greeting} variants={itemVariants}>
                        <span className={styles.wave}>👋</span>
                        <span>Hello, I'm</span>
                    </motion.div>

                    <motion.h1 className={styles.name} variants={itemVariants}>
                        <span className={styles.firstName}>Rohit</span>{' '}
                        <span className={styles.lastName}>Kag</span>
                    </motion.h1>

                    <motion.h2 className={styles.title} variants={itemVariants}>
                        <span className={styles.staticTitle}>Computer Science Engineer &</span>
                        <br />
                        <TypeWriter words={roles} className={styles.dynamicTitle} />
                    </motion.h2>

                    <motion.p className={styles.description} variants={itemVariants}>
                        <Sparkles size={16} className={styles.sparkle} />
                        Passionate about building businesses and solving real-world problems through innovation.
                        Leveraging AI and modern technology to create impactful solutions and drive growth.
                    </motion.p>

                    <motion.div className={styles.cta} variants={itemVariants}>
                        <motion.a
                            href="#contact"
                            className={styles.primaryBtn}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 0 30px rgba(102, 126, 234, 0.6), 0 0 60px rgba(118, 75, 162, 0.3)'
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={20} />
                            <span>Get In Touch</span>
                            <div className={styles.btnGlow}></div>
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            download
                            className={styles.secondaryBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={20} />
                            <span>Download Resume</span>
                        </motion.a>
                    </motion.div>

                    <motion.div className={styles.social} variants={itemVariants}>
                        {[
                            { href: 'https://github.com/rohitkag', icon: Github, label: 'GitHub' },
                            { href: 'https://linkedin.com/in/rohitkag', icon: Linkedin, label: 'LinkedIn' },
                            { href: 'mailto:kag770rohit@gmail.com', icon: Mail, label: 'Email' }
                        ].map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                target={item.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                aria-label={item.label}
                                className={styles.socialLink}
                                whileHover={{
                                    y: -8,
                                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
                                }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                <item.icon size={22} />
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

