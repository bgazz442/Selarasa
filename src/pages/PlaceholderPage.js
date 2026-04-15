import React from 'react';

const PlaceholderPage = ({ title }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-center animate-fade-in">
      <div className="text-center">
        <h1 className="text-4xl font-serif text-earth-dark mb-4">{title}</h1>
        <p className="text-earth-brown/70 font-sans max-w-lg mx-auto">
          Halaman ini sedang dalam proses penyemaian. Silakan kembali lagi nanti untuk melihat cerita dan dokumentasi yang kami siapkan.
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
