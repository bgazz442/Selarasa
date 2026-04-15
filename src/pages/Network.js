import React from 'react';

const Network = () => {
  const networkMembers = [
    {
      name: 'Kebun Komunitas Meruya',
      type: 'Kebun',
      location: 'Jakarta Barat',
      members: 50,
      focus: 'Sayuran organik dan komunitas',
      activities: ['Budidaya sayuran', 'Workshop', 'Panen bersama'],
    },
    {
      name: 'Kolektif Fermentasi Jakarta',
      type: 'Komunitas',
      location: 'Jakarta Selatan',
      members: 30,
      focus: 'Pengolahan pangan fermentasi',
      activities: ['Workshop fermentasi', 'Produk olahan', 'Riset fermentasi'],
    },
    {
      name: 'Petani Urban Tangerang',
      type: 'Kelompok Tani',
      location: 'Tangerang',
      members: 25,
      focus: 'Hidroponik dan aquaponik',
      activities: ['Budidaya hidroponik', 'Pelatihan', 'Distribusi'],
    },
  ];

  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-br from-leaf-50 to-earth-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max text-center">
          <h1 className="font-serif text-5xl text-earth-900 dark:text-gray-100 mb-6">
            Jaringan
          </h1>
          <div className="w-24 h-1 bg-leaf-500 mx-auto mb-8"></div>
          <p className="text-xl text-earth-700 dark:text-gray-300 max-w-3xl mx-auto">
            Jaringan kelompok tani, kebun, dan kolektif yang tergabung dalam ekosistem Selarasa.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8">
            {networkMembers.map((member) => (
              <div key={member.name} className="card">
                <h3 className="text-xl font-semibold text-earth-900 dark:text-gray-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-leaf-600 dark:text-leaf-400 mb-4">{member.type}</p>
                <div className="space-y-2 text-earth-600 dark:text-gray-400 mb-4">
                  <p><strong>Lokasi:</strong> {member.location}</p>
                  <p><strong>Anggota:</strong> {member.members} orang</p>
                  <p><strong>Fokus:</strong> {member.focus}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-medium text-earth-900 dark:text-gray-100 mb-2">Kegiatan:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.activities.map((activity) => (
                      <span
                        key={activity}
                        className="text-xs px-2 py-1 bg-earth-100 text-earth-700 rounded-full dark:bg-earth-700 dark:text-earth-300"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="w-full btn-secondary">Hubungi</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Network;
