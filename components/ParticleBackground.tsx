'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export default function ParticleBackground() {
    const [init, setInit] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const [isCoarsePointer] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia?.('(pointer: coarse)')?.matches ?? false;
    });

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
        if (prefersReducedMotion) return;

        const enable = () => setEnabled(true);
        // Allow the main content to paint first.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void) => number);
        if (ric) ric(enable);
        else window.setTimeout(enable, 400);
    }, []);

    useEffect(() => {
        if (!enabled) return;
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, [enabled]);

    if (!enabled || !init) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                fpsLimit: isCoarsePointer ? 30 : 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push',
                        },
                        onHover: {
                            enable: !isCoarsePointer,
                            mode: 'grab',
                        },
                        resize: {
                            enable: true,
                            delay: 0.5
                        },
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5
                            }
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#667eea',
                    },
                    links: {
                        color: '#764ba2',
                        distance: isCoarsePointer ? 150 : 120,
                        enable: true,
                        opacity: isCoarsePointer ? 0.15 : 0.2,
                        width: 1,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: true,
                        speed: isCoarsePointer ? 0.6 : 0.8,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            width: 1920,
                            height: 1080
                        },
                        value: isCoarsePointer ? 18 : 30,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: false,
            }}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: 0,
            }}
        />
    );
}
