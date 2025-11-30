
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}></div>
      <div className="absolute inset-0 bg-unugha-green-dark/80"></div>
      
      <div className="relative z-10 text-center px-6" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
          Fakultas Kedokteran <span className="text-unugha-gold">UNUGHA</span> Cilacap
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto font-light animate-fade-in-up">
          Mencetak Generasi Dokter Profesional, Beretika, dan Berlandaskan Nilai-Nilai Islam Ahlussunnah wal Jama'ah.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <a 
              href="#programs" 
              className="bg-unugha-gold text-unugha-green-dark font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-unugha-green-dark transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              Lihat Program Studi
            </a>
            <a 
              href="#about" 
              className="bg-transparent border-2 border-unugha-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-unugha-gold hover:text-unugha-green-dark transform hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              Tentang Kami
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
