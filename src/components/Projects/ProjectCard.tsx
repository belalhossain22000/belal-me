import React from 'react';
import { motion } from 'framer-motion';

export type ProjectProps = {
    projectName: string;
    description: string;
    usedTechnologies: string;
    githubCodeLink: string;
    liveLink: string;
    imageLink: string;
    category?:string
};

const ProjectCard = ({ project }: { project: ProjectProps }) => {
    const { projectName, description, usedTechnologies, githubCodeLink, liveLink, imageLink } = project;
    const technologies = usedTechnologies.split(', ');

    return (
        <motion.div
            className="bg-secondary text-tertiary shadow-lg rounded-lg p-6 transform hover:-translate-y-2 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <img src={imageLink} alt={projectName} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-semibold mb-4">{projectName}</h3>
            <p className="mb-4">{description}</p>
            <div className="mb-4 flex flex-wrap">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-tertiary text-white rounded-lg px-2 py-1 text-sm mr-2 mb-2">{tech}</span>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <a href={liveLink} className="text-primary hover:underline">Preview Project</a>
                <a href={githubCodeLink} className="text-primary hover:underline">View Code</a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
