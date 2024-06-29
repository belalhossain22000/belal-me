import AboutMe from '@/components/AboutMe/AboutMe'
import Hero from '@/components/Hero/Hero'
import React from 'react'

const Home = () => {
  return (
    <div className='container'>
      <Hero />
      <AboutMe/>
    </div>
  )
}

export default Home