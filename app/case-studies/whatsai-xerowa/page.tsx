import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: 'WhatsAI Assistant / XeroWA Case Study - Rohit Kag',
    description: 'Case study for WhatsAI Assistant / XeroWA, a WhatsApp-first lead-conversion platform for Indian SMBs built with Next.js, TypeScript, Supabase, and the WhatsApp Cloud API.'
};

const workflow = [
    'Customer sends a WhatsApp message to the business number.',
    'Meta webhook is verified, signature-checked, and routed to the right tenant.',
    'Tenant playbook selects the approved reply or qualification path.',
    'Conversation, lead, appointment, handoff, and follow-up state are persisted in Supabase.',
    'Owner dashboard shows the evidence and follow-up state for manual action when needed.'
];

const proofPoints = [
    'Webhook ingress, tenant playbooks, deterministic replies, follow-up scheduling, owner handoff, and dashboard evidence are implemented in the product surface.',
    'The launch runtime is deterministic-first: customer replies come from business-approved playbooks instead of generated chatbot text.',
    'Local proof gates cover readiness checks, tenant isolation, RLS/evidence paths, and keyword-engine behavior.',
    'The real-estate tenant flow supports budget, location, property type, timeline, loan-readiness, site-visit slot capture, reminders, and handoff.'
];

const stack = [
    'Next.js',
    'TypeScript',
    'Supabase / PostgreSQL',
    'Meta WhatsApp Cloud API',
    'Vercel serverless routes',
    'Vitest'
];

export default function WhatsAiCaseStudy() {
    return (
        <main className={styles.pageShell}>
            <section className={styles.hero}>
                <Link href="/#projects" className={styles.backLink}>
                    <ArrowLeft size={18} /> Back to projects
                </Link>

                <p className={styles.kicker}>Flagship case study</p>
                <h1>WhatsAI Assistant / XeroWA</h1>
                <p className={styles.lead}>
                    A WhatsApp-first receptionist and lead-conversion platform for Indian SMBs. It captures inbound messages, sends business-approved replies, qualifies leads, books appointments or callbacks, queues follow-ups, and hands important conversations to the owner.
                </p>

                <div className={styles.actions}>
                    <a href="https://landing-iota-lemon.vercel.app/" target="_blank" rel="noopener noreferrer">
                        Live demo <ExternalLink size={16} />
                    </a>
                    <a href="https://github.com/rohitkag07/whatsai-assistant" target="_blank" rel="noopener noreferrer">
                        GitHub repo <ExternalLink size={16} />
                    </a>
                </div>
            </section>

            <section className={styles.gridSection}>
                <article className={styles.cardWide}>
                    <span className={styles.label}>Problem</span>
                    <h2>SMB WhatsApp sales are still manual.</h2>
                    <p>
                        Many Indian businesses already receive leads on WhatsApp, but replies are late, qualification is inconsistent, site visits or callbacks are missed, and owners do not always know which conversations need attention. XeroWA turns that messy workflow into a predictable software system.
                    </p>
                </article>

                <article className={styles.card}>
                    <span className={styles.label}>My role</span>
                    <h2>End-to-end product builder</h2>
                    <p>
                        I owned the product framing, workflow design, dashboard surface, integration boundaries, tenant data model, and proof gates around the business rules that are easiest to break.
                    </p>
                </article>

                <article className={styles.card}>
                    <span className={styles.label}>Stack</span>
                    <h2>Full-stack + integration</h2>
                    <div className={styles.stackList}>
                        {stack.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </article>
            </section>

            <section className={styles.sectionBlock}>
                <p className={styles.kicker}>Workflow</p>
                <h2>From inbound WhatsApp message to owner-visible lead state</h2>
                <ol className={styles.timeline}>
                    {workflow.map((step) => (
                        <li key={step}>{step}</li>
                    ))}
                </ol>
            </section>

            <section className={styles.sectionBlock}>
                <p className={styles.kicker}>Engineering proof</p>
                <h2>What makes it more than a chatbot demo</h2>
                <ul className={styles.proofList}>
                    {proofPoints.map((point) => (
                        <li key={point}>{point}</li>
                    ))}
                </ul>
            </section>

            <section className={styles.sectionBlock}>
                <p className={styles.kicker}>Design choice</p>
                <h2>Deterministic first, AI-ready later</h2>
                <p>
                    The launch runtime uses business-approved replies from tenant playbooks, not free-form generated text. That makes the product safer for real SMB use: owners can approve what customers will see, while the system still supports structured automation around qualification, appointment capture, follow-ups, and handoff.
                </p>
            </section>
        </main>
    );
}
