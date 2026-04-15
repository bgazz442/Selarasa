import React, { useState } from 'react';

const Barter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    haveItem: '',
    wantItem: '',
    description: '',
  });

  const barterPosts = [
    {
      id: 1,
      name: 'Budi Santoso',
      have: 'Sayuran organik dari kebun',
      want: 'Hasil ternak (telur/ayam)',
      description: 'Saya punya kelebihan sayuran organik, ingin tukar dengan hasil ternak',
      date: '2 hari yang lalu',
      location: 'Jakarta Selatan',
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      have: 'Benih lokal (tomat, cabai)',
      want: 'Pupuk kompos',
      description: 'Koleksi benih lokal langka, butuh pupuk untuk kebun',
      date: '5 hari yang lalu',
      location: 'Jakarta Barat',
    },
    {
      id: 3,
      name: 'Ahmad Fauzi',
      have: 'Alat pertanian (cangkul, garpu)',
      want: 'Bibit buah',
      description: 'Alat pertanian bekas tapi masih bagus, butuh bibit buah',
      date: '1 minggu yang lalu',
      location: 'Tangerang',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Barter post submitted:', formData);
  };

  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-br from-leaf-50 to-earth-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max text-center">
          <h1 className="font-serif text-5xl text-earth-900 dark:text-gray-100 mb-6">
            Barter & Tukar
          </h1>
          <div className="w-24 h-1 bg-leaf-500 mx-auto mb-8"></div>
          <p className="text-xl text-earth-700 dark:text-gray-300 max-w-3xl mx-auto">
            Platform tukar-menukar produk dan jasa antar anggota komunitas Selarasa. 
            Bukan sekadar transaksi, tapi membangun relasi dan kebersamaan.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-earth-900 dark:text-gray-100 mb-4">
              Posting Barter Terbaru
            </h2>
            <p className="text-lg text-earth-600 dark:text-gray-400">
              Temukan kesempatan barter dari komunitas Selarasa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {barterPosts.map((post) => (
              <div key={post.id} className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-earth-900 dark:text-gray-100">
                    {post.name}
                  </h3>
                  <span className="text-sm text-earth-500 dark:text-gray-400">
                    {post.date}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-earth-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-leaf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span className="font-medium">Punya:</span> {post.have}
                  </div>
                  <div className="flex items-center text-earth-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-leaf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span className="font-medium">Mau:</span> {post.want}
                  </div>
                  <div className="flex items-center text-earth-600 dark:text-gray-400">
                    <svg className="w-4 h-4 mr-2 text-leaf-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {post.location}
                  </div>
                </div>

                <p className="text-earth-600 dark:text-gray-400 mb-4">
                  {post.description}
                </p>

                <div className="flex gap-2">
                  <button className="flex-1 btn-secondary text-sm">
                    Hubungi
                  </button>
                  <button className="flex-1 btn-primary text-sm">
                    Detail
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h2 className="text-2xl font-semibold text-earth-900 dark:text-gray-100 mb-6 text-center">
                Buat Posting Barter
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-earth-700 dark:text-gray-300 mb-2">Nama</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-earth-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-earth-700 dark:text-gray-300 mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-earth-700 dark:text-gray-300 mb-2">Yang Saya Punya</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Sayuran organik, alat pertanian, jasa..."
                    className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    value={formData.haveItem}
                    onChange={(e) => setFormData({...formData, haveItem: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-earth-700 dark:text-gray-300 mb-2">Yang Saya Mau</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Hasil ternak, benih, produk olahan..."
                    className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    value={formData.wantItem}
                    onChange={(e) => setFormData({...formData, wantItem: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-earth-700 dark:text-gray-300 mb-2">Deskripsi</label>
                  <textarea
                    rows={4}
                    placeholder="Jelaskan lebih detail tentang barang/jasa yang ingin ditukar..."
                    className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <button type="submit" className="w-full btn-primary">
                  Posting Barter
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-earth-50 dark:bg-gray-900">
        <div className="container-max text-center">
          <h2 className="font-serif text-3xl text-earth-900 dark:text-gray-100 mb-6">
            Panduan Barter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-leaf-600 dark:text-leaf-400 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Jelaskan Item
              </h3>
              <p className="text-sm text-earth-600 dark:text-gray-400">
                Deskripsikan dengan jelas apa yang Anda punya dan mau
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-leaf-600 dark:text-leaf-400 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Hubungi Penjual
              </h3>
              <p className="text-sm text-earth-600 dark:text-gray-400">
                Komunikasi untuk kesepakatan barter
              </p>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-leaf-100 dark:bg-leaf-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-leaf-600 dark:text-leaf-400 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-earth-900 dark:text-gray-100 mb-2">
                Lakukan Barter
              </h3>
              <p className="text-sm text-earth-600 dark:text-gray-400">
                Temui dan tukar barang/jasa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Barter;
