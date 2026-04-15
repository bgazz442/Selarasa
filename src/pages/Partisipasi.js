import React, { useState } from 'react';
import { 
  Handshake, 
  ArrowLeft, 
  Send, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  MessageSquare,
  CheckCircle,
  Leaf,
  Package,
  Sprout,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Partisipasi = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    organisasi: '',
    tipeKolaborasi: '',
    barterOffer: '',
    barterNeed: '',
    pesan: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const tipeKolaborasiOptions = [
    { value: 'barter', label: 'Barter Pangan/Produk', icon: Package },
    { value: 'kerjasama', label: 'Kerjasama Program', icon: Handshake },
    { value: 'komunitas', label: 'Bergabung Komunitas', icon: Users },
    { value: 'edukasi', label: 'Workshop/Edukasi', icon: Sprout },
    { value: 'lainnya', label: 'Lainnya', icon: MessageSquare }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-earth-sand/10 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-earth-dark mb-4">
              Terima Kasih!
            </h2>
            <p className="text-earth-brown/70 mb-8">
              Formulir kolaborasi Anda telah terkirim. Tim Selarasa akan menghubungi Anda dalam 2-3 hari kerja.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-earth-dark text-white rounded-full hover:bg-earth-brown transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-earth-sand/10">
      {/* Header */}
      <div className="bg-earth-dark text-earth-cream pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-earth-sand hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Form Kolaborasi & Barter
          </h1>
          <p className="text-earth-sand/80 text-lg max-w-2xl">
            Terbuka untuk berbagai bentuk kolaborasi, barter pangan, dan partisipasi komunitas.
            Mari bertumbuh bersama.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Progress Indicator */}
          <div className="bg-earth-sand/20 px-8 py-4 border-b border-earth-sand/30">
            <div className="flex items-center gap-2 text-sm text-earth-brown">
              <Leaf className="w-4 h-4" />
              <span>Isi formulir di bawah ini dengan lengkap</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            {/* Section 1: Informasi Pribadi */}
            <div>
              <h2 className="text-xl font-serif font-semibold text-earth-dark mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-earth-green" />
                Informasi Kontak
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-earth-green focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-earth-green focus:border-transparent transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="telepon"
                      value={formData.telepon}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-earth-green focus:border-transparent transition-all"
                      placeholder="0812-3456-7890"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organisasi/Komunitas
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="organisasi"
                      value={formData.organisasi}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-earth-green focus:border-transparent transition-all"
                      placeholder="Nama organisasi (opsional)"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Tipe Kolaborasi */}
            <div className="pt-8 border-t border-gray-100">
              <h2 className="text-xl font-serif font-semibold text-earth-dark mb-6 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-earth-green" />
                Jenis Kolaborasi <span className="text-red-500">*</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tipeKolaborasiOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <label
                      key={option.value}
                      className={`cursor-pointer relative rounded-xl border-2 p-4 transition-all hover:border-earth-green ${
                        formData.tipeKolaborasi === option.value
                          ? 'border-earth-green bg-earth-sand/10'
                          : 'border-gray-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="tipeKolaborasi"
                        value={option.value}
                        checked={formData.tipeKolaborasi === option.value}
                        onChange={handleChange}
                        required
                        className="sr-only"
                      />
                      <div className="flex flex-col items-center text-center">
                        <Icon className={`w-6 h-6 mb-2 ${
                          formData.tipeKolaborasi === option.value
                            ? 'text-earth-green'
                            : 'text-gray-400'
                        }`} />
                        <span className={`text-sm font-medium ${
                          formData.tipeKolaborasi === option.value
                            ? 'text-earth-dark'
                            : 'text-gray-600'
                        }`}>
                          {option.label}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Section 3: Barter Details (Conditional) */}
            {formData.tipeKolaborasi === 'barter' && (
              <div className="pt-8 border-t border-gray-100 animate-fade-in">
                <h2 className="text-xl font-serif font-semibold text-earth-dark mb-6 flex items-center gap-2">
                  <Package className="w-5 h-5 text-earth-green" />
                  Detail Barter
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apa yang Anda tawarkan? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="barterOffer"
                      value={formData.barterOffer}
                      onChange={handleChange}
                      required={formData.tipeKolaborasi === 'barter'}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-earth-green focus:border-transparent transition-all resize-none"
                      placeholder="Contoh: Sayur organik 5kg, benih tomat, dll"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apa yang Anda butuhkan? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="barterNeed"
                      value={formData.barterNeed}
                      onChange={handleChange}
                      required={formData.tipeKolaborasi === 'barter'}
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-earth-green focus:border-transparent transition-all resize-none"
                      placeholder="Contoh: Pupuk kompos, alat bertani, dll"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: Pesan Tambahan */}
            <div className="pt-8 border-t border-gray-100">
              <h2 className="text-xl font-serif font-semibold text-earth-dark mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-earth-green" />
                Pesan atau Ide Kolaborasi
              </h2>
              <textarea
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-earth-green focus:border-transparent transition-all resize-none"
                placeholder="Ceritakan lebih detail tentang ide kolaborasi Anda, harapan, atau pertanyaan lainnya..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-8 border-t border-gray-100">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto md:min-w-[200px] flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-earth-dark to-earth-brown text-white font-medium rounded-xl hover:shadow-lg hover:shadow-earth-dark/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Kirim Formulir</span>
                  </>
                )}
              </button>
              <p className="mt-4 text-xs text-gray-500">
                Dengan mengirim formulir ini, Anda menyetujui untuk dihubungi oleh tim Selarasa terkait kolaborasi yang diajukan.
              </p>
            </div>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-earth-sand/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-6 h-6 text-earth-green" />
            </div>
            <h3 className="font-semibold text-earth-dark mb-2">Terbuka</h3>
            <p className="text-sm text-gray-600">Menerima berbagai bentuk kolaborasi dari individu maupun komunitas</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-earth-sand/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-earth-green" />
            </div>
            <h3 className="font-semibold text-earth-dark mb-2">Barter</h3>
            <p className="text-sm text-gray-600">Tukar pangan lokal, benih, pupuk, atau hasil tani dengan tim Selarasa</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-earth-sand/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-earth-green" />
            </div>
            <h3 className="font-semibold text-earth-dark mb-2">Komunitas</h3>
            <p className="text-sm text-gray-600">Bergabung dengan jaringan urban farmer dan praktisi pangan lokal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partisipasi;
