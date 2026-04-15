import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Kebun Komunitas Meruya',
      category: 'Urban Farming',
      description: 'Mengubah lahan terlantar seluas 500m² menjadi kebun produktif yang menghasilkan berbagai sayuran dan herba organik.',
      status: 'Berjalan',
      startDate: 'Januari 2023',
      location: 'Meruya, Jakarta Barat',
      impact: '50+ keluarga terlibat, 200kg panen per bulan',
      images: ['kebun1', 'kebun2', 'kebun3'],
      collaborators: ['Warga Meruya', 'Komunitas Hijau', 'Dinas Pertanian'],
    },
    {
      title: 'Workshop Fermentasi Lokal',
      category: 'Edukasi',
      description: 'Seri workshop bulanan tentang pengolahan pangan lokal dengan metode fermentasi tradisional dan modern.',
      status: 'Berjalan',
      startDate: 'Maret 2023',
      location: 'Berbagai lokasi',
      impact: '200+ peserta, 15 jenis produk fermentasi',
      images: ['workshop1', 'workshop2'],
      collaborators: ['Chef Lokal', 'Pakar Gizi', 'Komunitas Makanan'],
    },
    {
      title: 'Pasar Pangan Lokal',
      category: 'Distribusi',
      description: 'Menciptakan platform distribusi langsung dari petani lokal ke konsumen perkotaan dengan harga yang adil.',
      status: 'Pengembangan',
      startDate: 'Juni 2023',
      location: 'Area Jakarta',
      impact: '10+ petani terlibat, 500+ konsumen',
      images: ['pasar1', 'pasar2'],
      collaborators: ['Petani Lokal', 'Koperasi', 'Tech Community'],
    },
    {
      title: 'Seed Bank Jakarta',
      category: 'Konservasi',
      description: 'Bank benih kolektif untuk melestarikan varietas tanaman lokal dan mengembangkan benih adaptif.',
      status: 'Berjalan',
      startDate: 'September 2023',
      location: 'Selarasa Hub',
      impact: '100+ varietas benih, 30+ anggota',
      images: ['seed1', 'seed2'],
      collaborators: ['Peneliti Pertanian', 'Petani Senior', 'Universitas'],
    },
    {
      title: 'Art & Food Festival',
      category: 'Kolaborasi',
      description: 'Festival tahunan yang menggabungkan seni, musik, dan pangan lokal dalam satu perayaan kolektif.',
      status: 'Annual',
      startDate: 'Desember 2023',
      location: 'Jakarta',
      impact: '1000+ pengunjung, 50+ seniman & petani',
      images: ['festival1', 'festival2', 'festival3'],
      collaborators: ['Gudskul', 'Seniman Lokal', 'Musisi Indie'],
    },
    {
      title: 'Urban Food System Mapping',
      category: 'Riset',
      description: 'Penelitian komprehensif tentang sistem pangan di Jakarta untuk identifikasi gap dan peluang.',
      status: 'Berjalan',
      startDate: 'Februari 2024',
      location: 'Jakarta',
      impact: 'Data untuk 5 kecamatan, 10+ rekomendasi kebijakan',
      images: ['mapping1', 'mapping2'],
      collaborators: ['Universitas Indonesia', 'Pemerintah DKI', 'NGO Pangan'],
    },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'Berjalan': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Pengembangan': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'Annual': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Selesai': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    };
    return colors[status] || colors['Berjalan'];
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-leaf-50 to-earth-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max">
          <div className="text-center">
            <h1 className="font-serif text-5xl text-earth-900 dark:text-gray-100 mb-6">
              Proyek & Karya
            </h1>
            <div className="w-24 h-1 bg-leaf-500 mx-auto mb-8"></div>
            <p className="text-xl text-earth-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Dokumentasi praktik dan kolaborasi kami dalam mengembangkan ekosistem pangan lokal 
              yang lebih berkelanjutan dan inklusif.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {['Semua', 'Urban Farming', 'Edukasi', 'Distribusi', 'Konservasi', 'Kolaborasi', 'Riset'].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  category === 'Semua'
                    ? 'bg-leaf-500 text-white'
                    : 'bg-earth-100 text-earth-700 hover-bg-earth-200 dark:bg-earth-700 dark:text-earth-300 dark:hover-bg-earth-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="card group">
                {/* Image placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-leaf-100 to-earth-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-leaf-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className="text-sm text-earth-500 dark:text-gray-400">
                      {project.startDate}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-earth-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <span className="text-leaf-600 dark:text-leaf-400 text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <p className="text-earth-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center text-earth-500 dark:text-gray-400 text-sm mb-2">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                  </div>
                  <div className="text-sm text-earth-600 dark:text-gray-400">
                    <strong>Dampak:</strong> {project.impact}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-earth-600 dark:text-gray-400 mb-2">
                    <strong>Kolaborator:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.collaborators.map((collab) => (
                      <span
                        key={collab}
                        className="text-xs px-2 py-1 bg-earth-100 text-earth-700 rounded-full dark:bg-earth-700 dark:text-earth-300"
                      >
                        {collab}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full btn-secondary">
                  Lihat Detail Proyek
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-leaf-600 text-white">
        <div className="container-max text-center">
          <h2 className="font-serif text-4xl mb-6">
            Ingin Berkolaborasi?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Kami selalu terbuka untuk kolaborasi dengan individu, komunitas, 
            atau organisasi yang memiliki visi serupa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-leaf-600 hover:bg-earth-50 px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
              Ajukan Kolaborasi
            </button>
            <button className="bg-earth-700 text-white hover:bg-earth-800 px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
              Dukung Proyek
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
