import React from 'react';

const Process = () => {
  const processSteps = [
    {
      step: 1,
      title: 'Perencanaan Kolektif',
      description: 'Diskusi bersama komunitas untuk menentukan apa yang akan ditanam, siapa yang terlibat, dan bagaimana pembagiannya.',
      details: [
        'Identifikasi kebutuhan komunitas',
        'Pemilihan jenis tanaman sesuai musim dan lokasi',
        'Pembagian peran dan tanggung jawab',
        'Penentuan jadwal tanam dan panen',
      ],
      icon: 'plan',
      duration: '1-2 minggu',
      participants: 'Seluruh anggota komunitas',
    },
    {
      step: 2,
      title: 'Persiapan Lahan',
      description: 'Mempersiapkan tanah dengan metode organik, membuat kompos, dan menata area tanam.',
      details: [
        'Pembersihan lahan dari gulma dan sampah',
        'Pengolahan tanah dengan kompos organik',
        'Pembuat bedengan dan jalur air',
        'Pemasangan mulsa dan peneduh alami',
      ],
      icon: 'prepare',
      duration: '1 minggu',
      participants: 'Tim persiapan lahan',
    },
    {
      step: 3,
      title: 'Penanaman',
      description: 'Proses menanam benih atau bibit dengan teknik yang tepat dan perawatan awal.',
      details: [
        'Penyemaian benih di nursery',
        'Pemindahan bibit ke area tanam',
        'Penyiraman pertama kali',
        'Pemasangan penanda tanaman',
      ],
      icon: 'plant',
      duration: '2-3 hari',
      participants: 'Seluruh anggota komunitas',
    },
    {
      step: 4,
      title: 'Perawatan Harian',
      description: 'Kegiatan rutin menjaga kesehatan tanaman hingga siap panen.',
      details: [
        'Penyiraman teratur sesuai kebutuhan',
        'Pemupukan organik berkala',
        'Pengendalian hama secara alami',
        'Pemangkasan dan perapihan tanaman',
      ],
      icon: 'care',
      duration: '6-12 minggu',
      participants: 'Tim perawatan bergantian',
    },
    {
      step: 5,
      title: 'Panen Kolektif',
      description: 'Memanen hasil bersama-sama dengan merayakan kerja keras kolektif.',
      details: [
        'Penentuan waktu panen optimal',
        'Panen bersama seluruh komunitas',
        'Sortir dan kualifikasi hasil',
        'Dokumentasi proses panen',
      ],
      icon: 'harvest',
      duration: '1-2 hari',
      participants: 'Seluruh anggota komunitas',
    },
    {
      step: 6,
      title: 'Distribusi & Olahan',
      description: 'Membagi hasil panen dan mengolah kelebihan menjadi produk bernilai tambah.',
      details: [
        'Pembagian hasil sesuai kesepakatan',
        'Pengolahan produk olahan',
        'Pengemasan dan labeling',
        'Distribusi ke anggota komunitas',
      ],
      icon: 'distribute',
      duration: '1 minggu',
      participants: 'Tim pengolahan dan distribusi',
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      plan: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      prepare: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      plant: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      care: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      harvest: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      distribute: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
    };
    return icons[iconName] || icons.plan;
  };

  const tips = [
    {
      category: 'Penanaman',
      tips: [
        'Tanam di pagi atau sore hari saat suhu tidak terlalu panas',
        'Pastikan jarak tanaman cukup untuk pertumbuhan optimal',
        'Gunakan mulsa alami untuk menjaga kelembaban tanah',
        'Rotasi tanaman setiap musim untuk menjaga kesehatan tanah',
      ],
    },
    {
      category: 'Perawatan',
      tips: [
        'Siram tanaman di pagi hari untuk mengurangi penguapan',
        'Gunakan pestisida alami dari bahan lokal',
        'Perhatikan tanda-tanda penyakit pada tanaman',
        'Buat jurnal perawatan untuk memantau perkembangan',
      ],
    },
    {
      category: 'Panen',
      tips: [
        'Panen di pagi hari untuk kualitas terbaik',
        'Gunakan alat yang bersih dan tajam',
        'Simpan hasil panen di tempat yang tepat',
        'Dokumentasikan hasil untuk evaluasi berikutnya',
      ],
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-leaf-50 to-earth-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max">
          <div className="text-center">
            <h1 className="font-serif text-5xl text-earth-900 dark:text-gray-100 mb-6">
              Proses Tanam & Produksi
            </h1>
            <div className="w-24 h-1 bg-leaf-500 mx-auto mb-8"></div>
            <p className="text-xl text-earth-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Perjalanan lengkap dari benih hingga pangan siap konsumsi dengan pendekatan 
              kolektif dan berkelanjutan.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-earth-900 dark:text-gray-100 mb-4">
              Tahapan Proses
            </h2>
            <div className="w-16 h-1 bg-leaf-500 mx-auto mb-6"></div>
            <p className="text-lg text-earth-600 dark:text-gray-400 max-w-2xl mx-auto">
              Setiap tahapan melibatkan partisipasi kolektif untuk menciptakan 
              hasil yang bermakna bersama.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                {/* Step number and line */}
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-8">
                    <div className="w-12 h-12 bg-leaf-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {step.step < processSteps.length && (
                      <div className="w-0.5 h-24 bg-leaf-200 dark:bg-leaf-800 mt-4"></div>
                    )}
                  </div>

                  {/* Step content */}
                  <div className="flex-1">
                    <div className="card">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mr-4">
                              <div className="text-leaf-600 dark:text-leaf-400">
                                {getIcon(step.icon)}
                              </div>
                            </div>
                            <h3 className="font-serif text-2xl text-earth-900 dark:text-gray-100">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-lg text-earth-700 dark:text-gray-300 leading-relaxed mb-6">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-earth-900 dark:text-gray-100 mb-3">
                            Kegiatan Detail:
                          </h4>
                          <ul className="space-y-2">
                            {step.details.map((detail) => (
                              <li key={detail} className="flex items-start text-earth-600 dark:text-gray-400">
                                <svg className="w-4 h-4 mr-2 text-leaf-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center text-earth-600 dark:text-gray-400">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">Durasi:</span> {step.duration}
                          </div>
                          <div className="flex items-center text-earth-600 dark:text-gray-400">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span className="font-medium">Peserta:</span> {step.participants}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Process */}
      <section className="section-padding bg-earth-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-earth-900 dark:text-gray-100 mb-4">
              Siklus Produksi
            </h2>
            <div className="w-16 h-1 bg-leaf-500 mx-auto mb-6"></div>
            <p className="text-lg text-earth-600 dark:text-gray-400 max-w-2xl mx-auto">
              Visualisasi siklus lengkap dari awal hingga akhir proses produksi kolektif.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-2 md-grid-cols-3 lg-grid-cols-6 gap-4">
              {['Perencanaan', 'Lahan', 'Tanam', 'Rawat', 'Panen', 'Bagi'].map((phase, index) => (
                <div key={phase} className="text-center">
                  <div className="w-20 h-20 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-leaf-600 dark:text-leaf-400 font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-earth-700 dark:text-gray-300">
                    {phase}
                  </p>
                  {index < 5 && (
                    <svg className="w-6 h-6 text-leaf-400 mx-auto mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Best Practices */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-earth-900 dark:text-gray-100 mb-4">
              Tips & Praktik Terbaik
            </h2>
            <div className="w-16 h-1 bg-leaf-500 mx-auto mb-6"></div>
            <p className="text-lg text-earth-600 dark:text-gray-400 max-w-2xl mx-auto">
              Pembelajaran dari pengalaman kami untuk hasil yang lebih baik.
            </p>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
            {tips.map((category) => (
              <div key={category.category} className="card">
                <h3 className="text-xl font-semibold text-earth-900 dark:text-gray-100 mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.tips.map((tip) => (
                    <li key={tip} className="flex items-start text-earth-600 dark:text-gray-400">
                      <svg className="w-4 h-4 mr-2 text-leaf-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="section-padding bg-leaf-600 text-white">
        <div className="container-max text-center">
          <h2 className="font-serif text-4xl mb-6">
            Sumber Belajar
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Pelajari lebih lanjut tentang praktik pertanian kolektif 
            melalui sumber daya yang kami sediakan.
          </p>
          <div className="grid grid-cols-1 md-grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Panduan Lengkap</h3>
              <p className="text-sm opacity-80">Tutorial langkah demi langkah</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Video Tutorial</h3>
              <p className="text-sm opacity-80">Rekaman praktik lapangan</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Komunitas</h3>
              <p className="text-sm opacity-80">Diskusi dan berbagi pengalaman</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
