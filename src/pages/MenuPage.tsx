import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Menu } from '../components/Menu'; // Reusing the component BUT we might need to adjust it if it relies on IDs
import { Footer } from '../components/Footer';

export const MenuPage = () => {
    // Note: The existing Menu component has "py-32" and "bg-surface/30". 
    // We might want to wrap it or adjust styles. For now, reusing it inside a page wrapper.
    return (
        <div className="min-h-screen bg-background bg-noise">
            <div className="container mx-auto px-6 pt-12">
                <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-4 transition-colors">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
            </div>
            {/* We can reuse the Menu component logic, but maybe remove the id="#menu" if not needed, or keep it. */}
            <Menu />
            <Footer />
        </div>
    );
};
