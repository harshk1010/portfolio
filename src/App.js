
import './App.css';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className='min-w-full w-screen h-screen min-h-screen bg-primary opacity-100'>
        <HeroSection />
        <SkillSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
    </div>
  );
}

export default App;
