import './App.css'
import Header from './components/Header';
import DescriptionText from './components/DescriptionText';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import { useColorStore } from './store/ColorStore';



function App() {
  const { currentColor } = useColorStore();
  return (
    <div style={{ "--main-color": currentColor } as React.CSSProperties}>
      <Header />
      <DescriptionText />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  )
}

export default App
