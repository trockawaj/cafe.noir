import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cn = (...inputs: (string | undefined | null | false)[]) => {
        return twMerge(clsx(inputs));
    };

    // Updated Navigation Items based on user request
    // About -> CONCEPT, Menu -> MENU, Shops -> ACCESS, Contact -> CONTACT
    const navItems = [
        { name: 'CONCEPT', href: '#about' }, // Mapping Concept to About section
        { name: 'MENU', href: '#menu' },
        { name: 'ACCESS', href: '#shops' },  // Mapping Access to Shops section
        { name: 'CONTACT', href: '#footer' }, // Mapping Contact to Footer (or a specific contact section if created)
    ];

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
                isScrolled ? 'glass py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 grid grid-cols-3 items-center">
                {/* Left: Nav (Desktop) - First 2 items */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.slice(0, 2).map(item => (
                        <a key={item.name} href={item.href} className="text-xs tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Center: Logo (Shop Name) */}
                <div className="flex justify-center">
                    <a href="#" className={cn(
                        "font-serif font-bold tracking-widest text-white transition-all duration-500",
                        isScrolled ? "text-xl" : "text-2xl"
                    )}>
                        NOIR<span className="text-primary">.</span>
                    </a>
                </div>

                {/* Right: Nav (Desktop) - Last 2 items + Hamburger */}
                <div className="flex justify-end items-center gap-8">
                    <nav className="hidden md:flex space-x-8">
                        {navItems.slice(2).map(item => (
                            <a key={item.name} href={item.href} className="text-xs tracking-widest text-white/70 hover:text-white transition-colors uppercase">
                                {item.name}
                            </a>
                        ))}
                    </nav>
                    {/* Mobile Menu Icon */}
                    <button
                        className="md:hidden text-white hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <MenuIcon size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col justify-center items-center"
                    >
                        <button
                            className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <X size={32} />
                        </button>
                        <nav className="flex flex-col space-y-8 text-center">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="font-serif text-3xl hover:text-primary transition-colors duration-300 text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
