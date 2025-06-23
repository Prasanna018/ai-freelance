'use client'
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect } from "react";

const HeroSection = () => {
    const colors = ["#8B5CF6", "#3B82F6", "#EC4899", "#10B981", "#F59E0B"];
    const color = useMotionValue(colors[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 40%, ${color})`;
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0 4px 24px ${color}`;

    useEffect(() => {
        animate(color, colors, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
        });
    }, []);

    // Enhanced quantum connection lines with faster animation
    const QuantumConnections = () => {
        const connections = Array.from({ length: 24 }).map((_, i) => {
            const duration = Math.random() * 3 + 2; // Faster duration (2-5 seconds)
            const delay = Math.random() * 2;
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            const strokeWidth = Math.random() * 0.5 + 0.3; // Thicker lines
            const opacity = Math.random() * 0.4 + 0.3; // More visible

            return (
                <motion.svg
                    key={i}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <motion.path
                        d={`M${startX},${startY} Q${50 + (Math.random() * 30 - 15)},${50 + (Math.random() * 30 - 15)} ${Math.random() * 100},${Math.random() * 100}`}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray="0.5 1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: opacity,
                            stroke: colors[Math.floor(Math.random() * colors.length)]
                        }}
                        transition={{
                            duration,
                            delay,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                        }}
                    />
                </motion.svg>
            );
        });

        return <div className="absolute inset-0 opacity-70 mix-blend-screen">{connections}</div>;
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Animated background */}
            <motion.div
                className="absolute inset-0"
                style={{ backgroundImage }}
            >
                {/* Enhanced quantum connection network */}
                <QuantumConnections />

                {/* Floating quantum nodes - now brighter */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full mix-blend-screen"
                        style={{
                            background: `radial-gradient(circle, ${colors[i % colors.length]} 0%, transparent 70%)`,
                            width: `${Math.random() * 12 + 8}px`,
                            height: `${Math.random() * 12 + 8}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: 0.8,
                            filter: "blur(1px)"
                        }}
                        animate={{
                            x: [0, Math.random() * 100 - 50],
                            y: [0, Math.random() * 100 - 50],
                            opacity: [0.6, 1, 0.6],
                        }}
                        transition={{
                            duration: Math.random() * 8 + 5, // Faster movement
                            delay: Math.random() * 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </motion.div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Main headline */}
                    <motion.h1
                        className="text-5xl md:text-8xl font-bold mb-6"
                        style={{
                            background: `linear-gradient(90deg, ${colors.join(', ')})`,
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            backgroundSize: '300% 300%',
                        }}
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%']
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear",
                        }}
                    >
                        AXOM
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        className="text-xl md:text-3xl text-gray-300 mb-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        Quantum-Enhanced Language Architectures
                    </motion.p>

                    {/* DApp launch button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 30px var(--tw-shadow-color)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                border,
                                boxShadow,
                                //  @ts-expect-error
                                "--tw-shadow-color": color
                            }}
                            className="px-12 py-4 rounded-full bg-black/30 backdrop-blur-md text-white font-bold text-lg relative overflow-hidden group"
                        >
                            <span className="relative z-10">Launch dApp</span>
                            <motion.span
                                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100"
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Floating tech tagline */}
                <motion.div
                    className="absolute bottom-20 left-0 right-0 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.8, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <p className="text-sm md:text-base text-gray-300 font-medium">
                        Revolutionizing MCP With QEDA Architecture
                    </p>
                </motion.div>
            </div>
        </div >
    );
};

export default HeroSection;