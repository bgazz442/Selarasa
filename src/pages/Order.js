import React, { useState } from 'react';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    products: [],
    notes: '',
  });

  const products = [
    { id: 1, name: 'Paket Sayuran Organik', price: 35000 },
    { id: 2, name: 'Herbal Tea Lokal', price: 45000 },
    { id: 3, name: 'Fermentasi Sayuran Mix', price: 55000 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
  };

  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-br from-leaf-50 to-earth-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max text-center">
          <h1 className="font-serif text-5xl text-earth-900 dark:text-gray-100 mb-6">
            Pemesanan
          </h1>
          <div className="w-24 h-1 bg-leaf-500 mx-auto mb-8"></div>
          <p className="text-xl text-earth-700 dark:text-gray-300 max-w-3xl mx-auto">
            Form pemesanan sederhana untuk produk-produk Selarasa.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-semibold text-earth-900 dark:text-gray-100 mb-6">
                Informasi Pemesanan
              </h2>
              
              <div className="grid grid-cols-1 md-grid-cols-2 gap-4">
                <div>
                  <label className="block text-earth-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
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

              <div className="mt-4">
                <label className="block text-earth-700 dark:text-gray-300 mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="mt-4">
                <label className="block text-earth-700 dark:text-gray-300 mb-2">Alamat Pengiriman</label>
                <textarea
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                />
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold text-earth-900 dark:text-gray-100 mb-6">
                Pilih Produk
              </h2>
              
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border border-earth-200 rounded-lg mb-3 dark:border-gray-600">
                  <div>
                    <h3 className="font-medium text-earth-900 dark:text-gray-100">{product.name}</h3>
                    <p className="text-earth-600 dark:text-gray-400">Rp {product.price.toLocaleString()}</p>
                  </div>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    className="w-20 px-3 py-2 border border-earth-300 rounded-lg text-center dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                  />
                </div>
              ))}
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold text-earth-900 dark:text-gray-100 mb-6">
                Catatan Tambahan
              </h2>
              <textarea
                rows={4}
                placeholder="Catatan khusus untuk pemesanan..."
                className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-leaf-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
              />
            </div>

            <div className="flex gap-4">
              <button type="submit" className="flex-1 btn-primary">
                Kirim Pemesanan
              </button>
              <button type="button" className="flex-1 btn-secondary">
                Batal
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Order;
