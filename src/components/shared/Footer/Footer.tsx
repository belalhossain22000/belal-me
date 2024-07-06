import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaDribbble, FaBehance } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="wrapper">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">CreDesign</h2>
            <p className="mt-4 text-white">
              At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti atque corrupti quos dolores et molestias excepturi sint occaecati
            </p>
            <p className="mt-4 text-tertiary">credesign@gmail.com</p>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Explore Link</h3>
            <ul className="text-white">
              <li className="mb-2"><Link href="#">About</Link></li>
              <li className="mb-2"><Link href="#">Resume</Link></li>
              <li className="mb-2"><Link href="#">Portfolio</Link></li>
              <li className="mb-2"><Link href="#">Blog</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">My Services</h3>
            <ul className="text-white">
              <li className="mb-2"><Link href="#">UI/UX Design</Link></li>
              <li className="mb-2"><Link href="#">Mobile App</Link></li>
              <li className="mb-2"><Link href="#">Graphics Design</Link></li>
              <li className="mb-2"><Link href="#">Web Developer</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Follow me</h3>
            <div className="flex space-x-4 mb-4">
              <Link href="#" className="bg-primary p-3 rounded-full">
                <FaFacebookF className="text-white" />
              </Link>
              <Link href="#" className="bg-primary p-3 rounded-full">
                <FaTwitter className="text-white" />
              </Link>
              <Link href="#" className="bg-primary p-3 rounded-full">
                <FaDribbble className="text-white" />
              </Link>
              <Link href="#" className="bg-primary p-3 rounded-full">
                <FaBehance className="text-white" />
              </Link>
            </div>
            <div className="text-white">
              <p className="mb-2">
                <span className="inline-block bg-primary p-1 rounded-full mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232L19 9m0 0l-3.5 3.5m3.5-3.5H11m-3 5H4m6 0v7m0-7l-4 4m0 0l4 4m0-8.5h3m7-7V6m-7 4v2m4-4v7m-4 0V3.5m7 0V2m0 2.5v4M7 5h2m4 0h2m4-3h-2m4 3h-2"
                    />
                  </svg>
                </span>
                202 Dog Hill Lane Beloit, KS 67420
              </p>
              <p>
                <span className="inline-block bg-primary p-1 rounded-full mr-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 7.89a3 3 0 004.24 0L21 10m-5 0h.01M19.91 5.09a10 10 0 11-2.12-2.12L20.9 7"
                    />
                  </svg>
                </span>
                1-800-915-6270
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white pt-4 text-white text-sm flex justify-between">
          <p>All rights reserved © 2023 Credesign</p>
          <div className="flex space-x-4">
            <Link href="#">Terms & Condition</Link>
            <Link href="#">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
