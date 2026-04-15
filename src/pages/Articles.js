import React from 'react';

const Articles = () => {
  const articles = [
    {
      title: 'Menanam di Lahan Sempit: Tips Urban Farming untuk Pemula',
      category: 'Urban Farming',
      author: 'Tim Selarasa',
      date: '15 Maret 2024',
      readTime: '5 menit',
      excerpt: 'Panduan lengkap untuk memulai urban farming di ruang terbatas dengan metode yang efisien dan berkelanjutan.',
      content: 'Urban farming adalah solusi praktis untuk memiliki akses pangan segar di tengah kota...',
      tags: ['pemula', 'urban farming', 'tips'],
      image: 'article1',
    },
    {
      title: 'Kekayaan Pangan Lokal: Menjelajahi Varietas Sayuran Tradisional',
      category: 'Pangan Lokal',
      author: 'Dr. Sari Wijaya',
      date: '10 Maret 2024',
      readTime: '8 menit',
      excerpt: 'Mengenal berbagai varietas sayuran tradisional Indonesia yang hampir punah dan upaya pelestariannya.',
      content: 'Indonesia memiliki kekayaan pangan lokal yang luar biasa namun banyak yang terlupakan...',
      tags: ['pangan lokal', 'varietas', 'pelestarian'],
      image: 'article2',
    },
    {
      title: 'Fermentasi Alami: Mengubah Limbah Menjadi Berkhasiat',
      category: 'Praktik Dapur',
      author: 'Ibu Rahma',
      date: '5 Maret 2024',
      readTime: '6 menit',
      excerpt: 'Teknik fermentasi sederhana untuk mengolah sayuran menjadi makanan yang lebih tahan lama dan bernutrisi.',
      content: 'Fermentasi adalah metode pengawetan pangan tertua yang masih relevan hingga saat ini...',
      tags: ['fermentasi', 'dapur', 'pengolahan'],
      image: 'article3',
    },
  ];

  const categories = ['Semua', 'Urban Farming', 'Pangan Lokal', 'Praktik Dapur', 'Komunitas', 'Riset'];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-leaf-50 to-earth-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max">
          <div className="text-center">
            <h1 className="font-serif text-5xl text-earth-900 dark:text-gray-100 mb-6">
              Artikel & Jurnal
            </h1>
            <div className="w-24 h-1 bg-leaf-500 mx-auto mb-8"></div>
            <p className="text-xl text-earth-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Koleksi tulisan mendalam tentang praktik pangan lokal, urban farming, 
              dan pengalaman komunitas Selarasa.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  category === 'Semua'
                    ? 'bg-leaf-500 text-white'
                    : 'bg-earth-100 text-earth-700 hover:bg-earth-200 dark:bg-earth-700 dark:text-earth-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.title} className="card group cursor-pointer">
                {/* Article Image */}
                <div className="w-full h-48 bg-gradient-to-br from-leaf-100 to-earth-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-leaf-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>

                {/* Article Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-leaf-600 dark:text-leaf-400 text-sm font-medium">
                    {article.category}
                  </span>
                  <span className="text-earth-500 dark:text-gray-400 text-sm">
                    {article.readTime}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-xl font-semibold text-earth-900 dark:text-gray-100 mb-3 group-hover:text-leaf-600 dark:group-hover:text-leaf-400 transition-colors">
                  {article.title}
                </h3>

                {/* Article Excerpt */}
                <p className="text-earth-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Article Author & Date */}
                <div className="flex items-center justify-between text-sm text-earth-500 dark:text-gray-400 mb-4">
                  <span>{article.author}</span>
                  <span>{article.date}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-earth-100 text-earth-700 rounded-full dark:bg-earth-700 dark:text-earth-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <button className="w-full btn-secondary text-sm">
                  Baca Selengkapnya
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-leaf-600 text-white">
        <div className="container-max text-center">
          <h2 className="font-serif text-3xl mb-4">
            Dapatkan Artikel Terbaru
          </h2>
          <p className="mb-6 opacity-90">
            Berlangganan untuk mendapatkan artikel dan jurnal terbaru dari Selarasa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-earth-900"
            />
            <button className="bg-white text-leaf-600 hover:bg-earth-50 px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
              Berlangganan
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
