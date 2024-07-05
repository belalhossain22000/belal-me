"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ButtonPrimary from '../Button/ButtonPrimary';

const Navbar: React.FC = () => {


    return (
        <header
            className= ''
        >

            <nav className=" w-full flex items-center justify-between  wrapper py-5">
                <div className="text-dark font-bold text-2xl">BELAL. <span className='text-primary'>H</span> </div>
                <ul className="flex items-center gap-8">
                    {['Home', 'About', 'Experience', 'Services', 'Portfolio', 'Clients', 'Blog'].map((item) => (
                        <li key={item}>
                            <Link href={`#${item.toLowerCase()}`} className="text-dark font-semibold">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href="#contact" passHref >
                    <ButtonPrimary >Contact Us</ButtonPrimary>
                </Link>
            </nav>

        </header>
    );
};

export default Navbar;
