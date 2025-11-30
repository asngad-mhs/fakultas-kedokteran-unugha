
import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './icons/Icons';
import { View } from '../App';

const UnughaLogo: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="128" cy="128" r="120" fill="#006A4E"/>
        <path d="M128 40C177.493 40 216 82.507 216 128C216 173.493 177.493 216 128 216C78.507 216 40 173.493 40 128C40 82.507 78.507 40 128 40Z" fill="url(#paint0_linear_14_83)"/>
        <path d="M128 104L168 128L128 152L88 128L128 104Z" fill="#D4AF37"/>
        <path d="M104 140L128 156L152 140L128 172L104 140Z" fill="#F0E68C"/>
        <defs>
            <linearGradient id="paint0_linear_14_83" x1="128" y1="40" x2="128" y2="216" gradientUnits="userSpaceOnUse">
                <stop stopColor="#007A5A"/>
                <stop offset="1" stopColor="#004D38"/>
            </linearGradient>
        </defs>
    </svg>
);

interface HeaderProps {
  activeView: View;
  setActiveView: (view: View) => void;
}


const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { id: View, label: string }[] = [
    { id: 'Beranda', label: 'Beranda' },
    { id: 'Tentang Kami', label: 'Tentang Kami' },
    { id: 'Program Studi', label: 'Program Studi' },
    { id: 'Fasilitas', label: 'Fasilitas' },
    { id: 'Kontak', label: 'Kontak' },
  ];

  const handleNavClick = (view: View) => {
    setActiveView(view);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button onClick={() => handleNavClick('Beranda')} className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-unugha-green rounded-lg">
           <UnughaLogo />
          <span className="text-xl font-bold text-unugha-green-dark">
            FK UNUGHA
          </span>
        </button>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => handleNavClick(link.id)} className={`text-gray-600 hover:text-unugha-green transition-colors duration-300 font-medium pb-1 border-b-2 ${activeView === link.id ? 'border-unugha-green text-unugha-green' : 'border-transparent'}`}>
              {link.label}
            </button>
          ))}
        </nav>
        
        <div className="hidden md:block">
            <button onClick={() => handleNavClick('Kontak')} className="bg-unugha-green text-white px-5 py-2 rounded-full font-semibold hover:bg-unugha-green-dark transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5">
                Pendaftaran
            </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-unugha-green focus:outline-none">
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-4 shadow-inner">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            {navLinks.map((link) => (
               <button key={link.id} onClick={() => handleNavClick(link.id)} className={`text-gray-600 hover:text-unugha-green py-2 ${activeView === link.id ? 'font-bold text-unugha-green' : ''}`}>
                 {link.label}
               </button>
            ))}
             <button onClick={() => handleNavClick('Kontak')} className="bg-unugha-green text-white px-6 py-2 rounded-full hover:bg-unugha-green-dark transition-all duration-300 w-11/12 text-center">
                Pendaftaran
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
