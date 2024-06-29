"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Container from '../Container/Container';

const Navbar: React.FC = () => {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                visible ? 'bg-transparent shadow-xl' : 'bg-white shadow-sm'
            }`}
        >
            <Container>
                <nav className="flex justify-between items-center w-full mx-auto">
                    <div className="text-white font-bold text-lg">BELAL.H</div>
                    <ul className="flex space-x-8">
                        {['Home', 'About', 'Experience', 'Services', 'Portfolio', 'Clients', 'Blog'].map((item) => (
                            <li key={item}>
                                <Link href={`#${item.toLowerCase()}`} className="text-white hover:text-gray-300">
                                  {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link href="#contact" passHref className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                        Contact Me
                    </Link>
                </nav>
            </Container>
        </header>
    );
};

export default Navbar;
