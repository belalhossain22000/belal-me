import React from 'react';
import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import ButtonPrimary from '../shared/Button/ButtonPrimary';
import Link from 'next/link';
const Hero: React.FC = () => {
  const resumeLink = "https://drive.google.com/file/d/1BqrrdADB-hFG6eHwSqEQulmI4M10O6Vt/view?usp=drive_link";
  return (
    <section id='home' className='bg-secondary  '>
      <div className='wrapper flex justify-between items-center  lg:flex-row flex-col-reverse'>

        <div className='md:py-28 py-14 flex flex-col gap-8 lg:w-1/2'>
          <SectionTitle text='I AM Belal Hossain' />
          <h2 className='hero-heading'>I am a FullStack Web Developer</h2>
          <p className='paragraph-text '>Welcome to my portfolio! I am a Full-Stack Developer with a keen eye for detail and a knack for problem-solving.Dive into my work to discover the breadth and depth of my skills.</p>
          <Link href={resumeLink} target='_blank' passHref className=' w-fit'>

            <ButtonPrimary>Download My CV</ButtonPrimary>

          </Link>
        </div>

        {/* right side image side */}
        <div className='relative lg:w-1/2'>
          <Image src="/belalme-2.png" alt='belal' height={300} width={300} className='w-full h-[100vh] relative z-10 object-cover ' />
          <Image src="/homeNannerShape.png" alt='belal' height={300} width={300} className=' absolute top-24 left-10 -z-0  animate-smoothBounce transition duration-700' />
        </div>
      </div>



    </section>
  );
};

export default Hero;
