import React from 'react';
import { FramedHero } from '../components/FramedHero';
import { BottomNav } from '../components/BottomNav';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <div className="min-h-screen bg-background bg-noise">
            <FramedHero />
            <BottomNav />
            <Footer />
        </div>
    );
};
