import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';

export const ConceptPage = () => {
    return (
        <div className="min-h-screen bg-background bg-noise text-white">
            <div className="container mx-auto px-6 py-12">
                <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <div className="mb-16">
                        <h1 className="font-serif text-5xl md:text-7xl mb-8">CONCEPT</h1>
                        <p className="text-primary tracking-widest uppercase text-sm">Our Philosophy</p>
                    </div>

                    <div className="space-y-12 font-light leading-relaxed text-white/80">
                        <h3 className="text-3xl font-serif text-white">静寂を、味わう。</h3>
                        <p>
                            都市の喧騒から一歩離れ、時間がゆっくりと流れる場所。<br />
                            NOIRは、単なるカフェではなく、自分自身を取り戻すためのサンクチュアリです。
                        </p>
                        <p>
                            厳選された豆、熟練のバリスタによる抽出、そして計算された音響と照明。<br />
                            そのすべてが、あなたの五感に響く「最良の孤独」を演出します。
                        </p>
                    </div>

                    <div className="mt-20 grid gap-8">
                        <img src="/images/interior-3.png" alt="Interior" className="w-full aspect-[16/9] object-cover opacity-80" />
                        <div className="grid grid-cols-2 gap-8">
                            <img src="/images/interior-4.png" alt="Detail" className="w-full aspect-square object-cover opacity-80" />
                            <img src="/images/interior-5.png" alt="Latte" className="w-full aspect-square object-cover opacity-80" />
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};
