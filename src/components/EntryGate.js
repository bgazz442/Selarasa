import React, { useState, useEffect } from 'react';
import { Sprout, Send, Sparkles, Leaf } from 'lucide-react';

const EntryGate = ({ onComplete }) => {
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [charCount, setCharCount] = useState(0);

  const MIN_CHARS = 10;
  const MAX_CHARS = 500;

  useEffect(() => {
    // Check if user has already submitted
    const hasSubmitted = localStorage.getItem('gudskul_entry_answer');
    if (hasSubmitted) {
      onComplete();
    }
  }, [onComplete]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setAnswer(value);
      setCharCount(value.length);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!answer.trim()) {
      setError('Silakan tulis jawaban Anda terlebih dahulu.');
      return;
    }

    if (answer.trim().length < MIN_CHARS) {
      setError(`Jawaban minimal ${MIN_CHARS} karakter. (${answer.trim().length}/${MIN_CHARS})`);
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Create answer object
      const answerData = {
        id: Date.now().toString(),
        content: answer.trim(),
        timestamp: new Date().toISOString(),
        deviceId: localStorage.getItem('gudskul_device_id') || generateDeviceId(),
      };

      // Save to localStorage (mock database)
      const existingAnswers = JSON.parse(localStorage.getItem('gudskul_answers') || '[]');
      existingAnswers.unshift(answerData);
      localStorage.setItem('gudskul_answers', JSON.stringify(existingAnswers));

      // Mark user as having submitted
      localStorage.setItem('gudskul_entry_answer', JSON.stringify(answerData));

      // Show success animation
      setShowSuccess(true);

      // Close gate after success animation
      setTimeout(() => {
        onComplete();
      }, 2000);
    } catch (err) {
      setError('Terjadi kesalahan. Silakan coba lagi.');
      setIsSubmitting(false);
    }
  };

  const generateDeviceId = () => {
    const id = 'device_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('gudskul_device_id', id);
    return id;
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-earth-dark via-earth-brown to-earth-dark">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-earth-green/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-earth-sand/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-leaf-500/10 rounded-full blur-3xl animate-float"></div>
        </div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5 pattern-dots"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-screen flex flex-col items-center justify-center p-4 overflow-y-auto">
        <div className="w-full max-w-2xl -mt-16 md:-mt-20">
          {/* Logo Only */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-earth-sand to-earth-cream rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-8 h-8 text-earth-dark" />
              </div>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl mb-8">
            {!showSuccess ? (
              <>
                {/* Question */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Sprout className="w-6 h-6 text-earth-sand" />
                    <Sparkles className="w-5 h-5 text-earth-sand/60" />
                  </div>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold text-white leading-relaxed">
                    "Menurutmu, seperti apa
                    <br />
                    <span className="text-earth-sand">masa depan Selarasa?</span>"
                  </h2>
                  <p className="mt-4 text-earth-cream/60 text-sm">
                    Bagikan visi dan harapan Anda untuk komunitas kita
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      value={answer}
                      onChange={handleChange}
                      placeholder="Tulis jawabanmu di sini... (minimal 10 karakter)"
                      rows={4}
                      className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-earth-sand/50 focus:border-transparent transition-all resize-none text-base leading-relaxed"
                      disabled={isSubmitting}
                    />
                    {/* Character count */}
                    <div className="absolute bottom-3 right-4 text-xs text-white/40">
                      <span className={charCount < MIN_CHARS ? 'text-red-400' : 'text-green-400'}>
                        {charCount}
                      </span>
                      <span> / {MAX_CHARS}</span>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-200 text-sm text-center">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-gradient-to-r from-earth-sand to-earth-cream text-earth-dark font-semibold rounded-2xl hover:shadow-xl hover:shadow-earth-sand/20 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-earth-dark/30 border-t-earth-dark rounded-full animate-spin"></div>
                        <span>Menyimpan...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim & Masuk</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                {/* Info */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-earth-cream/40">
                    Jawaban Anda akan menjadi bagian dari koleksi visi komunitas Selarasa
                  </p>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8 animate-fade-in">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">
                  Terima Kasih!
                </h3>
                <p className="text-earth-cream/70 mb-2">
                  Visi Anda telah tersimpan dan menjadi bagian dari Selarasa.
                </p>
                <p className="text-earth-sand text-sm">
                  Mengarahkan ke website...
                </p>
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="mt-auto pt-4 pb-2 text-center">
            <p className="text-xs text-earth-cream/30">
              Selarasa Kolektif • Jagakarsa, Jakarta Selatan
            </p>
          </div>
        </div>
      </div>

      {/* Reset Button (Development/Testing Only) */}
      <button
        onClick={() => {
          if (window.confirm('Reset Entry Gate? Ini akan menghapus data lokal.')) {
            localStorage.removeItem('gudskul_entry_answer');
            localStorage.removeItem('gudskul_answers');
            localStorage.removeItem('gudskul_liked_posts');
            localStorage.removeItem('gudskul_display_numbers');
            window.location.reload();
          }
        }}
        className="absolute bottom-4 right-4 text-xs text-white/20 hover:text-white/50 transition-colors"
        title="Reset Entry Gate (Testing)"
      >
        Reset
      </button>
    </div>
  );
};

export default EntryGate;
