import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-earth-cream py-12 border-t border-earth-sand/30 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-earth-dark/80 text-sm md:text-base leading-relaxed font-serif">
                    “Inisiatif kolektif berbasis komunitas yang bergerak di bidang pangan lokal, urban farming, dan ruang eksplorasi publik.”
                    <Link
                        to="/admin"
                        className="inline-block ml-2 transition-all duration-300 hover:scale-150 hover:rotate-12 cursor-pointer select-none"
                        title="Akses Admin"
                    >
                        ⚜️
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;