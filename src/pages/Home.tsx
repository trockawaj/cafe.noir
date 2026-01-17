import React from 'react';
import { FramedHero } from '../components/FramedHero';
import { BottomNav } from '../components/BottomNav';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Global Coffee Texture Background */}
            <div
                className="fixed inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: "url('/images/coffee-texture.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            {/* Global Noise Overlay */}
            <div className="fixed inset-0 z-0 bg-noise opacity-50 pointer-events-none" />

            {/* Content Container */}
            <div className="relative z-10">
                <FramedHero />
                <BottomNav />
                <Footer />
            </div>
        </div>
    );
};
