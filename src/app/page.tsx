import Introduction from '@/components/sections/Introduction';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <div className="w-full">
        <Introduction />
      </div>
      <div id="projects" className="w-full">
        <Projects />
      </div>
      <div id="skills" className="w-full">
        <Skills />
      </div>
      <div id="contact" className="w-full">
        <Contact />
      </div>
    </main>
  );
}
