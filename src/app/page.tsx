import AboutMe from '@/components/AboutMe/AboutMe'
import Contact from '@/components/Contact/Contact'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <Hero />
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home