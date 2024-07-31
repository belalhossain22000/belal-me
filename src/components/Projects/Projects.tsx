"use client"
import { useGetAllProjectsQuery } from '@/redux/api/projectApi';
import React, { useState } from 'react';
import ProjectCard, { ProjectProps } from './ProjectCard';


const tabs = ["Frontend", "Fullstack", "More"];

const Projects = () => {

  const { data, isLoading } = useGetAllProjectsQuery(undefined)
 
  const [activeTab, setActiveTab] = useState("Frontend");
  const projects = data?.data
  console.log(data)
  if(isLoading){
    return <h1>Loading...</h1>
  }
 
  return (
    <section id="portfolio" className="wrapper py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project: ProjectProps, index: number) => (
                <ProjectCard project={project} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
