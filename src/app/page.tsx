import AboutMe from '@/components/AboutMe/AboutMe'
import Blogs from '@/components/Blogs/Blogs'
import Contact from '@/components/Contact/Contact'
import Experience from '@/components/Experience/Experience'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Skills from '@/components/Skills/Skills'
import React from 'react'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Hero />
      <AboutMe />
      <Experience />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  )
}

export default Home