import './App.css'
import Header from './components/Header';
import DescriptionText from './components/DescriptionText';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import SoftSkills from './components/SoftSkills';
import { useColorStore } from './store/ColorStore';
import { useThemeStore } from './store/ThemeStore';
import { useEffect } from 'react';



function App() {
  const { currentColor } = useColorStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div style={{ "--main-color": currentColor } as React.CSSProperties} data-theme={theme}>
      <Header />
      <DescriptionText />
      <Projects />
      <Technologies />
      <SoftSkills />
      <Contact />
    </div>
  )
}

export default App
