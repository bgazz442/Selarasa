import React from 'react';
import { Leaf, Sprout, HandHeart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="animate-fade-in w-full pb-24">
      {/* Hero About */}
      <section className="bg-earth-dark text-earth-cream pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Leaf className="w-12 h-12 text-earth-sand mx-auto mb-6" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-4 md:mb-6 leading-tight">
              Cerita Tentang <span className="text-earth-sand italic">Selarasa</span>
            </h1>
            <p className="text-base md:text-xl text-earth-cream/80 max-w-2xl mx-auto leading-relaxed">
              Lebih dari sekadar nama, Selarasa adalah praktik kolektif di mana pangan, manusia, dan tanah bertemu dalam satu jalinan relasi.
            </p>
          </div>
        </div>
      </section>

      {/* Latar Belakang */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-earth-sand/5 -skew-x-12 transform origin-top hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <div className="aspect-[4/3] w-full rounded-2xl bg-earth-brown/10 overflow-hidden relative shadow-xl border border-earth-sand/20 flex justify-center items-center">
                <div className="text-center">
                   <Users className="w-16 h-16 text-earth-lightgreen/50 mx-auto" />
                   <p className="font-serif italic text-earth-brown/60 mt-4">Foto Kegiatan Komunitas</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-serif text-earth-dark mb-4 md:mb-6">Awal Mula Tumbuh</h2>
              <p className="text-earth-dark/80 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                Selarasa bermula dari kesadaran tentang jarak yang semakin jauh antara masyarakat urban dengan piring makan mereka. Tumbuh di tengah kota, inisiatif ini dirancang sebagai eksperimen ruang hidup.
              </p>
              <p className="text-earth-dark/80 leading-relaxed">
                Melalui kolaborasi lintas disiplin—dari petani, seniman, hingga ibu rumah tangga—kami mulai mengolah lahan yang tersisa, membagikan benih, dan menata ulang narasi tentang kemandirian pangan lokal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai Utama */}
      <section className="py-16 md:py-24 bg-earth-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-earth-dark mb-3 md:mb-4">Nilai yang Kami Hidupi</h2>
            <p className="text-earth-dark/70 text-sm md:text-base max-w-2xl mx-auto">
              Fondasi yang menjadi akar dari setiap inisiatif dan program Selarasa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 border-b-2 border-earth-green/20 hover:border-earth-green transition-colors">
              <div className="w-16 h-16 bg-earth-sand/30 rounded-full flex justify-center items-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-earth-green" />
              </div>
              <h3 className="text-xl font-serif font-bold text-earth-dark mb-4">Keberlanjutan Organik</h3>
              <p className="text-earth-dark/70 text-sm">Merawat tanah dan menolak ekstraksi yang merusak. Mengembalikan apa yang kita ambil ke dalam ekosistem.</p>
            </div>
            
            <div className="text-center p-6 border-b-2 border-earth-brown/20 hover:border-earth-brown transition-colors">
              <div className="w-16 h-16 bg-earth-sand/30 rounded-full flex justify-center items-center mx-auto mb-6">
                <HandHeart className="w-8 h-8 text-earth-brown" />
              </div>
              <h3 className="text-xl font-serif font-bold text-earth-dark mb-4">Solidaritas Kolektif</h3>
              <p className="text-earth-dark/70 text-sm">Percaya bahwa praktik pangan tidak bisa berjalan sendiri. Kami merawat hubungan sama pentingnya dengan merawat tanaman.</p>
            </div>

            <div className="text-center p-6 border-b-2 border-earth-lightgreen/20 hover:border-earth-lightgreen transition-colors">
              <div className="w-16 h-16 bg-earth-sand/30 rounded-full flex justify-center items-center mx-auto mb-6">
                <Sprout className="w-8 h-8 text-earth-lightgreen" />
              </div>
              <h3 className="text-xl font-serif font-bold text-earth-dark mb-4">Edukasi Terbuka</h3>
              <p className="text-earth-dark/70 text-sm">Menjadikan kebun sebagai ruang kelas tanpa dinding, memproduksi pengetahuan bersama yang terbuka untuk publik.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
