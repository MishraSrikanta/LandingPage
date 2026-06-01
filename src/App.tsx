import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Collection from './components/Collection';
import Contact from './components/Contact';
import Cta from './components/Cta';

export default function App() {
  return (
    <div className="relative bg-background min-h-screen">
      {/* Full-screen texture overlay */}
      <div className="texture-overlay" />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Collection />
        <Contact />
        <Cta />
      </main>
    </div>
  );
}


