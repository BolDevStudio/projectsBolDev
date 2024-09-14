import React from "react";
import { motion } from "framer-motion";
import lukas from "../assets/lukasz_bolisega.JPG";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-between">
            {/* Treść główna */}
            <div className="relative z-10 flex flex-col justify-center w-1/2 px-8 text-center">
                <h1 className="text-7xl font-extrabold text-yellow-500">
                    Moje <span className="text-green-500">Portfolio</span>
                </h1>
                <p className="mt-4 text-xl text-yellow-500">
                    Nowoczesne rozwiązania dla dynamicznych projektów.
                </p>

                {/* Przycisk */}
                <motion.a
                    href="#projects"
                    className="mt-8 inline-block px-6 py-3 border border-green-500 hover:border-yellow-500 text-green-400 font-semibold rounded-full hover:bg-yellow-500 hover:text-black transition-colors text-lg max-w-max mx-auto"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Zobacz Projekty
                </motion.a>
            </div>

            {/* Obraz z gradientem */}
            <div className="relative w-1/2 h-screen flex items-center justify-end">
                <div className="relative w-full h-full">
                    <img
                        src={lukas}
                        alt="lukasz bolisega"
                        className="w-full h-full object-cover"
                    />
                    {/* Nakładka z gradientem */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-900"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
