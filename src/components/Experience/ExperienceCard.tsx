// components/ExperienceCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

export type ExperienceCardProps = {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
};

const ExperienceCard = ({ experience }: { experience: ExperienceCardProps }) => {
    const { title, company, startDate, endDate, description } = experience;

    return (
        <motion.div 
            className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <h3 className='text-xl font-bold mb-2 text-gray-800'>{title}</h3>
            <h4 className='text-lg text-gray-600'>{company}</h4>
            <span className='text-sm text-gray-500 block mb-1'>
                {startDate} - {endDate}
            </span>
            <p className='text-gray-700 mt-2'>{description}</p>
        </motion.div>
    );
};

export default ExperienceCard;
