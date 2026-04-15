import React from 'react';
import { Leaf, Camera, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    // Navigate to login page with redirect state to admin
    navigate('/login', { state: { from: { pathname: '/admin' } } });
  };

  return (
    <footer className="bg-earth-dark text-earth-cream pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-earth-sand" />
              <span className="font-serif text-2xl font-bold tracking-tight">Selarasa</span>
            </Link>
            <p className="text-earth-cream/70 text-sm leading-relaxed mb-6 font-sans flex items-center gap-2 flex-wrap">
              Inisiatif kolektif berbasis komunitas yang bergerak di bidang pangan lokal, urban farming, dan ruang eksplorasi publik.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-earth-sand hover:text-white transition-colors">
                <Camera className="h-5 w-5" />
              </a>
              <a href="#" className="text-earth-sand hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <span
                onClick={handleAdminClick}
                className="inline-flex items-center justify-center cursor-pointer hover:opacity-70 hover:scale-110 transition-all duration-300 select-none"
                title=""
                role="button"
                aria-label="Admin"
              >
                ⚜️
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-earth-sand">Navigasi</h3>
            <ul className="space-y-3 text-sm text-earth-cream/80">
              <li><Link to="/about" className="hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link to="/program" className="hover:text-white transition-colors">Program & Praktik</Link></li>
              <li><Link to="/proyek" className="hover:text-white transition-colors">Karya & Kolaborasi</Link></li>
              <li><Link to="/katalog" className="hover:text-white transition-colors">Katalog Produk</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-earth-sand">Fokus</h3>
            <ul className="space-y-3 text-sm text-earth-cream/80">
              <li><Link to="/fokus" className="hover:text-white transition-colors">Pangan Lokal</Link></li>
              <li><Link to="/fokus" className="hover:text-white transition-colors">Urban Farming</Link></li>
              <li><Link to="/fokus" className="hover:text-white transition-colors">Praktik Kolektif</Link></li>
              <li><Link to="/jaringan" className="hover:text-white transition-colors">Jaringan Komunitas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4 text-earth-sand">Kontak</h3>
            
            {/* Peta Jagakarsa */}
            <div className="mb-4 rounded-xl overflow-hidden">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Jl.+Durian+No.30A,+RT.4%2FRW.4,+Jagakarsa,+Kec.+Jagakarsa,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12620"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform"
              >
                <img 
                  src="/peta-jagakarsa.png" 
                  alt="Peta Lokasi Jagakarsa - Selarasa Kolektif"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </a>
            </div>

            <ul className="space-y-3 text-sm text-earth-cream/80 relative">
              <li className="mt-2 pt-3 border-t border-earth-cream/10">
                <Link 
                  to="/partisipasi" 
                  className="inline-flex items-center gap-2 text-earth-sand hover:text-white underline underline-offset-4 decoration-earth-sand/50 hover:decoration-white transition-all font-medium"
                >
                  <span>Form Kolaborasi & Barter</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-earth-cream/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-earth-cream/50">
          <p>&copy; {new Date().getFullYear()} Selarasa Kolektif. Diperkuat oleh semangat komunitas.</p>
          <p className="mt-2 md:mt-0">Ditanam dan dirawat dengan sepenuh hati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
