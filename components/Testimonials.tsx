
import React from 'react';
import { QuoteIcon } from './icons/Icons';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role:string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, avatarUrl }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full flex flex-col justify-center">
      <img src={avatarUrl} alt={name} className="w-24 h-24 mx-auto rounded-full mb-4 -mt-20 border-4 border-white shadow-md"/>
      <div className="text-unugha-gold mb-4">
          <QuoteIcon />
      </div>
      <p className="text-gray-600 italic mb-4 flex-grow">"{quote}"</p>
      <div>
        <h4 className="font-bold text-unugha-green-dark text-lg">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonialsData = [
    {
      quote: "Kurikulum di FK UNUGHA sangat relevan dengan tantangan dunia medis saat ini. Para dosen sangat mendukung dan menginspirasi kami untuk menjadi dokter yang lebih baik.",
      name: "Aisyah Putri",
      role: "Mahasiswa Angkatan 2022",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      quote: "Fasilitas laboratorium yang lengkap dan modern sangat membantu saya dalam memahami materi perkuliahan. Saya bangga menjadi bagian dari FK UNUGHA.",
      name: "Budi Santoso",
      role: "Mahasiswa Angkatan 2021",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
     {
      quote: "Lingkungan belajar yang Islami dan penuh kekeluargaan membuat proses pendidikan di sini sangat nyaman. Kami tidak hanya belajar ilmu, tapi juga adab dan etika.",
      name: "Fatima Az-Zahra",
      role: "Alumni Angkatan 2020",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-unugha-green-dark mb-4">Kata Mereka</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman dari mahasiswa dan alumni kami.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-16 pt-12">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
