import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Particles from './components/Particles'
import { ThemeProvider } from './hooks/useTheme'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import NotesPage from './pages/NotesPage'
import DiagramsPage from './pages/DiagramsPage'
import CVPage from './pages/CVPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Particles />
        <Header />
        <main className="max-w-[1080px] mx-auto px-8 py-10 pb-16 relative z-[1]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/diagrams" element={<DiagramsPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

