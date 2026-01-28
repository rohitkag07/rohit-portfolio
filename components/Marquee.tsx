'use client';

import { motion } from 'framer-motion';
import styles from './Marquee.module.css';

interface MarqueeProps {
    items: string[];
    speed?: number;
    direction?: 'left' | 'right';
}

export default function Marquee({ items, speed = 30, direction = 'left' }: MarqueeProps) {
    const duplicatedItems = [...items, ...items, ...items];

    return (
        <div className={styles.marqueeContainer}>
            <motion.div
                className={styles.marqueeContent}
                animate={{
                    x: direction === 'left' ? ['0%', '-33.33%'] : ['-33.33%', '0%'],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: speed,
                        ease: 'linear',
                    },
                }}
            >
                {duplicatedItems.map((item, index) => (
                    <span key={index} className={styles.marqueeItem}>
                        {item}
                        <span className={styles.separator}>✦</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
