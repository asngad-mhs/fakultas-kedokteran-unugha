
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-unugha-green-dark mb-4">Hubungi Kami & Pendaftaran</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami siap membantu Anda. Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut mengenai pendaftaran.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-unugha-green-dark mb-6">Informasi Kontak</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-unugha-green flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Jl. Kemerdekaan Timur No.16, Gunungsimping, Cilacap Tengah, Kabupaten Cilacap, Jawa Tengah 53224</span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-unugha-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:info.fk@unugha.ac.id" className="hover:text-unugha-green">info.fk@unugha.ac.id</a>
                </div>
                <div className="flex items-center space-x-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-unugha-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>(0282) 5390886</span>
                </div>
              </div>
            </div>
             <div className="rounded-lg shadow-md overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.076359551466!2d109.0203556758411!3d-7.781848877143438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e651293051a59c7%3A0x6331e955a11442e2!2sUNUGHA%20(Universitas%20Nahdlatul%20Ulama%20Al%20Ghazali)%20Cilacap!5e0!3m2!1sen!2sid!4v1689673413532!5m2!1sen!2sid" 
                    width="100%" 
                    height="300" 
                    style={{border:0}} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="UNUGHA Cilacap Location"
                ></iframe>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-unugha-green-dark mb-6">Kirim Pesan</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                <input type="text" id="name" name="name" placeholder="Contoh: Budi Santoso" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unugha-green" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Contoh: budi@email.com" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unugha-green" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                <textarea id="message" name="message" rows={5} placeholder="Tuliskan pertanyaan Anda di sini..." className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-unugha-green" required></textarea>
              </div>
              <button type="submit" className="w-full bg-unugha-green text-white font-bold py-3 px-6 rounded-md hover:bg-unugha-green-dark transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-0.5">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
