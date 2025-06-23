'use client'
import { motion, useScroll, useTransform, AnimatePresence, MotionValue } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";

interface Card {
    title: string;
    description: string;
    icon: string;
    color: string;
    y: MotionValue<number>;
    delay: number;
}

const HowItWorks = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
    const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.95]);

    const cards: Card[] = [
        {
            title: "Browse Marketplace",
            description: "Explore our curated selection of high-performance nodes",
            icon: "🔍",
            color: "from-purple-500 to-indigo-600",
            y: y1,
            delay: 0.1
        },
        {
            title: "Deploy Nodes",
            description: "One-click deployment of pre-configured node solutions",
            icon: "⚡",
            color: "from-blue-500 to-cyan-600",
            y: y2,
            delay: 0.3
        },
        {
            title: "List Your Node",
            description: "Monetize your infrastructure by listing nodes",
            icon: "📈",
            color: "from-green-500 to-teal-600",
            y: y3,
            delay: 0.5
        },
        {
            title: "Run & Manage",
            description: "Real-time monitoring and management tools",
            icon: "🛠️",
            color: "from-amber-500 to-orange-600",
            y: y4,
            delay: 0.7
        }
    ];

    const cardVariants: Variants = {
        offscreen: {
            y: 150,
            opacity: 0,
            scale: 0.7
        },
        onscreen: (i: number = 0) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring" as const,
                bounce: 0.4,
                duration: 1.2,
                delay: cards[i].delay
            }
        }),
        hover: {
            scale: 1.05,
            y: -10,
            zIndex: 10,
            boxShadow: "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
            transition: {
                duration: 0.4
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                when: "beforeChildren"
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-black py-32 px-4 overflow-hidden relative"
        >
            <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{ opacity }}
            >
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-screen opacity-10 blur-3xl"
                    animate={{
                        x: ["0%", "30%", "0%"],
                        y: ["0%", "-20%", "10%"],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen opacity-10 blur-3xl"
                    animate={{
                        x: ["0%", "-20%", "10%"],
                        y: ["0%", "30%", "0%"],
                        scale: [1, 1.3, 0.9]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 5
                    }}
                />
            </motion.div>

            <div className="max-w-7xl mx-auto relative">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className="mb-40"
                >
                    <motion.h2
                        className="text-5xl md:text-7xl font-extrabold text-center mb-6 text-white"
                        variants={textVariants}
                    >
                        How It Works
                    </motion.h2>
                    <motion.p
                        className="text-2xl md:text-3xl text-gray-300 text-center max-w-4xl mx-auto font-medium"
                        variants={textVariants}
                    >
                        Select from the marketplace, deploy or list nodes built to run at scale
                    </motion.p>
                </motion.div>

                <motion.div
                    className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20"
                    style={{ opacity, scale }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-150px" }}
                    variants={containerVariants}
                >
                    <AnimatePresence>
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                className="relative h-96 rounded-3xl overflow-hidden cursor-pointer group"
                                variants={cardVariants}
                                initial="offscreen"
                                whileInView="onscreen"
                                whileHover="hover"
                                viewport={{ once: true, margin: "-50px" }}
                                style={{ y: card.y }}
                                custom={index}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90`}></div>
                                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm group-hover:backdrop-blur-md transition-all duration-500"></div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                                    <motion.span
                                        className="text-7xl mb-6"
                                        animate={{
                                            y: [0, -15, 0],
                                            rotate: [0, 8, -8, 0]
                                        }}
                                        transition={{
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            duration: 6 + index
                                        }}
                                    >
                                        {card.icon}
                                    </motion.span>
                                    <motion.h3
                                        className="text-4xl font-extrabold text-white mb-4"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        {card.title}
                                    </motion.h3>
                                    <motion.p
                                        className="text-xl text-gray-100 font-medium"
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        {card.description}
                                    </motion.p>
                                </div>
                                <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none group-hover:border-white/40 transition-all duration-500"></div>

                                <motion.div
                                    className="absolute -inset-2 opacity-30 bg-white rounded-3xl blur-xl group-hover:opacity-40 transition-all duration-500"
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        opacity: [0.3, 0.4, 0.3]
                                    }}
                                    transition={{
                                        duration: 10 + index,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:w-28 group-hover:h-28 transition-all duration-500"
                                    animate={{
                                        x: ["0%", "20%", "0%"],
                                        y: ["0%", "30%", "0%"],
                                    }}
                                    transition={{
                                        duration: 15 + index * 2,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <motion.div
                                    className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:w-24 group-hover:h-24 transition-all duration-500"
                                    animate={{
                                        x: ["0%", "-30%", "0%"],
                                        y: ["0%", "-20%", "0%"],
                                    }}
                                    transition={{
                                        duration: 18 + index * 2,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                        delay: index * 2
                                    }}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <motion.div
                        className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
                        style={{ y: y1, x: y2 }}
                    />
                    <motion.div
                        className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
                        style={{ y: y3, x: y4 }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default HowItWorks;