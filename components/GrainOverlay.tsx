'use client';

import { motion } from 'framer-motion';
import styles from './GrainOverlay.module.css';

export default function GrainOverlay() {
    return (
        <motion.div
            className={styles.grain}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 1 }}
        />
    );
}
