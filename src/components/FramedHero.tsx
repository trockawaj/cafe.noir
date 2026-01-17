import React from 'react';
import { motion } from 'framer-motion';

export const FramedHero = () => {
    return (
        <div className="w-full flex justify-center items-center py-20 px-4 relative z-10">
            {/* Spotlight Effect behind frame */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial-gradient from-white/5 to-transparent blur-3xl -z-10 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative shadow-2xl"
            >
                {/* Frame Structure - Vintage Black Wood */}
                <div className="p-6 bg-[#0f0f0f] shadow-[0_0_50px_rgba(0,0,0,0.8),_inset_0_0_20px_rgba(0,0,0,1)] border border-[#222]">
                    {/* Inner Gold/Brass Trim */}
                    <div className="p-1 border border-white/10 outline outline-1 outline-black/50">
                        <div className="relative aspect-[4/3] w-full max-w-4xl md:w-[800px] overflow-hidden bg-black shadow-inner">
                            <img
                                src="/images/main-visual.png"
                                alt="Cafe Atmosphere"
                                className="w-full h-full object-cover opacity-80"
                            />
                            {/* Overlay Text inside Frame */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
                                <h1 className="font-serif text-5xl md:text-7xl text-white tracking-widest mb-4 drop-shadow-2xl">
                                    NOIR<span className="text-primary">.</span>
                                </h1>
                                <p className="text-xs tracking-[0.4em] text-white/80 uppercase drop-shadow-md">
                                    Sense of Silence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
