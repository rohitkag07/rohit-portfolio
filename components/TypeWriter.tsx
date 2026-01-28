'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './TypeWriter.module.css';

interface TypeWriterProps {
    words: string[];
    className?: string;
}

export default function TypeWriter({ words, className = '' }: TypeWriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[currentWordIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < currentWord.length) {
                    setCurrentText(currentWord.slice(0, currentText.length + 1));
                } else {
                    // Pause before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(currentText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentWordIndex, words]);

    return (
        <span className={`${styles.typewriter} ${className}`}>
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentText}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    className={styles.text}
                >
                    {currentText}
                </motion.span>
            </AnimatePresence>
            <motion.span
                className={styles.cursor}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            >
                |
            </motion.span>
        </span>
    );
}
