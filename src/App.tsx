
import './App.css'
import Header from "./components/Header/Header.tsx";
import Skills from "./components/Skills/Skills.tsx";
import About from "./components/About/About.tsx";
import {personInfo} from "./data/data.ts"
import Education from "./components/Education/Education.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Footer from "./components/Footer/Footer.tsx";



function App() {
  const name = "Gevork Melikfashyan"

  return (
    <>
        <Header name={name} />
        <About name={personInfo.name} description={personInfo.description} github={personInfo.github} image={personInfo.image} />
        <Skills />
        <Education />
        <Experience />
        <Footer name={name} />
    </>
  )
}

export default App
