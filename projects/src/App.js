import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Projects from "./components/Projects";
import Hero from "./components/Hero";

const App = () => {
    const [mouseTrail, setMouseTrail] = useState([]);
    const [isMouseMoving, setIsMouseMoving] = useState(true);
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { pageX: x, pageY: y } = event;

            setMouseTrail((trail) => [
                ...trail,
                { x, y, id: Math.random(), size: Math.random() * 4 + 1 },
            ]);

            setIsMouseMoving(true);

            if (mouseTrail.length > 30) {
                setMouseTrail((trail) => trail.slice(1));
            }

            clearTimeout(stopTimeout);
            stopTimeout = setTimeout(() => setIsMouseMoving(false), 200);
        };

        const handleScroll = () => {
            setScrollOffset(window.scrollY); // Zapisuje aktualny scroll offset
        };

        let stopTimeout = setTimeout(() => setIsMouseMoving(false), 200);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll); // Śledzenie przewijania

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(stopTimeout);
        };
    }, [mouseTrail]);

    const getRandomPosition = () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return { x, y };
    };

    return (
        <div className="relative min-h-screen bg-neutral-900 overflow-x-hidden">
            {/* Cząsteczki - tło na całej stronie */}
            <div className="fixed inset-0 z-0 pointer-events-none"> {/* Zmienione na fixed */}
                {mouseTrail.map(({ x, y, id, size }, index) => (
                    <motion.div
                        key={id}
                        className="absolute rounded-full bg-yellow-400 pointer-events-none"
                        style={{
                            width: size,
                            height: size,
                            left: isMouseMoving ? x - size / 2 : getRandomPosition().x - size / 2,
                            top: isMouseMoving
                                ? y - size / 2 - scrollOffset // Odejmij scrollOffset od pozycji Y
                                : getRandomPosition().y - size / 2,
                        }}
                        animate={{
                            left: isMouseMoving ? x - size / 2 : getRandomPosition().x - size / 2,
                            top: isMouseMoving
                                ? y - size / 2 - scrollOffset // Odejmij scrollOffset od pozycji Y
                                : getRandomPosition().y - size / 2,
                            opacity: 1,
                            scale: isMouseMoving ? 1 : [1, 1.2, 1], // Pulsowanie po rozproszeniu
                        }}
                        transition={{
                            duration: 0.5,
                            delay: isMouseMoving ? 0 : index * 0.02,
                        }}
                    />
                ))}
            </div>

            {/* Zawartość strony */}
            <div className="relative z-10">
                <Hero />
                <Projects />
            </div>
        </div>
    );
};

export default App;
