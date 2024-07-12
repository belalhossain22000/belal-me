import React from 'react';
import Image from 'next/image';
import { FaRegCircle } from "react-icons/fa6";
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import ButtonPrimary from '../shared/Button/ButtonPrimary';
import Link from 'next/link';
const Hero: React.FC = () => {
  const resumeLink = "https://drive.google.com/file/d/1BqrrdADB-hFG6eHwSqEQulmI4M10O6Vt/view?usp=drive_link";
  return (
    <section id='home' className='bg-secondary   '>
      <div className='wrapper flex justify-between '>

        <div className='py-28 flex flex-col gap-8 w-1/2'>
          <SectionTitle text='I AM Belal Hossain' />
          <h2 className='hero-heading'>Building Modern
            <br />and Scalable Web Solutions</h2>
          <p className='paragraph-text '>Welcome to my portfolio! I am a Full-Stack Developer with a keen eye for detail and a knack for problem-solving.Dive into my work to discover the breadth and depth of my skills.</p>
          <Link href={resumeLink} target='_blank' passHref className=' w-fit'>

            <ButtonPrimary>Download My CV</ButtonPrimary>

          </Link>
        </div>

        {/* right side image side */}
        <div className='relative w-1/2'>
          <Image src="/belalme-2.png" layout="responsive"  alt='belal' height={300} width={300} className='w-full h-fit relative z-10  ' />
          <Image src="/homeNannerShape.png" alt='belal' height={300} width={300} className=' absolute top-24 left-10 -z-0  animate-smoothBounce transition duration-700' />
        </div>
      </div>



    </section>
  );
};

export default Hero;
