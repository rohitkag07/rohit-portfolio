'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Target, TrendingUp, Users, Flag, Rocket } from 'lucide-react';
import styles from './Performance.module.css';

const stats = [
    {
        label: 'Live Projects Deployed',
        value: 4,
        icon: Rocket,
        suffix: '+'
    },
    {
        label: 'Business Outlets Scaled',
        value: 4,
        icon: TrendingUp,
        suffix: ''
    },
    {
        label: 'Years of Entrepreneurship',
        value: 8,
        icon: Target,
        suffix: '+'
    },
    {
        label: 'Social Impact Initiatives',
        value: 10,
        icon: Users,
        suffix: '+'
    }
];

const sports = [
    { name: 'Cricket', level: 'State Level', icon: '🏏' },
    { name: 'Badminton', level: 'District Level', icon: '🏸' },
    { name: 'Chess', level: 'District Level', icon: '♟️' }
];

export default function Performance() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="performance" className="section" style={{ background: 'var(--color-bg-secondary)' }}>
            <div className="container">
                <div className="section-title">
                    <span>Breakthroughs</span>
                    <h2>Key Achievements</h2>
                </div>

                <motion.div
                    ref={sectionRef}
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                >
                    {/* Stats Grid */}
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <stat.icon className={styles.statIcon} />
                                <div className={styles.statValue}>
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Sports & Highlights */}
                    <motion.div
                        className={`${styles.highlightCard} glass-card`}
                        variants={itemVariants}
                    >
                        <div className={styles.cardHeader}>
                            <Trophy className={styles.headerIcon} />
                            <h3>Distinction in Sports</h3>
                        </div>
                        <div className={styles.sportsList}>
                            {sports.map((sport, index) => (
                                <div key={index} className={styles.sportItem}>
                                    <span className={styles.sportIcon}>{sport.icon}</span>
                                    <div className={styles.sportInfo}>
                                        <span className={styles.sportName}>{sport.name}</span>
                                        <span className={styles.sportLevel}>{sport.level}</span>
                                    </div>
                                    <Flag size={14} className={styles.flagIcon} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
