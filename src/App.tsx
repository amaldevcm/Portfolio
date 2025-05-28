
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { Experience } from './components/Experience';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import AboutMe from './components/AboutMe';
import { Skills } from './components/Skills';


export function App() {
  return <div className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutMe />
        <Experience/>
        <Skills/>
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}