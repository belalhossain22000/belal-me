import React from 'react';
import Image from 'next/image';
import Container from '../shared/Container/Container';

const AboutMe: React.FC = () => {
    return (
        <div className="relative py-16 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
                    <div className="relative w-full lg:w-1/2">
                        <div className="absolute inset-0 bg-blue-500 transform -skew-y-6 rounded-lg"></div>
                        <div className="relative z-10">
                            <Image
                                src="/belal-2.png"
                                alt="Sadiq Siddiqui"
                                layout="responsive"
                                width={500}
                                height={500}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-4 p-4">
                        <h2 className="text-3xl font-bold">About Me</h2>
                        <h3 className="text-xl font-semibold">I am a Full-Stack Web Developer</h3>
                        <p>
                            Sed ut perspiciatis unde accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
                        </p>
                        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
                            <div>
                                <p><strong>Name:</strong> Belal Hossain</p>
                                <p><strong>Age:</strong> 25</p>
                            </div>
                            <div>
                                <p><strong>Email:</strong> belalhossain22000@gmail.com</p>
                                <p><strong>From:</strong> Narayanganj, Dhaka Bangladesh</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 mt-8">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Resume</button>
                            <button className="bg-white text-blue-500 border border-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white">Experience</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutMe;
