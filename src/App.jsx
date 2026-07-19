import { useState } from 'react'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CertificatesPage from './pages/CertificatesPage'
import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ServicesPage from './pages/ServicesPage'
import ExperiencePage from './pages/ExperiencePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ScrollToTop from './ScrollToTop'
import ScrollRestoration from './components/ScrollRestoration'


function App() {


  return (
    <div>
      <Router>
        {/* <ScrollToTop/> */}
        <ScrollRestoration/>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/certificates' element={<CertificatesPage/>}/>
      <Route path='/skills' element={<SkillsPage/>}/>
      <Route path='/projects' element={<ProjectsPage/>}/>
      <Route path='/services' element={<ServicesPage/>}/>
      <Route path='/experience' element={<ExperiencePage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>

      </Routes>
      
      </Router>
    </div>
  )
}

export default App
