'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.4
        }
    }
} as const;

const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    }
} as const;

const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        }
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3
        }
    }
} as const;

const WhatAreWeSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -70]);

    return (
        <div ref={containerRef} className="mx-auto w-full max-w-[90rem] py-32 overflow-hidden bg-black">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                className="flex flex-col items-center gap-6 px-6"
            >
                {/* Tag */}
                <motion.div
                    variants={itemVariants}
                    className="border-white/20 text-white bg-white/10 font-primaryFont flex w-fit items-center gap-3 rounded-full border px-6 py-4 text-xl leading-[1.2] font-medium md:text-2xl"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12" fill="none">
                            <path d="M8.10709 8.69371L4.19235 0.407776C4.1028 0.218238 4.24106 0 4.45069 0H7.63417C7.74469 0 7.84529 0.0637385 7.89251 0.163667L11.8072 8.4496C11.8968 8.63914 11.7585 8.85738 11.5489 8.85738H8.36544C8.25491 8.85738 8.15431 8.79364 8.10709 8.69371Z" fill="white"></path>
                            <path d="M2.5908 9.01241C2.49074 8.82859 2.29819 8.71417 2.08889 8.71417H0.259443C0.0657982 8.71415 -0.0594578 8.52227 0.0285406 8.36044L1.26357 6.0915C1.74481 5.20745 3.09108 5.20746 3.57234 6.0915L4.83769 8.41594C4.93775 8.59976 5.1303 8.71417 5.33958 8.71417H7.16905C7.36273 8.71417 7.48802 8.90628 7.39995 9.06813L6.16493 11.3371C5.68366 12.2211 4.33741 12.2211 3.85615 11.3371L2.5908 9.01241Z" fill="white"></path>
                        </svg>
                    </span>
                    Bringing Scalable MCPs Together
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={itemVariants}
                    className="font-primaryFont text-center text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-bold text-white"
                >
                    What are we?
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-white/80 font-primaryFont text-center text-2xl md:text-3xl leading-[1.5] font-normal max-w-4xl mx-auto mt-6"
                >
                    We are MCP protocol for Blockchain and real-world platforms like Maps, GitHub etc. Built on QEDA, it powers real-time, voice-driven execution with support for custom protocols.
                </motion.p>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl"
                >
                    {/* Feature 1 */}
                    <motion.div
                        variants={featureVariants}
                        whileHover="hover"
                        style={{ y: y1 }}
                        className="flex flex-col items-center gap-8 p-10 rounded-3xl bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border border-white/10 backdrop-blur-sm"
                    >
                        <div className="rounded-2xl border-2 border-white/20 bg-black/50 p-8">
                            <div className="h-24 w-24 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 52 52" fill="none">
                                    <path d="M18.75 12.9999C18.75 13.4141 19.0858 13.7499 19.5 13.7499C19.9142 13.7499 20.25 13.4141 20.25 12.9999V5.74988H42.8662C43.6936 5.74988 44.3597 5.74896 44.8975 5.79285C45.444 5.8375 45.925 5.93281 46.3691 6.15906L46.627 6.30359C47.2143 6.66387 47.6932 7.1804 48.0078 7.79773L48.0869 7.9657C48.2572 8.36262 48.334 8.79019 48.373 9.26843C48.417 9.80627 48.416 10.4721 48.416 11.2997V18.9423C48.416 19.6641 47.8312 20.2498 47.1094 20.2499C44.2417 20.2501 41.9163 22.5747 41.916 25.4423V26.5575C41.9163 29.4251 44.2417 31.7497 47.1094 31.7499C47.8312 31.75 48.416 32.3356 48.416 33.0575V40.7001C48.416 41.5277 48.417 42.1935 48.373 42.7313C48.334 43.2096 48.2572 43.6371 48.0869 44.0341L48.0078 44.202C47.6932 44.8194 47.2143 45.3359 46.627 45.6962L46.3691 45.8407C45.925 46.0669 45.444 46.1623 44.8975 46.2069C44.3597 46.2508 43.6936 46.2499 42.8662 46.2499H20.25V38.9999C20.25 38.5857 19.9142 38.2499 19.5 38.2499C19.0858 38.2499 18.75 38.5857 18.75 38.9999V46.2499H9.13281C8.30538 46.2499 7.63932 46.2508 7.10156 46.2069C6.62334 46.1678 6.19574 46.0901 5.79883 45.9198L5.63086 45.8407C5.01367 45.5262 4.49697 45.048 4.13672 44.4608L3.99219 44.202C3.76592 43.7579 3.67063 43.2779 3.62598 42.7313C3.58204 42.1935 3.58301 41.5276 3.58301 40.7001V33.0575C3.58301 32.3357 4.16886 31.7501 4.89063 31.7499L5.15723 31.743C7.90089 31.604 10.0828 29.3356 10.083 26.5575V25.4423C10.0828 22.5747 7.75819 20.2501 4.89063 20.2499C4.16886 20.2497 3.58301 19.6641 3.58301 18.9423V11.2997C3.58301 10.4721 3.58204 9.80626 3.62598 9.26843C3.67063 8.72188 3.76592 8.24189 3.99219 7.79773C4.35167 7.09221 4.92537 6.51859 5.63086 6.15906C6.07497 5.93279 6.55509 5.83752 7.10156 5.79285C7.63932 5.74892 8.30538 5.74988 9.13281 5.74988H18.75V12.9999ZM19.5 20.9169C19.0858 20.9169 18.75 21.2527 18.75 21.6669V30.3339C18.7504 30.7478 19.086 31.0839 19.5 31.0839C19.914 31.0839 20.2497 30.7478 20.25 30.3339V21.6669C20.25 21.2527 19.9142 20.9169 19.5 20.9169Z" fill="white"></path>
                                </svg>
                                <div className="absolute inset-0 -z-10 bg-white/20 rounded-full blur-xl"></div>
                            </div>
                        </div>
                        <h3 className="font-primaryFont text-3xl md:text-4xl text-center font-bold text-white">
                            Marketplace of MCPs
                        </h3>
                        <p className="text-white/80 text-xl text-center">
                            Discover and deploy from our extensive marketplace
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        variants={featureVariants}
                        whileHover="hover"
                        style={{ y: y2 }}
                        className="flex flex-col items-center gap-8 p-10 rounded-3xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-white/10 backdrop-blur-sm"
                    >
                        <div className="rounded-2xl border-2 border-white/20 bg-black/50 p-8">
                            <div className="h-24 w-24 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 52 52" fill="none">
                                    <path d="M13 17.8749L3.25 25.9999L13 34.1249" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M39 17.8749L48.75 25.9999L39 34.1249" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M32.5 8.12488L19.5 43.8749" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                                <div className="absolute inset-0 -z-10 bg-white/20 rounded-full blur-xl"></div>
                            </div>
                        </div>
                        <h3 className="font-primaryFont text-3xl md:text-4xl text-center font-bold text-white">
                            Voice-Driven Execution
                        </h3>
                        <p className="text-white/80 text-xl text-center">
                            Control and execute tasks with simple voice commands
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        variants={featureVariants}
                        whileHover="hover"
                        style={{ y: y3 }}
                        className="flex flex-col items-center gap-8 p-10 rounded-3xl bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-white/10 backdrop-blur-sm"
                    >
                        <div className="rounded-2xl border-2 border-white/20 bg-black/50 p-8">
                            <div className="h-24 w-24 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 52 52" fill="none">
                                    <path d="M46.25 41.1669C46.2499 42.3925 45.5038 43.4411 44.4316 44.286C43.351 45.1376 41.8333 45.8718 40.0254 46.4745C36.4014 47.6824 31.4428 48.4169 26 48.4169C20.5572 48.4169 15.5986 47.6824 11.9746 46.4745C10.1667 45.8718 8.64903 45.1376 7.56836 44.286C6.49622 43.4411 5.75013 42.3925 5.75 41.1669V29.5565C6.16515 29.7359 6.59632 29.9143 7.04492 30.0858C11.7411 31.8814 18.3326 33.2499 26 33.2499C33.6674 33.2499 40.2589 31.8814 44.9551 30.0858C45.4037 29.9143 45.8349 29.7359 46.25 29.5565V41.1669ZM26 3.58289C31.4428 3.58289 36.4014 4.31735 40.0254 5.52527C41.8333 6.12791 43.351 6.86216 44.4316 7.71375C45.5038 8.55869 46.2499 9.60726 46.25 10.8329V27.9139C45.6828 28.175 45.073 28.4347 44.4199 28.6844C39.9078 30.4097 33.499 31.7499 26 31.7499C18.501 31.7499 12.0922 30.4097 7.58008 28.6844C6.92699 28.4347 6.31721 28.175 5.75 27.9139V10.8329C5.75013 9.60726 6.49622 8.55869 7.56836 7.71375C8.64903 6.86216 10.1667 6.12791 11.9746 5.52527C15.5986 4.31735 20.5572 3.58289 26 3.58289ZM26 5.08289C20.6735 5.08289 15.8818 5.8036 12.4482 6.94812C10.728 7.52154 9.38984 8.18807 8.49707 8.89148C7.59597 9.60163 7.25013 10.2638 7.25 10.8329C7.25 11.402 7.59591 12.0641 8.49707 12.7743C9.38982 13.4777 10.728 14.1442 12.4482 14.7177C15.8819 15.8622 20.6734 16.5829 26 16.5829C31.3266 16.5829 36.1181 15.8622 39.5518 14.7177C41.272 14.1442 42.6102 13.4777 43.5029 12.7743C44.4041 12.0641 44.75 11.402 44.75 10.8329C44.7499 10.2638 44.404 9.60163 43.5029 8.89148C42.6102 8.18807 41.272 7.52154 39.5518 6.94812C36.1182 5.8036 31.3265 5.08289 26 5.08289Z" fill="white"></path>
                                </svg>
                                <div className="absolute inset-0 -z-10 bg-white/20 rounded-full blur-xl"></div>
                            </div>
                        </div>
                        <h3 className="font-primaryFont text-3xl md:text-4xl text-center font-bold text-white">
                            MCP Protocol
                        </h3>
                        <p className="text-white/80 text-xl text-center">
                            Advanced protocol for blockchain integration
                        </p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WhatAreWeSection;