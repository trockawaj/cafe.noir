import React from 'react';

export const Footer = () => {
    return (
        <footer id="footer" className="bg-[#111] text-white py-12 border-t border-white/10">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-serif text-3xl mb-8">NOIR.</h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto text-sm text-gray-400 mb-12">
                    <div className="space-y-2">
                        <p className="font-bold text-white mb-4">OMOTESANDO</p>
                        <p>123 Omotesando, Minato-ku, Tokyo</p>
                        <p>03-1234-5678</p>
                    </div>
                    <div className="space-y-2">
                        <p className="font-bold text-white mb-4">DAIKANYAMA</p>
                        <p>456 Daikanyama, Shibuya-ku, Tokyo</p>
                        <p>03-8765-4321</p>
                    </div>
                </div>

                <div className="text-xs text-gray-600 tracking-widest">
                    &copy; 2024 NOIR. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
