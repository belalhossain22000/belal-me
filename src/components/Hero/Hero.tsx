import React from 'react';
import Image from 'next/image';
import { FaRegCircle } from "react-icons/fa6";
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import ButtonPrimary from '../shared/Button/ButtonPrimary';
const Hero: React.FC = () => {
  return (
    <section className='bg-secondary h-full  '>
      <div className='wrapper flex justify-between '>

        <div className='py-28 flex flex-col gap-8 w-1/2'>
          <SectionTitle text='I AM DESIGNER' />
          <h2 className='hero-heading'>Creative Design <br /> and Web Solutions</h2>
          <p className='paragraph-text '>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod  maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus  autem quibusdam et.</p>
          <div className=' w-fit'><ButtonPrimary>Download My CV</ButtonPrimary></div>
        </div>

        {/* right side image side */}
        <div className='relative w-1/2'>
          <Image src="/belalme-2.png" alt='belal' height={300} width={300} className='w-full h-full relative z-10  ' />
          <Image src="/homeNannerShape.png" alt='belal' height={300} width={300} className=' absolute top-24 left-10 -z-0  animate-smoothBounce transition duration-700' />
        </div>
      </div>



    </section>
  );
};

export default Hero;
