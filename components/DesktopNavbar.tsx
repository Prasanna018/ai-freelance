'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'

const DesktopNavbar = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0)

    const navLinks = [
        { label: 'What are We', href: "#what-are-we" },
        { label: 'How it Works', href: "#how-it-works" },
        { label: 'What we Provide', href: "#what-we-provide" },
        { label: 'Use Cases', href: "#use-cases" },
        { label: 'Dev Stack', href: "#dev-stack" }
    ]

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY

            // Hide navbar if scrolled down more than 100px
            if (currentScrollPos > 100) {
                setIsVisible(false)
            } else {
                // Show navbar if at top of page
                setIsVisible(true)
            }

            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos])

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if (targetElement) {
            // Calculate the offset position considering the navbar height
            const navbarHeight = document.querySelector('nav')?.clientHeight || 0
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="mx-auto flex h-[4.5rem] w-full max-w-[76.5625rem] items-center justify-between gap-4 relative bg-[#0a0a0a]">
                {/* Logo with text */}
                <a className="flex w-fit cursor-pointer items-center gap-2">
                    <div className="h-[1.86438rem] w-[1.86438rem]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
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
                    <p className="font-secondaryFont flex items-center text-[1.73119rem] font-bold leading-normal text-white">
                        ax
                        <span className="ml-1 flex h-[1.3rem] w-[1.3rem]">
                            <Image
                                alt="webLogo"
                                src="/logo.png"
                                width={20}
                                height={20}
                                className="h-full w-full object-contain"
                            />
                        </span>
                        m ai
                    </p>
                </a>

                {/* Navigation Links */}
                <nav className="flex items-center gap-4">
                    {navLinks.map((link, index) => (
                        <a
                            href={link.href}
                            key={index}
                            onClick={(e) => handleNavClick(e, link.href || '#')}
                            className="click font-primaryFont cursor-pointer px-4 py-1 text-sm font-normal leading-[1.0625rem] text-white will-change-transform hover:text-purple-300 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Whitepaper Button */}
                <div className="flex items-center">
                    <Button
                        variant="ghost"
                        className="click bg-white text-black hover:bg-white/90 hover:scale-105 transition-transform h-[2.5rem] rounded-[0.5rem] px-4 font-medium"
                        onClick={() => console.log('Whitepaper button clicked')}
                    >
                        Whitepaper
                    </Button>
                </div>

                {/* Gradient bottom border */}
                <div className="absolute bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
            </div>
        </div>
    )
}

export default DesktopNavbar