import Header from './components/Header'
import Projects from './components/Projects'
import Notes from './components/Notes'
import Diagrams from './components/Diagrams'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Particles from './components/Particles'

function App() {
  return (
    <>
      <Particles />
      <Header />
      <main className="max-w-[1080px] mx-auto px-8 py-10 pb-16 relative z-[1]">
        <Projects />
        <Notes />
        <Diagrams />
        <CV />
        <Contact />
      </main>
      <Footer />
    </>
  )
  
  
}

export default App

