import React from 'react';
import { motion } from 'framer-motion';

export const FramedHero = () => {
    return (
        <div className="w-full flex justify-center items-center py-20 px-4 relative">
            {/* Subtle Gradient behind Main Visual to separate from beans */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-black/60 to-transparent blur-xl -z-10" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative max-w-5xl w-full"
            >
                {/* Main Visual Image - Floating */}
                <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden shadow-2xl rounded-sm">
                    <img
                        src="/images/main-visual.png"
                        alt="Cafe Atmosphere"
                        className="w-full h-full object-cover opacity-90"
                    />
                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30">
                        <h1 className="font-serif text-5xl md:text-8xl text-white tracking-widest mb-4 drop-shadow-2xl">
                            NOIR<span className="text-primary">.</span>
                        </h1>
                        <p className="text-xs md:text-sm tracking-[0.5em] text-white/90 uppercase drop-shadow-md">
                            Sense of Silence
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
