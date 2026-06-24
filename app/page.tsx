import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Performance from '@/components/Performance';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import Marquee from '@/components/Marquee';

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Supabase', 'Prisma',
  'Express', 'FastAPI', 'AI Automation', 'RAG', 'Vercel'
];

export default function Home() {
  return (
    <main>
      <GrainOverlay />
      <CustomCursor />
      <Navbar />
      <Hero />
      <div style={{
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)',
        background: 'var(--color-bg-secondary)'
      }}>
        <Marquee items={techStack} speed={25} />
      </div>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Performance />
      <Contact />
    </main>
  );
}
