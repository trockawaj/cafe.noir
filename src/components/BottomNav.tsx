import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'CONCEPT', path: '/concept', label: 'コンセプト' },
    { name: 'MENU', path: '/menu', label: 'メニュー' },
    { name: 'ACCESS', path: '/access', label: 'アクセス' },
    { name: 'CONTACT', path: '/contact', label: 'お問い合わせ' },
];

export const BottomNav = () => {
    return (
        <nav className="w-full relative z-10 overflow-hidden">
            {/* Background Texture with Parallax-like feel */}
            <div
                className="absolute inset-0 z-0 opacity-40 bg-fixed"
                style={{
                    backgroundImage: "url('/images/coffee-texture.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

            <div className="container mx-auto px-6 py-24 relative z-10">
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24">
                    {navItems.map((item, idx) => (
                        <Link key={item.name} to={item.path} className="group text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <span className="font-serif text-2xl text-white tracking-widest group-hover:text-primary transition-colors duration-500">
                                    {item.name}
                                </span>
                                <span className="text-[10px] text-white/40 tracking-wide relative pb-1 group-hover:text-white/80 transition-colors">
                                    {item.label}
                                </span>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};
