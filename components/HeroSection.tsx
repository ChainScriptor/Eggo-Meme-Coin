import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative min-h-[800px] px-4 py-12 overflow-hidden">
            {/* Space Background with Stars */}
            <div className="absolute inset-0">
                <div className="stars"></div>
                <div className="twinkling"></div>
            </div>

            {/* Planets */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full glow-sun animate-pulse"></div>
                <div className="absolute top-40 left-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full planet-rotate"></div>
                <div className="absolute bottom-40 right-40 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full planet-rotate-reverse"></div>
                <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-full planet-rotate-slow"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 mb-6 leading-tight">
                        Commander EGGO's<br />
                        <span className="text-white">Space Adventure</span>
                    </h1>
                    <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                        Join our brave astronaut chicken on his epic journey through the cosmos! Escaping Earth's chaos, Commander EGGO rockets towards the Solana galaxy to build a new cosmic kingdom. 🚀
                    </p>
                    <div className="flex gap-6">
                        <button className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                            <div className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center">
                                <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                                    Buy $EGGO Now
                                </span>
                            </div>
                        </button>
                        <button className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                            <div className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center">
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    Join Mission
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <div className="relative z-20 transform hover:scale-105 transition-transform duration-300">
                        <div className="astronaut-container">
                            <img
                                src="/eggo1.png"
                                alt="Commander EGGO"
                                className="w-96 h-96 object-contain floating"
                            />
                            <div className="space-debris"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
