import React from 'react';

const Programs = () => {
  const programCategories = [
    {
      title: 'Workshop',
      description: 'Pelatihan praktik tentang urban farming, pengolahan pangan, dan praktik berkelanjutan',
      icon: 'workshop',
      programs: [
        {
          name: 'Urban Farming 101',
          description: 'Dasar-dasar bertani di kota dengan metode organik',
          duration: '2 hari',
          level: 'Pemula',
        },
        {
          name: 'Fermentasi Lokal',
          description: 'Membuat makanan fermentasi dari bahan pangan lokal',
          duration: '1 hari',
          level: 'Menengah',
        },
        {
          name: 'Kompos & Soil Health',
          description: 'Membuat kompos dan memahami kesehatan tanah',
          duration: '1 hari',
          level: 'Pemula',
        },
      ],
    },
    {
      title: 'Riset & Eksplorasi',
      description: 'Penelitian tentang praktik pangan lokal dan pengembangan metode berkelanjutan',
      icon: 'research',
      programs: [
        {
          name: 'Studi Pangan Lokal',
          description: 'Dokumentasi dan penelitian varietas pangan lokal',
          duration: 'Ongoing',
          level: 'Lanjutan',
        },
        {
          name: 'Eksperimen Metode',
          description: 'Pengembangan metode pertanian inovatif',
          duration: '3 bulan',
          level: 'Menengah',
        },
        {
          name: 'Food System Mapping',
          description: 'Pemetaan sistem pangan di area perkotaan',
          duration: '6 bulan',
          level: 'Lanjutan',
        },
      ],
    },
    {
      title: 'Produksi Kolektif',
      description: 'Kegiatan produksi bersama yang menghasilkan produk pangan lokal berkualitas',
      icon: 'production',
      programs: [
        {
          name: 'Kebun Komunitas',
          description: 'Budidaya sayur dan herba secara kolektif',
          duration: 'Musiman',
          level: 'Semua level',
        },
        {
          name: 'Produk Olahan',
          description: 'Pengolahan hasil panen menjadi produk bernilai',
          duration: 'Weekly',
          level: 'Menengah',
        },
        {
          name: 'Seed Bank',
          description: 'Konservasi dan pengembangan benih lokal',
          duration: 'Ongoing',
          level: 'Semua level',
        },
      ],
    },
    {
      title: 'Edukasi Komunitas',
      description: 'Program pembelajaran untuk berbagai kalangan dengan pendekatan partisipatif',
      icon: 'education',
      programs: [
        {
          name: 'Kelas Anak',
          description: 'Pengenalan pertanian dan pangan untuk anak-anak',
          duration: 'Monthly',
          level: 'Anak-anak',
        },
        {
          name: 'Diskusi Publik',
          description: 'Seri diskusi tentang isu pangan dan ketahanan',
          duration: 'Monthly',
          level: 'Umum',
        },
        {
          name: 'Study Visit',
          description: 'Kunjungan belajar ke berbagai inisiatif pangan',
          duration: 'Sekali',
          level: 'Semua level',
        },
      ],
    },
  ];

  const upcomingEvents = [
    {
      title: 'Workshop Hidroponik Rumahan',
      date: '15 April 2024',
      time: '09:00 - 16:00',
      location: 'Kebun Selarasa, Meruya',
      instructor: 'Tim Selarasa',
      price: 'Gratis',
      maxParticipants: 15,
    },
    {
      title: 'Diskusi: Masa Depan Pangan Kota',
      date: '20 April 2024',
      time: '19:00 - 21:00',
      location: 'Online',
      instructor: 'Para praktisi pangan lokal',
      price: 'Donasi',
      maxParticipants: 100,
    },
    {
      title: 'Panen Raya Komunitas',
      date: '25 April 2024',
      time: '07:00 - 12:00',
      location: 'Kebun Selarasa, Meruya',
      instructor: 'Kolektif Selarasa',
      price: 'Gratis',
      maxParticipants: 30,
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      workshop: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      research: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      production: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      education: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    };
    return icons[iconName] || icons.workshop;
  };

  const getLevelColor = (level) => {
    const colors = {
      'Pemula': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Menengah': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'Lanjutan': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      'Semua level': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Anak-anak': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'Umum': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    };
    return colors[level] || colors['Pemula'];
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-leaf-50 to-earth-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max">
          <div className="text-center">
            <h1 className="font-serif text-5xl text-earth-900 dark:text-gray-100 mb-6">
              Program & Praktik
            </h1>
            <div className="w-24 h-1 bg-leaf-500 mx-auto mb-8"></div>
            <p className="text-xl text-earth-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Berbagai kegiatan edukatif dan praktik yang dirancang untuk mengembangkan 
              pemahaman dan keterampilan dalam ekosistem pangan lokal.
            </p>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-earth-900 dark:text-gray-100 mb-4">
              Kategori Program
            </h2>
            <div className="w-16 h-1 bg-leaf-500 mx-auto mb-6"></div>
            <p className="text-lg text-earth-600 dark:text-gray-400 max-w-2xl mx-auto">
              Program kami dirancang untuk berbagai tingkat keahlian dan minat.
            </p>
          </div>

          <div className="space-y-16">
            {programCategories.map((category, index) => (
              <div key={category.title}>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full mb-4">
                    <div className="text-leaf-600 dark:text-leaf-400">
                      {getIcon(category.icon)}
                    </div>
                  </div>
                  <h3 className="font-serif text-3xl text-earth-900 dark:text-gray-100 mb-4">
                    {category.title}
                  </h3>
                  <p className="text-lg text-earth-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md-grid-cols-3 gap-6">
                  {category.programs.map((program) => (
                    <div key={program.name} className="card">
                      <h4 className="text-xl font-semibold text-earth-900 dark:text-gray-100 mb-3">
                        {program.name}
                      </h4>
                      <p className="text-earth-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="text-sm px-3 py-1 rounded-full bg-earth-100 text-earth-700 dark:bg-earth-700 dark:text-earth-300">
                          {program.duration}
                        </span>
                        <span className={`text-sm px-3 py-1 rounded-full ${getLevelColor(program.level)}`}>
                          {program.level}
                        </span>
                      </div>
                      <button className="w-full btn-secondary text-center">
                        Daftar Program
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-earth-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-earth-900 dark:text-gray-100 mb-4">
              Kegiatan Mendatang
            </h2>
            <div className="w-16 h-1 bg-leaf-500 mx-auto mb-6"></div>
            <p className="text-lg text-earth-600 dark:text-gray-400 max-w-2xl mx-auto">
              Bergabunglah dengan kegiatan kami yang akan datang.
            </p>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="card">
                <div className="mb-4">
                  <div className="flex items-center text-leaf-600 dark:text-leaf-400 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-earth-600 dark:text-gray-400 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center text-earth-600 dark:text-gray-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-earth-900 dark:text-gray-100 mb-3">
                  {event.title}
                </h3>
                
                <div className="mb-4">
                  <p className="text-sm text-earth-600 dark:text-gray-400 mb-2">
                    <strong>Pengajar:</strong> {event.instructor}
                  </p>
                  <p className="text-sm text-earth-600 dark:text-gray-400 mb-2">
                    <strong>Biaya:</strong> {event.price}
                  </p>
                  <p className="text-sm text-earth-600 dark:text-gray-400">
                    <strong>Kuota:</strong> {event.maxParticipants} peserta
                  </p>
                </div>

                <button className="w-full btn-primary">
                  Daftar Sekarang
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
            Tertarik Berpartisipasi?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ada banyak cara untuk terlibat dalam kegiatan Selarasa. 
            Temukan program yang sesuai dengan minat dan kebutuhan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-leaf-600 hover:bg-earth-50 px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
              Konsultasi Program
            </button>
            <button className="bg-earth-700 text-white hover:bg-earth-800 px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
              Usulkan Program
            </button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-earth-900 dark:text-gray-100 mb-4">
              Sumber Belajar
            </h2>
            <div className="w-16 h-1 bg-leaf-500 mx-auto mb-6"></div>
            <p className="text-lg text-earth-600 dark:text-gray-400 max-w-2xl mx-auto">
              Materi dan panduan yang bisa Anda pelajari secara mandiri.
            </p>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-6">
            <div className="card text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-600 dark:text-leaf-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Panduan Praktis
              </h3>
              <p className="text-earth-600 dark:text-gray-400 text-sm">
                Tutorial langkah demi langkah
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-600 dark:text-leaf-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Video Workshop
              </h3>
              <p className="text-earth-600 dark:text-gray-400 text-sm">
                Rekaman kegiatan sebelumnya
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-600 dark:text-leaf-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Artikel & Jurnal
              </h3>
              <p className="text-earth-600 dark:text-gray-400 text-sm">
                Tulisan mendalam tentang pangan
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-leaf-600 dark:text-leaf-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Komunitas
              </h3>
              <p className="text-earth-600 dark:text-gray-400 text-sm">
                Diskusi dan berbagi pengalaman
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
