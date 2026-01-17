import React from 'react';
import { MapPin, Phone, Clock, Instagram, Twitter } from 'lucide-react';

export const Access = () => {
    return (
        <footer id="access" className="bg-black py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between gap-12">

                    {/* Brand & Info */}
                    <div className="space-y-6 md:w-1/3">
                        <a href="#" className="font-serif text-3xl font-bold tracking-widest text-white block mb-6">
                            NOIR <span className="text-primary">.</span>
                        </a>
                        <div className="space-y-4 text-muted font-light">
                            <p className="flex items-start gap-4">
                                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                                <span>
                                    123 Omotesando, Minato-ku,<br />
                                    Tokyo, Japan 107-0062
                                </span>
                            </p>
                            <p className="flex items-center gap-4">
                                <Phone size={20} className="text-primary shrink-0" />
                                <span>03-1234-5678</span>
                            </p>
                            <p className="flex items-start gap-4">
                                <Clock size={20} className="text-primary shrink-0 mt-1" />
                                <span>
                                    Mon - Fri: 8:00 - 22:00<br />
                                    Sat - Sun: 10:00 - 23:00
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Map (Placeholder) */}
                    <div className="md:w-2/3 h-64 md:h-auto min-h-[300px] bg-surface rounded-sm relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Simulating a map */}
                        <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                            <span className="text-muted text-sm tracking-widest">GOOGLE MAP AREA</span>
                        </div>
                        <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=35.665,139.712&zoom=15&size=800x400&style=feature:all|element:all|saturation:-100|lightness:-70&key=YOUR_API_KEY_HERE')] bg-cover bg-center opactiy-50" />
                        {/* Since we don't have a real API key, we use a dark placeholder or simple noise */}
                        <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center border border-white/10">
                            <p className="font-serif text-muted">Map View</p>
                        </div>
                    </div>

                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/50">
                    <p>&copy; 2024 NOIR COFFEE. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors"><Instagram size={18} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
