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
  'Innovation', 'Startups', 'E-Commerce', 'AI Tools', 'Digital Strategy',
  'Business Growth', 'Product Vision', 'Leadership', 'Problem Solving', 'Automation'
];

export default function Home() {
  return (
    <main>
      <GrainOverlay />
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

