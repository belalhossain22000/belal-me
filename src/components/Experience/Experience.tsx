"use client"
import React from 'react'
import SectionTitle from '../shared/SectionTitle/SectionTitle'
import ExperienceCard, { ExperienceCardProps } from './ExperienceCard';
import { useGetAllExperienceQuery } from '@/redux/api/experience';



const Experience = () => {

    const { data, isLoading } = useGetAllExperienceQuery(undefined)
    const experiences = data?.data
   console.log(data)
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div className='wrapper py-10' id='experience'>
            <div className='flex flex-col items-center justify-center gap-4 mb-10'>
                <SectionTitle text='Experience' />
                <h1 className='section-heading'>Professional Experience</h1>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                {experiences?.map((experience:ExperienceCardProps, index:number) => (
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