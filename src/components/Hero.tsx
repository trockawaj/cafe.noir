import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const images = [
    "/images/main-visual.png",
    "/images/interior-3.png",
    "/images/interior-5.png"
];

export const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        // "h-screen w-full" ensures it takes full viewport. 
        // Added "m-0 p-0" to safety check, though usually handled by reset.
        <section className="relative h-screen w-full overflow-hidden bg-black m-0 p-0">
            {/* Image Slider */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={images[index]}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover opacity-60"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Explicit inline style as backup
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="space-y-6"
                >
                    {/* Logo-like Title */}
                    <h1 className="font-serif text-6xl md:text-8xl tracking-widest text-white mb-2">
                        NOIR<span className="text-primary">.</span>
                    </h1>
                    <p className="text-xs md:text-sm tracking-[0.4em] text-primary uppercase">
                        Sense of Silence
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <span className="text-[10px] tracking-widest text-white/50 mb-2 block text-center">SCROLL</span>
                <div className="w-[1px] h-12 bg-white/20 mx-auto relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 w-full h-full bg-primary"
                        animate={{ y: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};
