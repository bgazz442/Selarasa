import React from 'react';

const Documentation = () => {
  const galleries = [
    {
      title: 'Workshop Fermentasi',
      date: 'Maret 2024',
      location: 'Kebun Selarasa',
      description: 'Peserta belajar teknik fermentasi alami bersama komunitas',
      images: ['ferment1', 'ferment2', 'ferment3'],
      category: 'Workshop',
    },
    {
      title: 'Panen Raya Komunitas',
      date: 'Februari 2024',
      location: 'Kebun Meruya',
      description: 'Panen bersama hasil dari kebun komunitas',
      images: ['panen1', 'panen2', 'panen3'],
      category: 'Panen',
    },
    {
      title: 'Pembuatan Kompos',
      date: 'Januari 2024',
      location: 'Area Kompos Selarasa',
      description: 'Workshop pembuatan kompos dari sampah organik',
      images: ['kompos1', 'kompos2'],
      category: 'Edukasi',
    },
  ];

  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-br from-leaf-50 to-earth-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max text-center">
          <h1 className="font-serif text-5xl text-earth-900 dark:text-gray-100 mb-6">
            Dokumentasi
          </h1>
          <div className="w-24 h-1 bg-leaf-500 mx-auto mb-8"></div>
          <p className="text-xl text-earth-700 dark:text-gray-300 max-w-3xl mx-auto">
            Arsip visual dari berbagai kegiatan dan komunitas Selarasa.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleries.map((gallery) => (
              <div key={gallery.title} className="card">
                <div className="w-full h-48 bg-gradient-to-br from-leaf-100 to-earth-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-leaf-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-earth-900 dark:text-gray-100 mb-2">
                  {gallery.title}
                </h3>
                <p className="text-earth-600 dark:text-gray-400 text-sm mb-2">
                  {gallery.date} - {gallery.location}
                </p>
                <p className="text-earth-600 dark:text-gray-400 mb-4">
                  {gallery.description}
                </p>
                <button className="w-full btn-secondary">Lihat Galeri</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
