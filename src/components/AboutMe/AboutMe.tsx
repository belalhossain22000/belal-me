import React from 'react';
import Image from 'next/image';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import ButtonPrimary from '../shared/Button/ButtonPrimary';
import ButtonOutline from '../shared/Button/ButtonOutline';
import { IoCheckboxOutline } from "react-icons/io5";
import Link from 'next/link';
const AboutMe: React.FC = () => {
    return (
        <section id="about" className="relative py-16 bg-white wrapper">

            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                <div className="relative w-full lg:w-1/2">
                    <div className="absolute inset-0 bg-primary transform -skew-y-6 rounded-lg"></div>
                    <div className="relative z-10">
                        <Image
                            src="/belalme-3-removebg-preview.png"
                            alt="Sadiq Siddiqui"
                            layout="responsive"
                            width={500}
                            height={500}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
                <div className="lg:w-1/2 space-y-10 p-4">

                    <SectionTitle text='About Me' />
                    <h3 className="text-2xl font-semibold">I am a Full-Stack Web Developer</h3>
                    <p className='section-heading'>
                        I Can Design Anything You Want
                    </p>
                    <p className='paragraph-text'>
                        I specialize in creating functional, user-friendly web applications using the MERN stack. My goal is to blend design and functionality to deliver high-quality, responsive web solutions.
                    </p>
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-4'>
                            <Image src="/aboutIconOne.png" alt='icon' height={60} width={58} />
                            <div>
                                <p className='text-primary text-[21px] font-bold'>66+</p>
                                <p className='text-dark text-[21px] font-bold'>Complete Project
                                </p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Image src="/aboutIconTwo.png" alt='icon' height={60} width={58} />
                            <div>
                                <p className='text-primary text-[21px] font-bold'>3+</p>
                                <p className='text-dark text-[21px] font-bold'>Year of experience
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='grid grid-cols-2 gap-8'>
                        <p className='text-base text-tertiary flex items-center gap-3 '><span><IoCheckboxOutline color='#FF6B00' size={20} /></span> Work simple and cline design</p>
                        <p className='text-base text-tertiary flex items-center gap-3 '><span><IoCheckboxOutline color='#FF6B00' size={20} /></span> Web Design Full stack</p>
                        <p className='text-base text-tertiary flex items-center gap-3 '><span><IoCheckboxOutline color='#FF6B00' size={20} /></span> User friendly design</p>
                        <p className='text-base text-tertiary flex items-center gap-3 '><span><IoCheckboxOutline color='#FF6B00' size={20} /></span> Unlimited Revisions</p>
                    </div>
                    <Link href={"#portfolio"} className="flex space-x-4 mt-8">
                        <ButtonPrimary >Portfolio</ButtonPrimary>
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default AboutMe;
