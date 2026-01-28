'use client';

import Image from 'next/image';
import { Code, Rocket, Users, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './About.module.css';

export default function About() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const highlights = [
        {
            icon: <Code size={32} />,
            title: 'Technical Expertise',
            description: 'Strong foundation in Computer Science with hands-on experience in modern web technologies'
        },
        {
            icon: <Rocket size={32} />,
            title: 'Entrepreneurial Spirit',
            description: 'Founded and developed multiple digital ventures including e-commerce platforms'
        },
        {
            icon: <Users size={32} />,
            title: 'Social Impact',
            description: 'Created blood donation platform connecting donors with recipients, saving lives'
        },
        {
            icon: <Trophy size={32} />,
            title: 'Proven Achiever',
            description: 'District-level athlete in Badminton and Cricket, demonstrating dedication and excellence'
        }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    About Me
                </motion.h2>

                <div ref={sectionRef} className={styles.content}>
                    <div className={styles.leftColumn}>
                        <motion.div
                            className={styles.imageContainer}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/profile.jpg"
                                    alt="Rohit Kag - Software Engineer"
                                    width={400}
                                    height={400}
                                    className={styles.profileImage}
                                    priority
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className={styles.story}
                            initial={{ opacity: 0, x: -30 }}
                            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <p className={styles.lead}>
                                I'm a <strong>Computer Science Engineer</strong> from Acropolis Institute of Technology and Research,
                                passionate about leveraging technology to solve real-world problems and create meaningful impact.
                            </p>

                            <p>
                                My journey in tech is driven by curiosity and a desire to build solutions that matter. From developing
                                <strong> e-commerce platforms</strong> to creating <strong>social impact applications</strong>, I've always
                                believed in the power of technology to transform lives.
                            </p>

                            <p>
                                Beyond coding, I bring an <strong>entrepreneurial mindset</strong> and <strong>leadership experience</strong> from
                                managing multiple ventures. My background in competitive sports has taught me discipline, teamwork, and the
                                importance of continuous improvement—qualities I bring to every project I undertake.
                            </p>

                            <p>
                                I'm currently seeking opportunities to work with innovative teams where I can contribute my skills in
                                <strong> full-stack development</strong>, learn from experienced professionals, and grow as a software engineer.
                            </p>
                        </motion.div>
                    </div>

                    <div className={styles.highlights}>
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                whileHover={{
                                    y: -5,
                                    scale: 1.02,
                                    boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)'
                                }}
                            >
                                <motion.div
                                    className={styles.icon}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {item.icon}
                                </motion.div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
