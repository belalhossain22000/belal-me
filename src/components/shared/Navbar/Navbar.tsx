"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ButtonPrimary from '../Button/ButtonPrimary';

const Navbar: React.FC = () => {


    return (
        <header
            className='sticky top-0 left-0 right-0 z-50 bg-white shadow-lg'
        >

            <nav className=" w-full flex items-center justify-between  wrapper py-5">

                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                {['Home', 'About', 'Experience', 'skill', 'Portfolio', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <Link href={`#${item.toLowerCase()}`} className="text-dark font-semibold">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link href="/" className="text-dark font-bold text-2xl" >BELAL. <span className='text-primary'>H</span> </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {['Home', 'About', 'Experience', 'skill', 'Portfolio', 'Blog'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-dark font-semibold">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <Link href="#contact" passHref >
                            <ButtonPrimary >Contact Me</ButtonPrimary>
                        </Link>
                    </div>
                </div>


            </nav>

        </header>
    );
};

export default Navbar;
