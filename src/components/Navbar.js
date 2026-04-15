import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', path: '/about' },
    { name: 'Program', path: '/program' },
    { name: 'Proyek', path: '/proyek' },
    { name: 'Fokus', path: '/fokus' },
    { name: 'Proses', path: '/proses' },
    { name: 'Artikel', path: '/artikel' },
    { name: 'Katalog', path: '/katalog' },
    { name: 'Forum', path: '/forum' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-2 md:py-3' : 'bg-transparent py-3 md:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={logo} alt="Logo Selarasa" className="h-8 md:h-10 object-contain transition-transform group-hover:scale-105" />
            <span className="font-serif text-2xl font-bold text-earth-dark tracking-tight">Selarasa</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-earth-green px-2 py-1 rounded-md
                  ${location.pathname === link.path ? 'text-earth-green font-semibold' : 'text-earth-dark/80'}
                `}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/partisipasi"
              className="bg-earth-brown text-earth-cream px-5 py-2 rounded-full text-sm font-medium hover:bg-earth-dark transition-all transform hover:-translate-y-0.5"
            >
              Terlibat
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-earth-dark hover:text-earth-green focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-earth-cream shadow-lg border-t border-earth-brown/10 absolute w-full animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-earth-dark hover:bg-earth-sand/20 hover:text-earth-green rounded-md"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
               <Link 
                  to="/partisipasi"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center bg-earth-brown text-earth-cream px-5 py-3 rounded-md text-base font-medium hover:bg-earth-dark transition-all"
                >
                  Ajakan Terlibat
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
