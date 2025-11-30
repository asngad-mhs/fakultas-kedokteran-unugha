
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-unugha-green-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FK UNUGHA</h3>
            <p className="text-gray-300">
              Mencetak Generasi Dokter Profesional, Beretika, dan Islami.
            </p>
             <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
              <a href="#" className="text-gray-300 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.795 2.013 10.148 2 12.315 2zm-1.161 4.888c-.815.176-1.615.558-2.26 1.204a4.347 4.347 0 00-1.204 2.26c-.176.815-.25 1.633-.25 2.65s.074 1.835.25 2.65c.176.815.558 1.615 1.204 2.26a4.347 4.347 0 002.26 1.204c.815.176 1.633.25 2.65.25s1.835-.074 2.65-.25c.815-.176 1.615-.558 2.26-1.204a4.347 4.347 0 001.204-2.26c.176-.815.25-1.633.25-2.65s-.074-1.835-.25-2.65c-.176-.815-.558-1.615-1.204-2.26a4.347 4.347 0 00-2.26-1.204c-.815-.176-1.633-.25-2.65-.25z" clipRule="evenodd" /><path d="M16.949 8.242a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" /></svg></a>
              <a href="#" className="text-gray-300 hover:text-white"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#programs" className="text-gray-300 hover:text-white transition-colors">Program Studi</a></li>
              <li><a href="#facilities" className="text-gray-300 hover:text-white transition-colors">Fasilitas</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informasi</h3>
             <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Brosur PMB</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kalender Akademik</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Berita & Acara</a></li>
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold mb-4">Alamat</h3>
            <p className="text-gray-300">
             Jl. Kemerdekaan Timur No.16, Gunungsimping, Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53224
            </p>
          </div>
        </div>
      </div>
      <div className="bg-unugha-green py-4">
        <div className="container mx-auto px-6 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Fakultas Kedokteran UNUGHA Cilacap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
