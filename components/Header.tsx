'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from './ui/button'; // Make sure to import your Button component

const navLinks = [
    { label: 'What are We', href: "#id" },
    { label: 'How it Works' },
    { label: 'What we Provide' },
    { label: 'Use Cases' },
    { label: 'Dev Stack' }
];

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visibleItems, setVisibleItems] = useState(0);

    const toggleMenu = () => {
        if (!isMenuOpen) {
            setIsMenuOpen(true);
            // Reset visible items when opening menu
            setVisibleItems(0);
            // Animate items one by one
            const timer = setInterval(() => {
                setVisibleItems(prev => {
                    if (prev >= navLinks.length) {
                        clearInterval(timer);
                        return prev;
                    }
                    return prev + 1;
                });
            }, 150); // Adjust timing between items
        } else {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <>
            <nav className={`w-full lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex h-[4.5rem] w-full items-center justify-between gap-4 px-4">
                    {/* Logo with text */}
                    <a
                        href="/"
                        className="flex w-fit cursor-pointer items-center gap-[0.36rem]"
                        aria-label="AXOM AI Home"
                    >
                        <div className="h-[1.86438rem] w-[1.86438rem]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M20.1531 21.703L10.4221 1.1064C10.1995 0.635254 10.5432 0.0927734 11.0642 0.0927734H18.9775C19.2522 0.0927734 19.5023 0.251211 19.6197 0.499607L29.3506 21.0962C29.5732 21.5673 29.2296 22.1098 28.7085 22.1098H20.7952C20.5205 22.1098 20.2704 21.9514 20.1531 21.703Z"
                                    fill="white"
                                />
                                <path
                                    d="M6.44033 22.4956C6.19161 22.0387 5.71298 21.7543 5.19272 21.7543H0.645209C0.16386 21.7542 -0.147493 21.2773 0.0712476 20.875L3.14119 15.235C4.33742 13.0375 7.6839 13.0376 8.88017 15.235L12.0255 21.013C12.2742 21.4699 12.7528 21.7543 13.2731 21.7543H17.8206C18.3021 21.7543 18.6135 22.2318 18.3946 22.6341L15.3246 28.2741C14.1283 30.4715 10.7819 30.4715 9.58566 28.2741L6.44033 22.4956Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <p className="font-secondaryFont flex items-center justify-center text-[1.73119rem] leading-normal font-bold text-nowrap text-white">
                            ax
                            <span className="mt-1.5 flex h-[1.3rem] w-[1.3rem] items-center justify-center">
                                <Image
                                    alt="AXOM AI Logo"
                                    src="/logo.png"
                                    width={20}
                                    height={20}
                                    className="h-full w-full object-contain"
                                    priority
                                />
                            </span>
                            m ai
                        </p>
                    </a>

                    {/* Hamburger menu with animation */}
                    <button
                        className="flex h-6 w-6 flex-col items-center justify-center gap-1.5 transition-all duration-300"
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        <div className={`h-[2px] w-full rounded-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <div className={`h-[2px] rounded-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'w-0 opacity-0' : 'w-4/5'}`} />
                        <div className={`h-[2px] rounded-[2px] bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 w-full' : 'w-3/5'}`} />
                    </button>
                </div>

                {/* Bottom gradient line */}
                <div
                    className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                    aria-hidden="true"
                />
            </nav>

            {/* Slider Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-[#0a0a0a] z-40 pt-[4.5rem] transition-all duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <div className="flex flex-col items-center justify-between h-full w-full px-4 pb-8">
                    <ul className="w-full mt-8">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className="w-full border-b border-gray-800 last:border-b-0 overflow-hidden"
                                style={{
                                    transition: `transform 0.5s ease ${index * 0.1}s, opacity 0.5s ease ${index * 0.1}s`,
                                    transform: isMenuOpen && visibleItems > index ? 'translateY(0)' : 'translateY(-20px)',
                                    opacity: isMenuOpen && visibleItems > index ? 1 : 0
                                }}
                            >
                                <a
                                    href={link?.href}
                                    className="flex items-center justify-center py-6 text-white text-xl font-medium hover:text-purple-400 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <Button
                        variant="ghost"
                        className="click bg-white text-black hover:bg-white/90 hover:scale-105 transition-transform h-[2.5rem] rounded-[0.5rem] px-4 font-medium"
                        onClick={() => {
                            console.log('Whitepaper button clicked');
                            setIsMenuOpen(false);
                        }}
                        style={{
                            transition: 'transform 0.5s ease 0.6s, opacity 0.5s ease 0.6s',
                            transform: isMenuOpen && visibleItems >= navLinks.length ? 'translateY(0)' : 'translateY(20px)',
                            opacity: isMenuOpen && visibleItems >= navLinks.length ? 1 : 0
                        }}
                    >
                        Whitepaper
                    </Button>
                </div>
            </div>
        </>
    );
};

export default Navbar;