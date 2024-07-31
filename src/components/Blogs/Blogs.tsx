"use client"
import React from 'react';
import Image from 'next/image';

import { useGetAllBlogQuery } from '@/redux/api/blogApi';
import Link from 'next/link';
import BlogCard, { BlogPost } from './BlogCard';





const Blogs = () => {
  const { data, isLoading } = useGetAllBlogQuery(undefined)
  const blogs = data?.data
  console.log(data)
  
  if(isLoading){
    return <div>Loading...</div>
  }


  return (
    <section id='blog' className="py-12 bg-white wrapper">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-primary text-xl font-semibold mb-2">My Blog</h2>
        <h3 className="text-center text-dark text-4xl font-bold mb-8">LATEST BLOG</h3>
        <div className="flex flex-wrap -mx-4">
          {blogs?.map((blog:BlogPost) => (
            <BlogCard blog={blog} key={blog._id}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
