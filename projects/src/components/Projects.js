import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Projekt 1',
        description: 'Krótki opis projektu 1.',
        imageUrl: 'https://via.placeholder.com/300',
        link: '#'
    },
    {
        id: 2,
        title: 'Projekt 2',
        description: 'Krótki opis projektu 2.',
        imageUrl: 'https://via.placeholder.com/300',
        link: '#'
    },

];

const Projects = () => {
    return (
        <section className="min-h-screen py-16 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-5xl font-extrabold text-yellow-500 mb-8">
                    Moje Projekty
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map(({ id, title, description, imageUrl, link }) => (
                        <motion.div
                            key={id}
                            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-yellow-500 mb-2">{title}</h3>
                                <p className="text-gray-300 mb-4">{description}</p>
                                <a
                                    href={link}
                                    className="text-green-500 hover:text-yellow-500 font-semibold"
                                >
                                    Zobacz więcej
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
