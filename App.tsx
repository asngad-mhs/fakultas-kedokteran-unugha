
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

export type View = 'Beranda' | 'Tentang Kami' | 'Program Studi' | 'Fasilitas' | 'Kontak';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeView, setActiveView] = useState<View>('Beranda');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    switch (activeView) {
      case 'Beranda':
        return (
          <>
            <Hero />
            <About />
            <Programs />
            <Facilities />
            <Testimonials />
            <Contact />
          </>
        );
      case 'Tentang Kami':
        return <About />;
      case 'Program Studi':
        return <Programs />;
      case 'Fasilitas':
        return <Facilities />;
      case 'Kontak':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header activeView={activeView} setActiveView={setActiveView} />
      <main>
        {renderContent()}
      </main>
      <Footer />
      {showBackToTop && <BackToTopButton />}
    </div>
  );
};

export default App;
