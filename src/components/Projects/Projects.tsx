"use client"
import { useGetAllProjectsQuery } from '@/redux/api/projectApi';
import React, { useState } from 'react';

const projectss = [
  {
    title: "Property Sell and Buy",
    description: "A frontend for property transactions using Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "#",
    image: "/images/property-sell-buy.png",
    category: "Fullstack",
  },
  {
    title: "E-commerce Website",
    description: "A fullstack e-commerce site built with Next.js, Node.js, Express.js, Tailwind CSS, MongoDB, Mongoose, and TypeScript.",
    technologies: ["Next.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB", "Mongoose", "TypeScript"],
    link: "#",
    image: "/images/ecommerce-website.png",
    category: "Fullstack",
  },
  {
    title: "Pet Adoption Website",
    description: "A fullstack pet adoption platform using Next.js, Redux, TypeScript, Prisma, PostgreSQL, Tailwind CSS, and Material UI.",
    technologies: ["Next.js", "Redux", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Material UI"],
    link: "#",
    image: "/images/pet-adoption-website.png",
    category: "Fullstack",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio site to showcase projects and skills using Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS"],
    link: "#",
    image: "/images/portfolio-website.png",
    category: "Frontend",
  },
];

const tabs = ["Frontend", "Fullstack", "More"];

const Projects = () => {

  const { data, isLoading } = useGetAllProjectsQuery(undefined)
 
  const [activeTab, setActiveTab] = useState("Frontend");
  const projects = data?.data
  const filteredProjects = projects?.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="wrapper text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="flex justify-center mb-8">
          {tabs?.map(tab => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 rounded-lg ${activeTab === tab ? 'bg-primary text-white' : 'bg-secondary text-tertiary'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects?.map((project, index) => (
            <div key={index} className="bg-secondary text-tertiary shadow-lg rounded-lg p-6 transform hover:-translate-y-2 transition duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="bg-tertiary text-white rounded-lg px-2 py-1 text-sm mr-2">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="text-primary hover:underline">Preview Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
