import { useTheme } from './ThemeContext';
import Background from './Components/Background/Background';
import Home from './Pages/Home/Home';
import Menu from './Components/Menu/Menu';
import Skills from './Pages/Skills/Skills';
import Blank from './Pages/Blank';
import './App.css';
import ThemeButton from './Components/ThemeButton/ThemeButton';
import { useEffect, useState } from 'react';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {

  const [pages, setPages] = useState({
    home: true,
    skills: false,
    projects: false,
    experience: false,
    contact: false
  })

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      const scrollY = window.scrollY
      scrollY>550 && setPages(pages=>{
        return {...pages, skills: true}
      })
      scrollY>1400 && setPages(pages=>{
        return {...pages, projects: true}
      })

    })
  },[])

  return (
    <div className="App">
      <ThemeButton/>
      <Background/>
      <Menu/>
      <Home/>
      {pages.skills ? <Skills/> : <Blank/>}
      {pages.projects ? <Projects/> : <Blank/>}
      <Contact/>
      <Blank/>
      <Blank/>
    </div>
  );
}

export default App;
