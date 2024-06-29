import React from 'react';
import Container from '../shared/Container/Container';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className=" inset-0 w-full  bg-cover bg-center bg-no-repeat  h-screen bg-fixed" style={{ backgroundImage: 'url("/banner-01.jpg")' }}>
      {/* overlay color */}
      <div className="absolute inset-0 bg-blue-500 opacity-50"></div>
      {/* text site */}
      <Container>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center h-full pt-[150px] ">
          <div className="text-white flex flex-col justify-center lg:w-1/2 p-4">
            <p className="text-xl">Hello, my name is <span className="font-bold">Belal Hossain</span></p>
            <h1 className="text-5xl font-extrabold mt-4">I'm a Web Developer</h1>
            <p className="text-lg mt-4 max-w-lg">
              I'm a Full-Stack Web Developer with extensive experience for over 8 years. My expertise is to create and design Websites, Apps, Mockups and many more...
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100">Portfolio</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">Resume</button>
            </div>
          </div>
          {/* image site */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 p-4">
            <Image src="/belal-2.png" alt="Description of image" className="rounded-full border-blue-500 border-2 shadow-lg w-fit" layout="responsive"
              width={500}
              height={500} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
