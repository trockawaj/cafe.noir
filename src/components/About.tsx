import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const About = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section id="about" className="py-24 bg-background relative px-6 overflow-hidden">
            <div className="container mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <h2 className="font-serif text-5xl md:text-7xl text-white tracking-wider mb-8">ABOUT</h2>
                    <p className="text-primary tracking-[0.2em] text-sm uppercase">Our Philosophy</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-muted font-light leading-loose text-justify"
                    >
                        <h3 className="text-2xl text-white font-serif mb-6">
                            静寂を、味わう。
                        </h3>
                        <p>
                            都市の喧騒から一歩離れ、時間がゆっくりと流れる場所。<br />
                            NOIRは、単なるカフェではなく、自分自身を取り戻すためのサンクチュアリです。
                        </p>
                        <p>
                            厳選された豆、熟練のバリスタによる抽出、そして計算された音響と照明。<br />
                            そのすべてが、あなたの五感に響く「最良の孤独」を演出します。
                        </p>
                        <motion.p
                            className="pt-4 border-t border-white/10 mt-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <span className="block text-xs tracking-widest text-white/40 mb-2">ESTABLISHED</span>
                            2024, TOKYO
                        </motion.p>
                    </motion.div>

                    <div className="relative">
                        <motion.div
                            style={{ y }}
                            className="aspect-[3/4] overflow-hidden"
                        >
                            <img src="/images/interior-4.png" alt="Espresso" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </motion.div>
                        {/* Decorative Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute -top-6 -right-6 w-full h-full border border-primary/30 -z-10 hidden md:block"
                        />
                    </div>
                </div>
            </div>

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
        </section>
    );
};
