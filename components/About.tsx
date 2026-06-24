'use client';

import Image from 'next/image';
import { Code, Rocket, Users, Trophy, Brain, Network } from 'lucide-react';
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
                                <p className={styles.lead}>AI Automation Developer &amp; Full-Stack Product Builder</p>
                            </div>
                        </div>
                        <p className={styles.description}>
                            I build practical <strong>React/Next.js products</strong>, Supabase-backed dashboards,
                            Express/FastAPI services, and <strong>AI automation workflows</strong> for Indian business
                            operations. My work spans ecommerce, CRM, photography, real estate, compliance, healthcare,
                            and internal tools, with a focus on turning offline workflows into deployable software.
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
                        <h3>AI Workflow Architect</h3>
                        <p>Designing agentic workflows, tool gateways, RAG flows, and automation systems for business operations.</p>
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
                        <p>Building LLM-assisted product workflows with Claude/OpenAI SDKs, local Ollama models, and structured data.</p>
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
                        <p>Specialised in React, Next.js, TypeScript, Supabase, Prisma, Express, FastAPI, and API integration.</p>
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
                                <p>Co-founded KEF Global and scaled Kickstart BBQ to 4 outlets. I build software with business outcomes in mind.</p>
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
                        <h3>Business Digitization</h3>
                        <p>Built product systems for Xero Seven, KAG Batteries, X7 Photography, X7 RealEstate, and CA workflows.</p>
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
