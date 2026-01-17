import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Shops } from '../components/Shops';
import { Footer } from '../components/Footer';

export const AccessPage = () => {
    return (
        <div className="min-h-screen bg-background bg-noise">
            <div className="container mx-auto px-6 pt-12">
                <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-4 transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
            <Shops />
            <Footer />
        </div>
    );
};
