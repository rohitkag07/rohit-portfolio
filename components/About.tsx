'use client';

import Image from 'next/image';
import { Code, Rocket, Users, Trophy, Brain, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

export default function About() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-title">
                    <span>Inception</span>
                    <h2>The Digital Innovator</h2>
                </div>

                <div ref={sectionRef} className="bento-grid">
                    {/* Main Story & Profile */}
                    <motion.div
                        className="bento-item-large glass-card"
                        variants={itemVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                    >
                        <div className={styles.profileHeader}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/profile.jpg"
                                    alt="Rohit Kag"
                                    width={200}
                                    height={200}
                                    className={styles.profileImage}
                                />
                            </div>
                            <div>
                                <h3 className={styles.nameHeader}>ROHIT KAG</h3>
                                <p className={styles.lead}>Computer Science Engineer</p>
                            </div>
                        </div>
                        <p className={styles.description}>
                            A visionary engineer merging <strong>Computer Science</strong> with
                            creative digital strategy. I specialize in building autonomous AI
                            workflows and scalable e-commerce infrastructures. My background in
                            competitive sports instills the discipline I bring to every line
                            of code and business decision.
                        </p>
                    </motion.div>

                    {/* AI Competency */}
                    <motion.div
                        className="bento-item glass-card"
                        variants={itemVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        transition={{ delay: 0.1 }}
                    >
                        <Brain className={styles.icon} />
                        <h3>AI Architect</h3>
                        <p>Building agentic workflows and LLM-integrated systems.</p>
                    </motion.div>

                    {/* Technical Stack */}
                    <motion.div
                        className="bento-item glass-card"
                        variants={itemVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                    >
                        <Code className={styles.icon} />
                        <h3>Full Stack</h3>
                        <p>Specialized in React, Next.js, and API architecture.</p>
                    </motion.div>

                    {/* Entrepreneurship */}
                    <motion.div
                        className="bento-item-wide glass-card"
                        variants={itemVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.flexRow}>
                            <Rocket className={styles.icon} />
                            <div>
                                <h3>Entrepreneurial Edge</h3>
                                <p>Co-founded KEF Global and scaled Kickstart BBQ to 4 outlets. I build with growth in mind.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Impact */}
                    <motion.div
                        className="bento-item glass-card"
                        variants={itemVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        transition={{ delay: 0.4 }}
                    >
                        <Users className={styles.icon} />
                        <h3>Social Impact</h3>
                        <p>Created blood donation platforms saving lives through tech.</p>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        className="bento-item glass-card"
                        variants={itemVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        transition={{ delay: 0.5 }}
                    >
                        <Trophy className={styles.icon} />
                        <h3>Achiever</h3>
                        <p>State-level Cricket player and District-level in Badminton.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
