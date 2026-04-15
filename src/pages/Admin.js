import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, ShoppingBag, BookOpen, Settings, LogOut, Leaf, Bell, Search, Menu, TrendingUp, Calendar, Package, MessageSquare } from 'lucide-react';

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check authentication on mount
  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth !== 'true') {
      // Redirect to login if not authenticated
      navigate('/login', { state: { from: { pathname: '/admin' } }, replace: true });
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    navigate('/');
  };

  // Show nothing while checking auth
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
          <p className="text-gray-600 dark:text-gray-400">Memeriksa akses...</p>
        </div>
      </div>
    );
  }

  const stats = [
    { title: 'Total Pengguna', value: '1,234', change: '+12%', icon: Users },
    { title: 'Produk Aktif', value: '56', change: '+5%', icon: Package },
    { title: 'Pesanan Bulan Ini', value: '89', change: '+23%', icon: ShoppingBag },
    { title: 'Artikel Terbit', value: '24', change: '+8%', icon: BookOpen },
  ];

  const recentOrders = [
    { id: 'ORD-001', customer: 'Budi Santoso', product: 'Paket Sayur Organik', amount: 'Rp 150.000', status: 'completed', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Ani Wijaya', product: 'Benih Tomat Heritage', amount: 'Rp 75.000', status: 'pending', date: '2024-01-14' },
    { id: 'ORD-003', customer: 'Citra Dewi', product: 'Workshop Urban Farming', amount: 'Rp 250.000', status: 'completed', date: '2024-01-13' },
    { id: 'ORD-004', customer: 'Dedi Kurniawan', product: 'Paket Starter Kit', amount: 'Rp 350.000', status: 'processing', date: '2024-01-12' },
  ];

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Pengguna', icon: Users },
    { id: 'products', label: 'Produk', icon: ShoppingBag },
    { id: 'orders', label: 'Pesanan', icon: Package },
    { id: 'content', label: 'Konten', icon: BookOpen },
    { id: 'messages', label: 'Pesan', icon: MessageSquare },
    { id: 'settings', label: 'Pengaturan', icon: Settings },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300';
      case 'pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'processing': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Selesai';
      case 'pending': return 'Menunggu';
      case 'processing': return 'Diproses';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} flex flex-col`}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-leaf-500 rounded-xl flex items-center justify-center shadow-lg">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Selarasa</span>
              <span className="block text-xs text-gray-500 dark:text-gray-400">Admin Panel</span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeTab === item.id ? 'bg-gradient-to-r from-primary-500 to-leaf-500 text-white shadow-lg' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'}`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
            <LogOut className="w-5 h-5" />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-4 lg:px-8">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Menu className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white capitalize">
                {sidebarItems.find(item => item.id === activeTab)?.label}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input type="text" placeholder="Cari..." className="bg-transparent border-none outline-none text-sm text-gray-900 dark:text-white placeholder-gray-400 w-48" />
              </div>

              <button className="relative p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-leaf-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  A
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.title}</p>
                          <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                          <p className="text-sm text-green-600 dark:text-green-400 mt-1 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {stat.change} bulan ini
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30">
                          <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recent Orders & Quick Actions */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
                  <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Pesanan Terbaru</h2>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-700/50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">ID</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Pelanggan</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Produk</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Jumlah</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                        {recentOrders.map((order) => (
                          <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{order.id}</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{order.customer}</td>
                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{order.product}</td>
                            <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{order.amount}</td>
                            <td className="px-6 py-4">
                              <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                                {getStatusLabel(order.status)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary-500" />
                      Aksi Cepat
                    </h2>
                    <div className="space-y-3">
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors text-left">
                        <Package className="w-5 h-5" />
                        <span className="text-sm font-medium">Tambah Produk Baru</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-left">
                        <BookOpen className="w-5 h-5" />
                        <span className="text-sm font-medium">Buat Artikel</span>
                      </button>
                      <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors text-left">
                        <Users className="w-5 h-5" />
                        <span className="text-sm font-medium">Kelola Pengguna</span>
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-primary-500 to-green-500 rounded-2xl p-6 text-white">
                    <h3 className="font-semibold mb-2">Selamat Datang!</h3>
                    <p className="text-sm opacity-90 mb-4">Panel admin Selarasa siap digunakan. Kelola produk, pesanan, dan konten dari satu tempat.</p>
                    <Link to="/" className="inline-flex items-center text-sm font-medium hover:underline">Lihat Website</Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Placeholder untuk tab lainnya */}
          {activeTab !== 'dashboard' && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
                {React.createElement(sidebarItems.find(item => item.id === activeTab)?.icon || LayoutDashboard, { className: "w-10 h-10 text-gray-400" })}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{sidebarItems.find(item => item.id === activeTab)?.label}</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-md">Fitur ini sedang dalam pengembangan. Silakan gunakan menu Dashboard untuk melihat ringkasan data.</p>
              <button onClick={() => setActiveTab('dashboard')} className="mt-6 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors">Kembali ke Dashboard</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
