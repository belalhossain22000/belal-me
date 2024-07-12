"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ButtonPrimary from '../Button/ButtonPrimary';

const Navbar: React.FC = () => {


    return (
        <header
            className= 'sticky top-0 left-0 right-0 z-50 bg-white'
        >

            <nav className=" w-full flex items-center justify-between  wrapper py-5">
                <Link href="/" className="text-dark font-bold text-2xl" >BELAL. <span className='text-primary'>H</span> </Link>
                <ul className="flex items-center gap-8">
                    {['Home', 'About', 'Experience','skill', 'Portfolio','Blog'].map((item) => (
                        <li key={item}>
                            <Link href={`#${item.toLowerCase()}`} className="text-dark font-semibold">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href="#contact" passHref >
                    <ButtonPrimary >Contact Me</ButtonPrimary>
                </Link>
            </nav>

        </header>
    );
};

export default Navbar;
