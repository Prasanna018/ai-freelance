import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Zap } from "lucide-react"

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-black relative overflow-hidden">
            {/* Animated background network */}
            <div className="absolute inset-0">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1200 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Grid pattern */}
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(75, 85, 99)" strokeWidth="0.5" opacity="0.2" />
                        </pattern>

                        {/* Gradient for flowing lines */}
                        <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0">
                                <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8">
                                <animate attributeName="stop-opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0">
                                <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                            </stop>
                            <animateTransform
                                attributeName="gradientTransform"
                                type="translate"
                                values="-100 0;100 0;-100 0"
                                dur="4s"
                                repeatCount="indefinite"
                            />
                        </linearGradient>

                        <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0">
                                <animate attributeName="stop-opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                            </stop>
                            <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.6">
                                <animate
                                    attributeName="stop-opacity"
                                    values="0.6;0;0.6"
                                    dur="2.5s"
                                    repeatCount="indefinite"
                                    begin="0.5s"
                                />
                            </stop>
                            <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0">
                                <animate attributeName="stop-opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                            </stop>
                            <animateTransform
                                attributeName="gradientTransform"
                                type="translate"
                                values="-100 -100;100 100;-100 -100"
                                dur="3.5s"
                                repeatCount="indefinite"
                                begin="0.5s"
                            />
                        </linearGradient>

                        <linearGradient id="flowGradient3" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0">
                                <animate attributeName="stop-opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="1s" />
                            </stop>
                            <stop offset="50%" stopColor="rgb(16, 185, 129)" stopOpacity="0.7">
                                <animate
                                    attributeName="stop-opacity"
                                    values="0.7;0;0.7"
                                    dur="3.5s"
                                    repeatCount="indefinite"
                                    begin="1s"
                                />
                            </stop>
                            <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0">
                                <animate attributeName="stop-opacity" values="0;1;0" dur="3.5s" repeatCount="indefinite" begin="1s" />
                            </stop>
                            <animateTransform
                                attributeName="gradientTransform"
                                type="translate"
                                values="-100 100;100 -100;-100 100"
                                dur="4.5s"
                                repeatCount="indefinite"
                                begin="1s"
                            />
                        </linearGradient>
                    </defs>

                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Main network lines with flowing animation */}
                    <g className="animate-pulse">
                        {/* Horizontal flowing lines */}
                        <line x1="0" y1="200" x2="1200" y2="200" stroke="url(#flowGradient1)" strokeWidth="2" opacity="0.6" />
                        <line x1="0" y1="400" x2="1200" y2="400" stroke="url(#flowGradient1)" strokeWidth="2" opacity="0.4" />
                        <line x1="0" y1="600" x2="1200" y2="600" stroke="url(#flowGradient1)" strokeWidth="2" opacity="0.5" />

                        {/* Vertical flowing lines */}
                        <line x1="300" y1="0" x2="300" y2="800" stroke="url(#flowGradient2)" strokeWidth="2" opacity="0.4" />
                        <line x1="600" y1="0" x2="600" y2="800" stroke="url(#flowGradient2)" strokeWidth="2" opacity="0.6" />
                        <line x1="900" y1="0" x2="900" y2="800" stroke="url(#flowGradient2)" strokeWidth="2" opacity="0.3" />

                        {/* Diagonal flowing lines */}
                        <line x1="0" y1="0" x2="1200" y2="800" stroke="url(#flowGradient3)" strokeWidth="1.5" opacity="0.3" />
                        <line x1="1200" y1="0" x2="0" y2="800" stroke="url(#flowGradient3)" strokeWidth="1.5" opacity="0.4" />
                        <line x1="0" y1="400" x2="600" y2="0" stroke="url(#flowGradient3)" strokeWidth="1.5" opacity="0.2" />
                        <line x1="600" y1="800" x2="1200" y2="400" stroke="url(#flowGradient3)" strokeWidth="1.5" opacity="0.3" />
                    </g>

                    {/* Animated connection nodes */}
                    <g>
                        {/* Main intersection nodes */}
                        <circle cx="300" cy="200" r="4" fill="rgb(147, 51, 234)" opacity="0.8">
                            <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="600" cy="400" r="5" fill="rgb(59, 130, 246)" opacity="0.9">
                            <animate attributeName="r" values="5;10;5" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                            <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
                        </circle>
                        <circle cx="900" cy="600" r="4" fill="rgb(16, 185, 129)" opacity="0.7">
                            <animate attributeName="r" values="4;7;4" dur="3s" repeatCount="indefinite" begin="1s" />
                            <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" begin="1s" />
                        </circle>

                        {/* Secondary nodes */}
                        <circle cx="150" cy="300" r="3" fill="rgb(147, 51, 234)" opacity="0.6">
                            <animate attributeName="r" values="3;6;3" dur="2.2s" repeatCount="indefinite" begin="0.3s" />
                        </circle>
                        <circle cx="450" cy="150" r="3" fill="rgb(59, 130, 246)" opacity="0.5">
                            <animate attributeName="r" values="3;5;3" dur="2.8s" repeatCount="indefinite" begin="0.8s" />
                        </circle>
                        <circle cx="750" cy="500" r="3" fill="rgb(16, 185, 129)" opacity="0.6">
                            <animate attributeName="r" values="3;6;3" dur="2.4s" repeatCount="indefinite" begin="1.2s" />
                        </circle>
                        <circle cx="1050" cy="250" r="3" fill="rgb(147, 51, 234)" opacity="0.4">
                            <animate attributeName="r" values="3;5;3" dur="3.2s" repeatCount="indefinite" begin="0.7s" />
                        </circle>
                    </g>

                    {/* Floating particles */}
                    <g>
                        <circle cx="100" cy="100" r="2" fill="rgb(147, 51, 234)" opacity="0.6">
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="0 0;1100 700;0 0"
                                dur="15s"
                                repeatCount="indefinite"
                            />
                            <animate attributeName="opacity" values="0.6;0;0.6" dur="15s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="1100" cy="150" r="1.5" fill="rgb(59, 130, 246)" opacity="0.5">
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="0 0;-1000 650;0 0"
                                dur="12s"
                                repeatCount="indefinite"
                                begin="2s"
                            />
                            <animate attributeName="opacity" values="0.5;0;0.5" dur="12s" repeatCount="indefinite" begin="2s" />
                        </circle>
                        <circle cx="200" cy="700" r="2" fill="rgb(16, 185, 129)" opacity="0.4">
                            <animateTransform
                                attributeName="transform"
                                type="translate"
                                values="0 0;800 -600;0 0"
                                dur="18s"
                                repeatCount="indefinite"
                                begin="4s"
                            />
                            <animate attributeName="opacity" values="0.4;0;0.4" dur="18s" repeatCount="indefinite" begin="4s" />
                        </circle>
                    </g>
                </svg>
            </div>

            {/* Purple play button in top right */}
            <div className="absolute top-8 right-8 z-20">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/25">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
                {/* Top badge */}
                <Badge
                    variant="secondary"
                    className="mb-12 bg-gray-900/50 text-gray-300 border-gray-800 px-4 py-2 text-sm backdrop-blur-sm hover:bg-gray-800/50 transition-colors duration-300"
                >
                    <Zap className="w-4 h-4 mr-2" />
                    Extend your LLMs capabilities with AXOM
                </Badge>

                {/* Main heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 max-w-5xl leading-tight">
                    Revolutionizing MCP With QEDA Architecture
                </h1>

                {/* Launch button */}
                <Button
                    size="lg"
                    className="mb-16 bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                    Launch dApp
                </Button>

                {/* Central diagram with enhanced animation */}
                <div className="relative mb-16 w-24 h-24 mx-auto">
                    <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center border border-gray-800 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
                        {/* Animated logo */}
                        <div className="w-8 h-8 bg-white transform rotate-45 rounded-sm animate-pulse"></div>
                    </div>

                    {/* Enhanced connecting lines from center */}
                    <div className="absolute inset-0 pointer-events-none">
                        <svg className="w-full h-full" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0" />
                                    <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.8" />
                                    <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0" />
                                    <animateTransform
                                        attributeName="gradientTransform"
                                        type="translate"
                                        values="-50 0;50 0;-50 0"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </linearGradient>
                            </defs>
                            <g stroke="url(#centerGradient)" strokeWidth="2" opacity="0.8">
                                <line x1="48" y1="0" x2="48" y2="20" />
                                <line x1="48" y1="76" x2="48" y2="96" />
                                <line x1="0" y1="48" x2="20" y2="48" />
                                <line x1="76" y1="48" x2="96" y2="48" />
                                <line x1="20" y1="20" x2="32" y2="32" />
                                <line x1="64" y1="32" x2="76" y2="20" />
                                <line x1="32" y1="64" x2="20" y2="76" />
                                <line x1="76" y1="76" x2="64" y2="64" />
                            </g>
                        </svg>
                    </div>

                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: "20s" }}>
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full opacity-60"></div>
                        <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"></div>
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full opacity-60"></div>
                        <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50"></div>
                    </div>
                </div>

                {/* Bottom badge */}
                <button className="bg-black no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block border border-gray-800">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                    </span>
                    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-black py-2 px-6 ring-1 ring-white/10">
                        <span className="text-xl">{`Launch DAPPS`}</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                            ></path>
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>
            </div>

            {/* Additional floating elements */}
            <div
                className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "0s", animationDuration: "3s" }}
            ></div>
            <div
                className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-bounce"
                style={{ animationDelay: "1s", animationDuration: "4s" }}
            ></div>
            <div
                className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full opacity-50 animate-bounce"
                style={{ animationDelay: "2s", animationDuration: "3.5s" }}
            ></div>

            {/* Fixed position for the bottom badge */}
            {/* <div className="absolute pt-10 bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex w-fit items-center gap-2 rounded-full border border-black bg-white px-3 py-2 text-xs font-normal leading-[1.0625rem] text-primary md:text-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white bg-black p-[0.21431rem]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                        >
                            <path
                                d="M8.10709 8.69371L4.19235 0.407776C4.1028 0.218238 4.24106 0 4.45069 0H7.63417C7.74469 0 7.84529 0.0637385 7.89251 0.163667L11.8072 8.4496C11.8968 8.63914 11.7585 8.85738 11.5489 8.85738H8.36544C8.25491 8.85738 8.15431 8.79364 8.10709 8.69371Z"
                                fill="white"
                            />
                            <path
                                d="M2.5908 9.01241C2.49074 8.82859 2.29819 8.71417 2.08889 8.71417H0.259443C0.0657982 8.71415 -0.0594578 8.52227 0.0285406 8.36044L1.26357 6.0915C1.74481 5.20745 3.09108 5.20746 3.57234 6.0915L4.83769 8.41594C4.93775 8.59976 5.1303 8.71417 5.33958 8.71417H7.16905C7.36273 8.71417 7.48802 8.90628 7.39995 9.06813L6.16493 11.3371C5.68366 12.2211 4.33741 12.2211 3.85615 11.3371L2.5908 9.01241Z"
                                fill="white"
                            />
                        </svg>
                    </span>
                    Bringing Scalable MCPs Together
                </div>
            </div> */}
        </div>
    )
}