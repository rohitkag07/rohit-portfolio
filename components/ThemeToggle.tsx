'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof document !== 'undefined') {
            return document.documentElement.classList.contains('dark');
        }
        return true;
    });

    useEffect(() => {
        try {
            document.documentElement.classList.toggle('dark', isDark);
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        } catch {
            // ignore
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark((v) => !v);
    };

    return (
        <motion.button
            className={styles.toggle}
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 0 : 180,
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
                {isDark ? (
                    <Moon size={20} className={styles.icon} />
                ) : (
                    <Sun size={20} className={styles.icon} />
                )}
            </motion.div>
        </motion.button>
    );
}
