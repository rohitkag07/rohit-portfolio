'use client';

import Image from 'next/image';
import { Code, Rocket, Users, Trophy, Brain, Zap, Network } from 'lucide-react';
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
                                <p className={styles.lead}>AI Solutions Architect &amp; Multi-Agent Systems Engineer</p>
                            </div>
                        </div>
                        <p className={styles.description}>
                            A visionary engineer specialising in <strong>Enterprise Multi-Agent AI Systems</strong> and
                            scalable cloud-native architectures. I design autonomous teams of AI agents that manage
                            their own state, communicate over networks via the <strong>A2A protocol</strong>, and
                            interact with databases &amp; APIs safely through <strong>Model Context Protocol (MCP)</strong> servers.
                            My background in Computer Science and competitive sports drives the discipline I bring
                            to every deployment on <strong>Google Cloud</strong>.
                        </p>
                    </motion.div>

                    {/* Multi-Agent Competency */}
                    <motion.div
                        className="bento-item glass-card"
                        variants={itemVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        transition={{ delay: 0.1 }}
                    >
                        <Network className={styles.icon} />
                        <h3>Multi-Agent Architect</h3>
                        <p>Designing autonomous agent networks with ADK, A2A &amp; MCP on Google Cloud.</p>
                    </motion.div>

                    {/* AI Competency */}
                    <motion.div
                        className="bento-item glass-card"
                        variants={itemVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                    >
                        <Brain className={styles.icon} />
                        <h3>AI Workflow Engineer</h3>
                        <p>Building agentic pipelines — Sequential, Parallel &amp; Loop — with enterprise guardrails.</p>
                    </motion.div>

                    {/* Technical Stack */}
                    <motion.div
                        className="bento-item glass-card"
                        variants={itemVariants}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        transition={{ delay: 0.25 }}
                    >
                        <Code className={styles.icon} />
                        <h3>Full Stack</h3>
                        <p>Specialised in React, Next.js, Cloud Run &amp; microservice API architecture.</p>
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
                                <p>Co-founded KEF Global and scaled Kickstart BBQ to 4 outlets. I build AI with growth in mind.</p>
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
                        <p>State-level Cricket player and District-level in Badminton &amp; Chess.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
