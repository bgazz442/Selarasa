import React, { useState } from 'react';
import { ArrowUpRight, Leaf, Layers, Lightbulb } from 'lucide-react';

const Proyek = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Agroforestri Kopi Jahe",
      subtitle: "Pengembangan kawasan pertanian terintegrasi",
      category: "Proyek",
      image: "/images/kopi.png",
      description: "Penanaman kopi arabika dan jahe merah di bawah naungan pohon pelindung untuk menciptakan sistem pertanian berkelanjutan.",
      year: "2023",
      tags: ["Pertanian", "Keberlanjutan", "Agroforestri"]
    },
    {
      id: 2,
      title: "Biodigester Skala Komunitas",
      subtitle: "Energi terbarukan dari limbah organik",
      category: "Inovasi",
      image: "/images/pa.png",
      description: "Pengembangan instalasi biodigester untuk mengolah limbah organik komunitas menjadi biogas dan pupuk organik.",
      year: "2023",
      tags: ["Energi", "Lingkungan", "Komunitas"]
    },
    {
      id: 3,
      title: "Kebun Sayur Pasar Kaget",
      subtitle: "Produksi pangan lokal harian",
      category: "Produksi",
      image: "/images/sayur.png",
      description: "Pengelolaan kebun produksi sayur organik untuk memasok kebutuhan pangan harian warga Jagakarsa.",
      year: "2024",
      tags: ["Pangan", "Organik", "Lokal"]
    },
    {
      id: 4,
      title: "Cokelat Lokal Cilengkrang",
      subtitle: "Prosesing hasil perkebunan lokal",
      category: "Produk",
      image: "/images/choco.png",
      description: "Prosesing dan pengembangan produk cokelat dari biji kakao lokal dengan melibatkan petani mitra.",
      year: "2024",
      tags: ["Produk", "Prosesing", "Kakao"]
    },
    {
      id: 5,
      title: "Bank Sampah Digital",
      subtitle: "Sistem manajemen limbah terpadu",
      category: "Sistem",
      image: "/images/choco.png",
      description: "Pengembangan sistem digital untuk mengelola bank sampah dan mendata kontribusi warga.",
      year: "2024",
      tags: ["Digital", "Lingkungan", "Sistem"]
    },
    {
      id: 6,
      title: "Edukasi Permakultur",
      subtitle: "Program pembelajaran praktis",
      category: "Edukasi",
      image: "/images/kopi.png",
      description: "Program pelatihan permakultur dan pertanian organik untuk anak muda dan keluarga.",
      year: "2024",
      tags: ["Edukasi", "Permakultur", "Komunitas"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf9f7] via-[#f5f4f2] to-[#faf9f7]">
      {/* Hero Section - Clean & Premium */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Soft gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e8e6e1]/40 via-transparent to-[#d4e4d1]/30" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#c5d5c0]/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-gradient-to-tr from-[#e8dfd0]/30 to-transparent rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#8a8479] mb-8">
            <span className="hover:text-[#5c5a56] transition-colors cursor-pointer">Beranda</span>
            <ArrowUpRight className="w-3 h-3" />
            <span className="text-[#5c5a56] font-medium">Proyek & Karya</span>
          </div>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8b9d83] to-[#a8b5a0] flex items-center justify-center shadow-lg shadow-[#8b9d83]/20">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium tracking-widest text-[#8b9d83] uppercase">
                Portofolio
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-[#3d3d3d] leading-[1.1] mb-8">
              Proyek & Karya
            </h1>

            <p className="text-lg md:text-xl text-[#6b6860] leading-relaxed max-w-2xl font-light">
              Dokumentasi berbagai inisiatif, proyek pengembangan, dan karya komunitas 
              yang mencerminkan komitmen kami terhadap keberlanjutan dan pemberdayaan lokal.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-12 mt-12 pt-8 border-t border-[#e0ddd8]">
              <div>
                <div className="text-4xl font-serif text-[#8b9d83]">12+</div>
                <div className="text-sm text-[#8a8479] mt-1">Proyek Aktif</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-[#8b9d83]">5</div>
                <div className="text-sm text-[#8a8479] mt-1">Tahun Beroperasi</div>
              </div>
              <div>
                <div className="text-4xl font-serif text-[#8b9d83]">200+</div>
                <div className="text-sm text-[#8a8479] mt-1">Mitra Terlibat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid - Modern Card Design */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b9d83]/10 to-[#a8b5a0]/10 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-[#8b9d83]" />
              </div>
              <h2 className="text-2xl font-serif text-[#3d3d3d]">Katalog Proyek</h2>
            </div>
            
            {/* Filter Tags */}
            <div className="hidden md:flex items-center gap-3">
              {["Semua", "Proyek", "Inovasi", "Produksi", "Edukasi"].map((filter, idx) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    idx === 0 
                      ? "bg-[#8b9d83] text-white shadow-md" 
                      : "bg-white/80 text-[#6b6860] hover:bg-white hover:shadow-sm border border-[#e0ddd8]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ease-out ${
                    hoveredCard === project.id 
                      ? "shadow-2xl shadow-[#8b9d83]/15 -translate-y-2" 
                      : "shadow-lg shadow-black/5"
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 transition-opacity duration-500 ${
                        hoveredCard === project.id ? "opacity-60" : "opacity-40"
                      }`}
                    />
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                        hoveredCard === project.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#5c5a56] shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4 z-20">
                      <span className="px-3 py-1.5 bg-[#8b9d83]/90 backdrop-blur-sm rounded-full text-xs font-medium text-white shadow-sm">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-[#8b9d83] font-medium mb-2 tracking-wide">
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl font-serif text-[#3d3d3d] mb-3 leading-tight group-hover:text-[#8b9d83] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#6b6860] text-sm leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#f5f4f2] rounded-full text-xs text-[#6b6860] border border-[#e8e6e1]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#f0eeeb]">
                      <span className="text-sm text-[#8a8479]">Lihat Detail</span>
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          hoveredCard === project.id 
                            ? "bg-[#8b9d83] text-white" 
                            : "bg-[#f5f4f2] text-[#6b6860]"
                        }`}
                      >
                        <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                          hoveredCard === project.id ? "translate-x-0.5 -translate-y-0.5" : ""
                        }`} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white rounded-full text-[#5c5a56] font-medium shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#8b9d83]/10 border border-[#e8e6e1] transition-all duration-300 hover:-translate-y-0.5">
              <span>Muat Lebih Banyak</span>
              <div className="w-6 h-6 rounded-full bg-[#f5f4f2] group-hover:bg-[#8b9d83] group-hover:text-white flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-3 h-3 rotate-90" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Impact Section - Glassmorphism */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#8b9d83]/10 via-[#e8e6e1]/20 to-[#c5d5c0]/10" />
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b9d83] to-[#a8b5a0] flex items-center justify-center shadow-lg">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium tracking-widest text-[#8b9d83] uppercase">
                  Dampak
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif text-[#3d3d3d] leading-tight mb-6">
                Membangun Ekonomi Lokal yang Berkelanjutan
              </h2>

              <p className="text-lg text-[#6b6860] leading-relaxed mb-8">
                Setiap proyek yang kami jalankan bertujuan untuk menciptakan dampak positif 
                bagi masyarakat sekitar, meningkatkan kesejahteraan petani, dan menjaga 
                kelestarian lingkungan untuk generasi mendatang.
              </p>

              <button className="group inline-flex items-center gap-3 px-6 py-3 bg-[#8b9d83] text-white rounded-full font-medium shadow-lg shadow-[#8b9d83]/30 hover:shadow-xl hover:shadow-[#8b9d83]/40 transition-all duration-300 hover:-translate-y-0.5">
                <span>Pelajari Lebih Lanjut</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Glass Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { number: "1.5 Ton", label: "Produksi Bulanan", desc: "Sayur organik" },
                { number: "50 Ha", label: "Area Agroforestri", desc: "Kopi dan jahe" },
                { number: "120", label: "Petani Mitra", desc: "Dilatih & dibina" },
                { number: "30%", label: "Peningkatan", desc: "Pendapatan petani" }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 border border-white/50 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-[#8b9d83]/10 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="text-3xl font-serif text-[#8b9d83] mb-2">{stat.number}</div>
                  <div className="text-sm font-medium text-[#3d3d3d] mb-1">{stat.label}</div>
                  <div className="text-xs text-[#8a8479]">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA - Premium Style */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#8b9d83] to-[#6b7b64] rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden shadow-2xl shadow-[#8b9d83]/30">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Tertarik Berkolaborasi?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Kami terbuka untuk bermitra dengan individu, komunitas, dan organisasi 
                yang memiliki visi serupa.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group px-8 py-4 bg-white text-[#5c5a56] rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                  <span>Hubungi Kami</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300">
                  Lihat Formulir Kerja Sama
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for footer */}
      <div className="h-12" />
    </div>
  );
};

export default Proyek;
