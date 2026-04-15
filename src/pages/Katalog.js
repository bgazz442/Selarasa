import React from 'react';
import { PackageOpen, ArrowRight, Wheat } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Benih Sayur Pusaka",
    origin: "Petani Lokal Lembang",
    story: "Benih ini diselamatkan dari kepunahan berkat ketekunan Kang Yadi, petani generasi ketiga yang masih memilih merawat benih lokal dibanding hibrida pabrik.",
    price: "Sistem Donasi / Barter",
    color: "bg-earth-sand/20"
  },
  {
    id: 2,
    name: "Kompos Organik Rumahan",
    origin: "Kompos Kolektif Warga",
    story: "Dihasilkan dari sisa organik dapur 15 keluarga di kawasan Jakarta Selatan yang difermentasi dengan racikan lokal. Tanah Anda akan sangat menyukainya.",
    price: "Rp 35.000 / Karung",
    color: "bg-earth-brown/10"
  },
  {
    id: 3,
    name: "Teh Bunga Telang Kerajinan",
    origin: "Ibu-ibu Kebun Komunitas",
    story: "Ditanam di pekarangan sempit, dipetik saat embun masih menempel, dan dijemur perlahan di bawah sinar matahari pagi. Sebuah teh yang menyeduh cerita.",
    price: "Rp 45.000 / Toples",
    color: "bg-earth-lightgreen/20"
  }
];

const Katalog = () => {
  return (
    <div className="animate-fade-in w-full pb-16 pt-24 md:pb-24 md:pt-32 min-h-screen bg-earth-cream">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 border-b border-earth-brown/20 pb-6 md:pb-8">
           <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-earth-dark leading-tight mb-3 md:mb-4">
                Katalog <span className="italic text-earth-brown">Cerita</span>
              </h1>
              <p className="text-earth-dark/70 max-w-xl">
                Bukan sekadar etalase barang, ini adalah dokumentasi perjalanan bahan dan keringat pembuatnya. Setiap produk memiliki asalnya sendiri.
              </p>
           </div>
           <div className="mt-8 md:mt-0 flex items-center space-x-2 text-sm font-medium text-earth-green bg-earth-green/10 px-4 py-2 rounded-full">
              <PackageOpen className="w-4 h-4" />
              <span>Tersedia untuk Barter</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-earth-sand/30 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
               
               <div className={`aspect-square w-full ${product.color} flex items-center justify-center relative overflow-hidden`}>
                  <Wheat className="w-20 h-20 text-earth-dark/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-earth-dark">
                    {product.origin}
                  </div>
               </div>
               
               <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif text-earth-dark mb-3 leading-tight">{product.name}</h3>
                  <p className="text-earth-dark/70 text-sm leading-relaxed mb-6 flex-grow">
                    "{product.story}"
                  </p>
                  
                  <div className="pt-6 border-t border-earth-sand/30 flex justify-between items-center mt-auto">
                     <span className="font-sans font-medium text-earth-brown">
                       {product.price}
                     </span>
                     <button className="text-earth-green hover:text-earth-dark transition-colors flex items-center space-x-1 font-semibold text-sm">
                       <span>Pesan</span>
                       <ArrowRight className="w-4 h-4" />
                     </button>
                  </div>
               </div>

            </div>
          ))}
        </div>

        {/* Barter Info Section */}
        <div className="mt-16 md:mt-24 bg-earth-dark text-earth-cream rounded-2xl p-6 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
           <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-earth-brown rounded-full blur-3xl opacity-50 pointer-events-none"></div>
           
           <div className="md:max-w-2xl relative z-10">
              <h2 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4">Punya sesuatu untuk dibarter?</h2>
              <p className="text-earth-cream/80 text-sm md:text-base max-w-lg mb-6 md:mb-0">
                Sistem kami terbuka untuk pertukaran nilai non-moneter. Barang, benih, atau tenaga Anda bisa divaluasikan dalam transaksi komoditas kolektif kami.
              </p>
           </div>
           
           <div className="relative z-10 w-full md:w-auto">
              <a href="/partisipasi" className="inline-block w-full md:w-auto text-center bg-earth-sand text-earth-dark px-6 py-3 rounded-full font-medium hover:bg-white transition-colors">
                Ajukan Barter
              </a>
           </div>
        </div>

      </div>

    </div>
  );
};

export default Katalog;
