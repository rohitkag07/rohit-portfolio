'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Download, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './Contact.module.css';

export default function Contact() {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real implementation, this would send the form data to a backend
        alert('Thank you for your message! This is a demo form. In production, this would send an email.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const achievements = [
        { icon: <Trophy size={20} />, text: 'District Level - Badminton' },
        { icon: <Trophy size={20} />, text: 'District Level - Cricket' },
        { icon: <Trophy size={20} />, text: 'Participated in Branch Cricket Competition' },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Get In Touch
                </motion.h2>

                <div ref={sectionRef} className={styles.content}>
                    {/* Contact Info */}
                    <motion.div
                        className={styles.contactInfo}
                        initial={{ opacity: 0, x: -30 }}
                        animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="glass-card">
                            <h3>Let's Connect</h3>
                            <p className={styles.intro}>
                                I'm currently seeking opportunities in software development.
                                Whether you have a question or just want to say hi, feel free to reach out!
                            </p>

                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <Mail size={24} />
                                    <div>
                                        <h4>Email</h4>
                                        <a href="mailto:kag07rohit@gmail.com">kag07rohit@gmail.com</a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <Phone size={24} />
                                    <div>
                                        <h4>Phone</h4>
                                        <a href="tel:+917869161842">+91 7869161842</a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <MapPin size={24} />
                                    <div>
                                        <h4>Location</h4>
                                        <p>Indore, Madhya Pradesh, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.social}>
                                <a href="https://github.com/rohitkag" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                    <Github size={20} />
                                    GitHub
                                </a>
                                <a href="https://linkedin.com/in/rohitkag" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                    <Linkedin size={20} />
                                    LinkedIn
                                </a>
                            </div>

                            <a href="/resume.pdf" download className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--spacing-md)' }}>
                                <Download size={20} />
                                Download Resume
                            </a>
                        </div>

                        {/* Achievements */}
                        <div className="glass-card">
                            <h3>Achievements</h3>
                            <div className={styles.achievements}>
                                {achievements.map((achievement, index) => (
                                    <div key={index} className={styles.achievement}>
                                        <span className={styles.achievementIcon}>{achievement.icon}</span>
                                        <span>{achievement.text}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.hobbies}>
                                <h4>Hobbies & Interests</h4>
                                <div className={styles.hobbyTags}>
                                    <span>🏏 Cricket</span>
                                    <span>🏸 Badminton</span>
                                    <span>♟️ Chess</span>
                                    <span>💻 Coding</span>
                                    <span>📚 Reading</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        className={styles.formSection}
                        initial={{ opacity: 0, x: 30 }}
                        animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="glass-card">
                            <h3>Send a Message</h3>
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Your message here..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>© 2026 Rohit Kag. Built with Next.js & passion ❤️</p>
            </footer>
        </section>
    );
}
