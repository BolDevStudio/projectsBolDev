// src/components/TestDots.js
import React from 'react';
import { motion } from 'framer-motion';

const TestDots = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full">
            <motion.div
                className="absolute bg-yellow-400 rounded-full"
                style={{ width: 20, height: 20, left: 100, top: 100 }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
            />
        </div>
    );
};

export default TestDots;
