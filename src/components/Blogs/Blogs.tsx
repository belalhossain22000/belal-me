import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Become a UX/UI Designer With Career Foundry.",
      date: "20 January, 2023",
      image: "/images/blog1.jpg", // Replace with your image paths
      link: "#",
    },
    {
      id: 2,
      title: "The Best App Development For Your Business Plan.",
      date: "15 January, 2023",
      image: "/images/blog2.jpg", // Replace with your image paths
      link: "#",
    },
    {
      id: 3,
      title: "The Best Portfolio For Agency Design Thinking",
      date: "08 January, 2023",
      image: "/images/blog3.jpg", // Replace with your image paths
      link: "#",
    },
  ];

  return (
    <section className="py-12 bg-white wrapper">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-primary text-xl font-semibold mb-2">My Blog</h2>
        <h3 className="text-center text-dark text-4xl font-bold mb-8">LATEST BLOG</h3>
        <div className="flex flex-wrap -mx-4">
          {blogs.map((blog) => (
            <div key={blog.id} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                  width={600}
                  height={400}
                />
                <div className="p-6">
                  <p className="text-sm text-secondary mb-4">{blog.date}</p>
                  <h4 className="text-dark text-2xl font-semibold mb-4">{blog.title}</h4>
                  <a
                    href={blog.link}
                    className="text-primary font-semibold flex items-center"
                  >
                    Read More <FaArrowRight className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
