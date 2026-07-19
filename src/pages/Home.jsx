import React from 'react'
import HeroSection from '../home/HeroSection'
import TechStack from '../home/TechStack'
import AboutSection from '../home/AboutSection'
import SkillsSection from '../home/SkillsSection'
import ServicesSection from '../home/ServicesSection'
import ProjectsSection from '../home/ProjectsSection'
import ExperienceSection from '../home/ExperienceSection'
import GitHubSection from '../home/GitHubSection'
import CertificatesSection from '../home/CertificatesSection'
import TestimonialsSection from '../home/TestimonialsSection'
import ContactSection from '../home/ContactSection'
import Footer from '../home/Footer'

const Home = () => {
  return (
    <div>
      <HeroSection/>

      <TechStack/>

      <AboutSection/>

      <SkillsSection/>

      <ServicesSection/>

      <ProjectsSection/>

      {/* <ExperienceSection/> */}

      <GitHubSection/>

      <CertificatesSection/>

      {/* <TestimonialsSection/> */}

      <ContactSection/>
      
      <Footer/>
    </div>
  )
}

export default Home
