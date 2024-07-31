import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
export type BlogPost = {
    _id?: string;
    title: string;
    description: string;
    content: string;
    category: string;
    date: string;
    imageLink?: string;
    readingTime?: string;
  
  };

const BlogCard = ({ blog }: { blog: BlogPost }) => {
  const imageSrc = blog?.imageLink ?? '/path/to/default-image.jpg'; 

  return (
    <motion.div
      key={blog._id}
      className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={blog.title}
          className="w-full h-48 object-cover"
          width={600}
          height={400}
        />
        <div className="p-6">
          <p className="text-sm text-secondary mb-4">{blog.date}</p>
          <h4 className="text-dark text-2xl font-semibold mb-4">{blog.title}</h4>
          <Link
            href="/blog/2"
            className="text-primary font-semibold flex items-center hover:underline"
          >
            Read More <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
