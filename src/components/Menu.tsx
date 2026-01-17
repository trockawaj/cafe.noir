import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X } from 'lucide-react';

// Translated Categories and Items
const categories = [
    {
        id: 'espresso',
        name: 'エスプレッソ', // ESPRESSO
        desc: 'コクと深み',     // Rich & Bold
        items: [
            { name: 'エスプレッソ', price: '¥450' },
            { name: 'カフェラテ', price: '¥600' },
            { name: 'カプチーノ', price: '¥600' },
            { name: 'エスプレッソトニック', price: '¥700' }
        ]
    },
    {
        id: 'drip',
        name: 'ハンドドリップ', // HAND DRIP
        desc: '香りと純粋さ',   // Pure & Aromatic
        items: [
            { name: 'ハウスブレンド', price: '¥600' },
            { name: 'エチオピア イルガチェフェ', price: '¥700' },
            { name: 'コロンビア エクセルソ', price: '¥650' }
        ]
    },
    {
        id: 'sweets',
        name: 'スイーツ', // SWEETS
        desc: '至福のペアリング', // Perfect Pairing
        items: [
            { name: 'クラシックプリン', price: '¥500' },
            { name: 'バスクチーズケーキ', price: '¥600' },
            { name: 'ガトーショコラ', price: '¥600' }
        ]
    },
    {
        id: 'food',
        name: 'フード', // FOOD
        desc: '軽食',     // Light Meal
        items: [
            { name: 'アボカドトースト', price: '¥850' },
            { name: 'クロックムッシュ', price: '¥900' }
        ]
    },
];

export const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null);

    React.useEffect(() => {
        if (selectedCategory) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedCategory]);

    return (
        <section id="menu" className="py-32 bg-surface/30 relative">
            <div className="container mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="font-serif text-5xl text-white tracking-wider mb-20"
                >
                    MENU
                </motion.h2>

                {/* Category Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {categories.map((cat, idx) => (
                        <motion.button
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setSelectedCategory(cat)}
                            className="border border-white/10 py-16 px-6 flex flex-col items-center justify-center group transition-colors hover:border-primary/50 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <span className="font-serif text-lg md:text-xl text-white group-hover:text-primary mb-3 transition-colors relative z-10">{cat.name}</span>
                            <span className="text-xs text-muted tracking-widest relative z-10">{cat.desc}</span>
                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
                                <ChevronRight className="text-primary w-6 h-6" />
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Modal for details */}
            <AnimatePresence>
                {selectedCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                        onClick={() => setSelectedCategory(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#111] border border-white/10 p-8 md:p-16 w-full max-w-xl relative shadow-2xl shadow-black"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className="absolute top-6 right-6 text-white/30 hover:text-white transition-colors"
                            >
                                <X size={28} />
                            </button>

                            <h3 className="font-serif text-3xl md:text-4xl text-primary mb-2 tracking-wide">{selectedCategory.name}</h3>
                            <p className="text-muted text-xs mb-10 tracking-[0.2em] uppercase">{selectedCategory.desc}</p>

                            <ul className="space-y-6">
                                {selectedCategory.items.map((item, idx) => (
                                    <motion.li
                                        key={item.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                        className="flex justify-between items-baseline border-b border-dashed border-white/10 pb-3"
                                    >
                                        <span className="text-white text-base md:text-lg font-light">{item.name}</span>
                                        <span className="text-primary font-serif italic text-lg">{item.price}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
