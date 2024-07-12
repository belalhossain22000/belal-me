"use client"
import React from 'react'
import SectionTitle from '../shared/SectionTitle/SectionTitle'
import ExperienceCard from './ExperienceCard';
import { useGetAllExperienceQuery } from '@/redux/api/experience';

const experiences = [
    {
        title: 'Fullstack Developer',
        company: 'bdCalling IT Ltd',
        duration: 'Jul 2024 - Present',
        description: 'Working on building full-stack applications with modern web technologies.'
    },
    {
        title: 'Frontend Developer',
        company: 'Tech Solutions',
        duration: 'Jan 2023 - Jun 2024',
        description: 'Developed user-friendly web interfaces and collaborated with backend developers to integrate APIs.'
    }
];

const Experience = () => {

    const {data, isLoading } = useGetAllExperienceQuery(undefined)
    console.log(data)
    return (
        <div className='wrapper py-10'>
            <div className='flex flex-col items-center justify-center gap-4 mb-10'>
                <SectionTitle text='Experience' />
                <h1 className='section-heading'>Professional Experience</h1>
            </div>
            <div className='flex items-center justify-center gap-8'>
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        experience={experience}
                    />
                ))}
            </div>

        </div>
    )
}

export default Experience