import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EntryGate from './components/EntryGate';
import Home from './pages/Home';
import About from './pages/About';
import Katalog from './pages/Katalog';
import Login from './pages/Login';
import Partisipasi from './pages/Partisipasi';
import Forum from './pages/Forum';
import PlaceholderPage from './pages/PlaceholderPage';
import Proyek from './pages/Proyek';
import Admin from './pages/Admin';
import './index.css';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';
  const isLoginRoute = location.pathname === '/login';
  const hideLayout = isAdminRoute || isLoginRoute;
  
  const [showEntryGate, setShowEntryGate] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user has already submitted an answer
    const hasSubmitted = localStorage.getItem('gudskul_entry_answer');
    const isForumPage = location.pathname === '/forum';
    
    // Don't show entry gate on admin, login, or forum pages
    if (!hasSubmitted && !hideLayout && !isForumPage) {
      setShowEntryGate(true);
    }
    setIsChecking(false);
  }, [location.pathname, hideLayout]);

  const handleEntryComplete = () => {
    setShowEntryGate(false);
  };

  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-earth-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-earth-sand/30 border-t-earth-sand rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Entry Gate Overlay */}
      {showEntryGate && <EntryGate onComplete={handleEntryComplete} />}
      
      <div className={`${hideLayout ? '' : 'flex flex-col min-h-screen'}`}>
        {!hideLayout && <Navbar />}
        <main className={`${hideLayout ? '' : 'flex-grow'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/program" element={<PlaceholderPage title="Program & Praktik" />} />
            <Route path="/proyek" element={<Proyek />} />
            <Route path="/fokus" element={<PlaceholderPage title="Fokus & Isu" />} />
            <Route path="/proses" element={<PlaceholderPage title="Proses Tanam & Produksi" />} />
            <Route path="/artikel" element={<PlaceholderPage title="Artikel & Jurnal" />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/partisipasi" element={<Partisipasi />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/jaringan" element={<PlaceholderPage title="Jaringan Komunitas" />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        {!hideLayout && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
