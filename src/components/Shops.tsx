import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

const shops = [
    {
        name: "OMOTESANDO",
        type: "CITY SIDE",
        image: "/images/interior-1.png",
        address: "123 Omotesando, Minato-ku, Tokyo",
        tel: "03-1234-5678",
        hours: "8:00 - 22:00",
        mapLink: "#"
    },
    {
        name: "DAIKANYAMA",
        type: "PARK SIDE",
        image: "/images/interior-2.png",
        address: "456 Daikanyama, Shibuya-ku, Tokyo",
        tel: "03-8765-4321",
        hours: "9:00 - 23:00",
        mapLink: "#"
    }
];

export const Shops = () => {
    return (
        <section id="shops" className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-5xl text-center text-white tracking-wider mb-24"
                >
                    SHOPS
                </motion.h2>

                <div className="space-y-40">
                    {shops.map((shop, index) => (
                        <div key={shop.name} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center group`}>

                            {/* Image */}
                            <motion.div
                                className="w-full md:w-1/2"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <div className="relative aspect-[16/10] overflow-hidden bg-black/50">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.7 }}
                                        src={shop.image}
                                        alt={shop.name}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                    <div className="absolute top-0 left-0 bg-primary text-black px-4 py-2 text-xs font-bold tracking-widest">
                                        {shop.type}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Info */}
                            <motion.div
                                className="w-full md:w-1/2 space-y-8"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="font-serif text-5xl text-white group-hover:text-primary transition-colors duration-500">{shop.name}</h3>

                                <div className="space-y-6 text-muted font-light pt-6 border-t border-white/10">
                                    <div className="flex items-start gap-4 group/item">
                                        <MapPin className="w-5 h-5 text-white/50 group-hover/item:text-primary transition-colors shrink-0" />
                                        <span>{shop.address}</span>
                                    </div>
                                    <div className="flex items-center gap-4 group/item">
                                        <Phone className="w-5 h-5 text-white/50 group-hover/item:text-primary transition-colors shrink-0" />
                                        <span className="hover:text-white transition-colors cursor-pointer">{shop.tel}</span>
                                    </div>
                                    <div className="flex items-start gap-4 group/item">
                                        <Clock className="w-5 h-5 text-white/50 group-hover/item:text-primary transition-colors shrink-0" />
                                        <span>{shop.hours}</span>
                                    </div>
                                </div>

                                <div className="pt-8 flex gap-4">
                                    <motion.a
                                        href={shop.mapLink}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 py-4 text-center border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 text-sm tracking-widest flex items-center justify-center gap-2 group/btn"
                                    >
                                        GOOGLE MAP <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                                    </motion.a>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 py-4 bg-primary text-black font-bold hover:bg-white transition-colors duration-300 text-sm tracking-widest"
                                    >
                                        RESERVE
                                    </motion.button>
                                </div>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
