import React, { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  
  const categories = ['Semua', 'Sayuran', 'Herbal', 'Olahan', 'Benih', 'Produk Kolektif'];
  
  const products = [
    {
      id: 1,
      name: 'Paket Sayuran Organik',
      category: 'Sayuran',
      price: 'Rp 35.000',
      story: 'Dikumpulkan dari kebun komunitas Meruya oleh 15 keluarga petani urban. Setiap paket berisi sayuran musiman yang ditanam dengan metode organik tanpa pestisida sintetis.',
      origin: 'Kebun Komunitas Meruya, Jakarta Barat',
      producer: 'Kolektif Petani Urban Meruya',
      harvestDate: 'Dipanen 1-2 hari sebelum pengiriman',
      contents: ['Kangkung', 'Bayam', 'Tomat Cherry', 'Terong', 'Cabai Rawit'],
      weight: 'Sekitar 2kg',
      season: 'Tersedia sepanjang tahun dengan variasi musiman',
      nutrition: 'Kaya vitamin A, C, K, dan serat alami',
      images: ['sayur1', 'sayur2'],
      inStock: true,
    },
    {
      id: 2,
      name: 'Herbal Tea Lokal',
      category: 'Herbal',
      price: 'Rp 45.000',
      story: 'Racikan herbal tradisional dari kebun kolektif Selarasa. Dikembangkan bersama para penjual jamu lokal untuk menjaga warisan pengobatan tradisional Indonesia.',
      origin: 'Kebun Herbal Selarasa, Jakarta',
      producer: 'Tim Herbal Selarasa & Jamu Lokal',
      process: 'Dikeringkan secara alami di bawah sinar matahari',
      contents: ['Daun Sirih', 'Jahe Merah', 'Kunyit', 'Serai', 'Daun Pepaya'],
      weight: '100 gram (20 kantong teh)',
      benefits: 'Meningkatkan imunitas, menghangatkan tubuh',
      usage: 'Seduh dengan air panas 80°C selama 3-5 menit',
      images: ['herbal1', 'herbal2'],
      inStock: true,
    },
    {
      id: 3,
      name: 'Fermentasi Sayuran Mix',
      category: 'Olahan',
      price: 'Rp 55.000',
      story: 'Hasil workshop fermentasi bersama komunitas. Menggunakan teknik fermentasi alami tanpa pengawet buatan untuk menjaga nutrisi dan rasa alami sayuran.',
      origin: 'Dapur Komunal Selarasa',
      producer: 'Komunitas Fermentasi Selarasa',
      fermentationTime: '2-3 minggu fermentasi alami',
      contents: ['Wortel', 'Kubis', 'Timun', 'Bawang', 'Cabai'],
      probiotics: 'Kaya probiotik alami untuk kesehatan pencernaan',
      storage: 'Dapat disimpan hingga 3 bulan di kulkas',
      serving: 'Cocok sebagai pendamping nasi atau salad',
      images: ['ferment1', 'ferment2'],
      inStock: true,
    },
    {
      id: 4,
      name: 'Paket Benih Lokal',
      category: 'Benih',
      price: 'Rp 30.000',
      story: 'Benih-benih lokal yang dilestarikan oleh Selarasa Seed Bank. Setiap benih memiliki cerita tentang asal-usul dan adaptasi di lingkungan perkotaan.',
      origin: 'Selarasa Seed Bank',
      producer: 'Tim Konservasi Benih Selarasa',
      preservation: 'Dilestarikan secara kolektif selama 3 generasi',
      contents: ['Tomat Lokal', 'Cabai Keriting', 'Bayam Merah', 'Kangkung', 'Kacang Panjang'],
      plantingGuide: 'Include panduan tanam untuk pemula',
      adaptability: 'Sudah beradaptasi dengan iklim Jakarta',
      sustainability: 'Dapat dipanen dan diambil benihnya kembali',
      images: ['benih1', 'benih2'],
      inStock: true,
    },
    {
      id: 5,
      name: 'Sambal Keluarga',
      category: 'Olahan',
      price: 'Rp 40.000',
      story: 'Resep turun-temurun dari Ibu-ibu komunitas Meruya. Dibuat secara kolektif dalam "dapur bersama" setiap hari Jumat, menjadi simbol kebersamaan.',
      origin: 'Dapur Komunal Meruya',
      producer: 'Ibu-ibu PKK Komunitas Meruya',
      tradition: 'Resep warisan keluarga lebih dari 2 generasi',
      ingredients: ['Cabai rawit organik', 'Bawang merah', 'Terasi', 'Gula aren', 'Garam laut'],
      process: 'Dibuat dengan cara tradisional, uleg manual',
      packaging: 'Botol kaca daur ulang 250ml',
      shelfLife: 'Tahan 1 bulan di suhu ruangan',
      images: ['sambal1', 'sambal2'],
      inStock: true,
    },
    {
      id: 6,
      name: 'Keranjang Hasil Panen',
      category: 'Produk Kolektif',
      price: 'Rp 150.000',
      story: 'Keranjang lengkap hasil panen mingguan dari berbagai kebun komunitas. Cara termudah untuk mendukung pertanian lokal dan menikmati keanekaragaman pangan musiman.',
      origin: 'Berbagai kebun komunitas Jakarta',
      producer: 'Jaringan Petani Urban Jakarta',
      frequency: 'Dikirim setiap minggu',
      variety: '10-15 jenis produk berbeda setiap minggu',
      contents: ['Sayuran segar', 'Buah musiman', 'Herbal', 'Produk olahan', 'Surprise item'],
      communityImpact: 'Mendukung 20+ keluarga petani',
      customization: 'Bisa request preferensi (no spicy, vegetarian, dll)',
      images: ['keranjang1', 'keranjang2'],
      inStock: true,
    },
  ];

  const filteredProducts = selectedCategory === 'Semua' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-leaf-50 to-earth-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max">
          <div className="text-center">
            <h1 className="font-serif text-5xl text-earth-900 dark:text-gray-100 mb-6">
              Katalog Produk
            </h1>
            <div className="w-24 h-1 bg-leaf-500 mx-auto mb-8"></div>
            <p className="text-xl text-earth-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Produk-produk dari kebun komunitas dengan cerita di balik setiap item. 
              Bukan sekadar belanja, tapi mendukung ekosistem pangan lokal.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 lg-grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-earth-900 dark:text-gray-100 mb-6">
                Lebih dari Sekadar Produk
              </h2>
              <div className="space-y-4 text-earth-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Setiap produk yang kami tawarkan memiliki cerita - tentang siapa yang menanam, 
                  di mana berasalnya, bagaimana prosesnya, dan dampaknya bagi komunitas.
                </p>
                <p>
                  Ini bukan marketplace biasa. Ini adalah jembatan antara produsen lokal 
                  dan konsumen yang peduli dengan asal-usul makanan mereka.
                </p>
                <p>
                  Setiap pembelian adalah dukungan langsung kepada petani urban, 
                  pelestarian benih lokal, dan keberlanjutan sistem pangan kolektif.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-leaf-100 to-earth-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-leaf-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="text-earth-600 dark:text-gray-300 font-medium">
                    Produk dengan Cerita
                  </p>
                  <p className="text-earth-500 dark:text-gray-400 text-sm mt-2">
                    Setiap item memiliki narasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-earth-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-leaf-500 text-white'
                    : 'bg-white dark:bg-gray-800 text-earth-700 hover-bg-earth-100 dark:hover-bg-gray-700 dark:text-earth-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card group">
                {/* Product Image */}
                <div className="w-full h-48 bg-gradient-to-br from-leaf-100 to-earth-100 dark:from-gray-700 dark:to-gray-600 rounded-lg mb-4 flex items-center justify-center relative">
                  <svg className="w-12 h-12 text-leaf-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute top-2 right-2">
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Tersedia
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-earth-900 dark:text-gray-100 mb-2">
                    {product.name}
                  </h3>
                  <span className="text-leaf-600 dark:text-leaf-400 text-sm font-medium">
                    {product.category}
                  </span>
                  <div className="text-2xl font-bold text-earth-800 dark:text-gray-200 mt-2">
                    {product.price}
                  </div>
                </div>

                {/* Product Story */}
                <div className="mb-4">
                  <h4 className="font-medium text-earth-900 dark:text-gray-100 mb-2">
                    Cerita Produk
                  </h4>
                  <p className="text-sm text-earth-600 dark:text-gray-400 leading-relaxed">
                    {product.story}
                  </p>
                </div>

                {/* Product Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start text-sm text-earth-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 mt-0.5 text-leaf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <strong>Asal:</strong> {product.origin}
                    </div>
                  </div>
                  <div className="flex items-start text-sm text-earth-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 mt-0.5 text-leaf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <div>
                      <strong>Produsen:</strong> {product.producer}
                    </div>
                  </div>
                </div>

                {/* Contents */}
                <div className="mb-4">
                  <h4 className="font-medium text-earth-900 dark:text-gray-100 mb-2 text-sm">
                    Kandungan:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {product.contents.map((content) => (
                      <span
                        key={content}
                        className="text-xs px-2 py-1 bg-earth-100 text-earth-700 rounded-full dark:bg-earth-700 dark:text-earth-300"
                      >
                        {content}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 btn-secondary text-sm">
                    Lihat Cerita Lengkap
                  </button>
                  <button className="flex-1 btn-primary text-sm">
                    Tambah ke Keranjang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-earth-900 dark:text-gray-100 mb-4">
              Cara Mendapatkan Produk
            </h2>
            <div className="w-16 h-1 bg-leaf-500 mx-auto mb-6"></div>
            <p className="text-lg text-earth-600 dark:text-gray-400 max-w-2xl mx-auto">
              Proses sederhana untuk mendapatkan produk-produk berkualitas dari komunitas lokal.
            </p>
          </div>

          <div className="grid grid-cols-1 md-grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-leaf-600 dark:text-leaf-400 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Pilih Produk
              </h3>
              <p className="text-sm text-earth-600 dark:text-gray-400">
                Jelajahi katalog dan baca cerita di balik setiap produk
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-leaf-600 dark:text-leaf-400 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Pesan Online
              </h3>
              <p className="text-sm text-earth-600 dark:text-gray-400">
                Isi form pemesanan sederhana dengan preferensi Anda
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-leaf-600 dark:text-leaf-400 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Konfirmasi & Bayar
              </h3>
              <p className="text-sm text-earth-600 dark:text-gray-400">
                Konfirmasi pesanan dan lakukan pembayaran
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-leaf-600 dark:text-leaf-400 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Terima Produk
              </h3>
              <p className="text-sm text-earth-600 dark:text-gray-400">
                Produk segar dikirim atau dapat diambil di lokasi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-leaf-600 text-white">
        <div className="container-max text-center">
          <h2 className="font-serif text-4xl mb-6">
            Dukung Petani Lokal
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Setiap pembelian Anda adalah investasi dalam ketahanan pangan 
            lokal dan keberlanjutan komunitas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-leaf-600 hover:bg-earth-50 px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
              Mulai Belanja
            </button>
            <button className="bg-earth-700 text-white hover:bg-earth-800 px-8 py-3 rounded-lg transition-colors duration-200 font-medium">
              Jadi Reseller
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
