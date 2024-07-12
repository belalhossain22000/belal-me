"use client"
import React from 'react';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import { useGetAllSkillsQuery } from '@/redux/api/skillApi';


const Skills =  () => {
  const {data , isLoading}=useGetAllSkillsQuery(undefined)
  
 
    return (
        <section id="skills" className=" bg-secondary  py-20">
            <div className=" wrapper">
                <div className='flex flex-col items-center justify-center gap-3'>

                    <SectionTitle text="My Skills" />
                    <h2 className="text-4xl font-bold text-center mb-12">My Technical Toolkit</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white text-tertiary shadow-lg rounded-lg p-6 transform hover:-translate-y-2 transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 7.75L5 12m0 0l4.75 4.25M5 12h14"></path>
                            </svg>
                            Frontend Development
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                JavaScript
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                TypeScript
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                React.js
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Redux
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Next.js
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Tailwind CSS
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                React-Bootstrap
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Bootstrap
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Framer-Motion
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Styled Components
                            </div>
                        </div>
                    </div>
                    <div className="bg-white text-tertiary shadow-lg rounded-lg p-6 transform hover:-translate-y-2 transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.25 6.75L18 12m0 0l-4.75 5.25M18 12H4"></path>
                            </svg>
                            Backend Development
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Node.js
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Express.js
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                MongoDB
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Mongoose
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Prisma
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                PostgreSQL
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Firebase Auth
                            </div>
                        </div>
                    </div>
                    <div className="bg-white text-tertiary shadow-lg rounded-lg p-6 transform hover:-translate-y-2 transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            Tools & Technologies
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Git
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                VS Code
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Chrome Dev Tools
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                GitHub
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Netlify
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Vercel
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                npm
                            </div>
                        </div>
                    </div>
                    <div className="bg-white text-tertiary shadow-lg rounded-lg p-6 transform hover:-translate-y-2 transition duration-300">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h8m-8 4h6"></path>
                            </svg>
                            API & State Management
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                REST API
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Context API
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                JWT
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Axios
                            </div>
                            <div className="bg-secondary border-2 border-primary text-dark hover:bg-primary hover:text-white rounded-lg p-4 text-center">
                                Tanstack Query
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
