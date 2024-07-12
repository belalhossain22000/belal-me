// components/ExperienceCard.tsx
import React from 'react';

type ExperienceCardProps = {
    title: string;
    company: string;
    duration: string;
    description: string;
};

const ExperienceCard = ({ experience }: { experience: ExperienceCardProps }) => {
    const { title, company, duration, description } = experience
    return (
        <div className='wrapper bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-xl font-bold mb-2 text-gray-800'>{title}</h3>
            <h4 className='text-lg text-gray-600'>{company}</h4>
            <span className='text-sm text-gray-500 block mb-4'>{duration}</span>
            <p className='text-gray-700'>{description}</p>
        </div>
    );
};

export default ExperienceCard;
