import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
    '/images/interior-3.png',
    '/images/main-visual.png',
    '/images/interior-5.png',
];

export const Gallery = () => {
    const { scrollYProgress } = useScroll();
    const x1 = useTransform(scrollYProgress, [0.8, 1], [0, -100]);
    const x2 = useTransform(scrollYProgress, [0.8, 1], [0, 100]);

    return (
        <section id="gallery" className="py-24 bg-black overflow-hidden relative">
            <div className="text-center mb-16 relative z-10">
                <h2 className="font-serif text-3xl text-white/50 tracking-widest uppercase">Atmosphere</h2>
            </div>

            <div className="flex flex-col gap-4 opacity-60 hover:opacity-100 transition-opacity duration-700">
                {/* Row 1 - Left Movement */}
                <motion.div style={{ x: x1 }} className="flex gap-4 min-w-max pl-4">
                    {images.map((src, i) => (
                        <div key={i} className="w-[400px] h-[250px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                            <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                    ))}
                    {images.map((src, i) => (
                        <div key={`dup-${i}`} className="w-[400px] h-[250px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                            <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                    ))}
                </motion.div>

                {/* Row 2 - Right Movement (Different set if available, reusing for demo) */}
                <motion.div style={{ x: x2 }} className="flex gap-4 min-w-max -ml-20">
                    {[...images].reverse().map((src, i) => (
                        <div key={i} className="w-[400px] h-[250px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                            <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                    ))}
                    {[...images].reverse().map((src, i) => (
                        <div key={`dup-${i}`} className="w-[400px] h-[250px] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                            <img src={src} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />
        </section>
    );
};
