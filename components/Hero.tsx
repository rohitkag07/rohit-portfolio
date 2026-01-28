'use client';

import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
    const scrollToNext = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    const codeCardVariants = {
        hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
        visible: {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
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
                    <motion.div className={styles.greeting} variants={itemVariants}>
                        <span className={styles.wave}>👋</span>
                        <span>Hello, I'm</span>
                    </motion.div>

                    <motion.h1 className={styles.name} variants={itemVariants}>
                        Rohit <span className="gradient-text">Kag</span>
                    </motion.h1>

                    <motion.h2 className={styles.title} variants={itemVariants}>
                        Computer Science Engineer & <br />
                        <span className="gradient-text">Full-Stack Developer</span>
                    </motion.h2>

                    <motion.p className={styles.description} variants={itemVariants}>
                        Passionate about building impactful web applications and solving real-world problems.
                        Combining technical expertise with entrepreneurial mindset to create innovative digital solutions.
                    </motion.p>

                    <motion.div className={styles.cta} variants={itemVariants}>
                        <motion.a
                            href="#contact"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Mail size={20} />
                            Get In Touch
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            download
                            className="btn btn-secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Download size={20} />
                            Download Resume
                        </motion.a>
                    </motion.div>

                    <motion.div className={styles.social} variants={itemVariants}>
                        <motion.a
                            href="https://github.com/rohitkag"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            whileHover={{ y: -5, backgroundColor: 'var(--color-accent-primary)', color: 'white' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Github size={24} />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/rohitkag"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            whileHover={{ y: -5, backgroundColor: 'var(--color-accent-primary)', color: 'white' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Linkedin size={24} />
                        </motion.a>
                        <motion.a
                            href="mailto:kag770rohit@gmail.com"
                            aria-label="Email"
                            whileHover={{ y: -5, backgroundColor: 'var(--color-accent-primary)', color: 'white' }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <Mail size={24} />
                        </motion.a>
                    </motion.div>
                </motion.div>

                <div className={styles.illustration}>
                    <motion.div
                        className={styles.floatingCard}
                        variants={codeCardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{
                            scale: 1.05,
                            rotateY: 5,
                            boxShadow: '0 20px 60px rgba(102, 126, 234, 0.3)'
                        }}
                    >
                        <div className={styles.code}>
                            <div className={styles.codeLine}>
                                <span className={styles.keyword}>const</span> developer = {'{'}
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.property}>name</span>: <span className={styles.string}>"Rohit Kag"</span>,
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.property}>skills</span>: [<span className={styles.string}>"React"</span>, <span className={styles.string}>"Node.js"</span>, <span className={styles.string}>"Python"</span>],
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.property}>passion</span>: <span className={styles.string}>"Building Solutions"</span>
                            </div>
                            <div className={styles.codeLine}>
                                {'}'};
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.button
                className={styles.scrollDown}
                onClick={scrollToNext}
                aria-label="Scroll down"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                whileHover={{ scale: 1.1, backgroundColor: 'var(--color-accent-primary)', color: 'white' }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowDown size={24} className={styles.bounceArrow} />
            </motion.button>
        </section>
    );
}
