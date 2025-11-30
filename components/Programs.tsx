
import React from 'react';

interface ProgramCardProps {
  title: string;
  degree: string;
  description: string;
  imageUrl: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, degree, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-unugha-green-dark mb-2">{title}</h3>
        <p className="text-unugha-gold font-semibold mb-3">{degree}</p>
        <p className="text-gray-600 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const Programs: React.FC = () => {
  const programsData = [
    {
      title: "Pendidikan Dokter",
      degree: "Sarjana Kedokteran (S.Ked.)",
      description: "Program sarjana yang mempersiapkan mahasiswa dengan dasar-dasar ilmu kedokteran yang kuat, mencakup teori, praktikum, dan keterampilan klinis dasar.",
      imageUrl: "https://picsum.photos/400/300?random=2"
    },
    {
      title: "Profesi Dokter",
      degree: "Dokter (dr.)",
      description: "Tahap pendidikan klinis di rumah sakit dan pusat layanan kesehatan, di mana mahasiswa mengaplikasikan ilmu yang didapat untuk menjadi dokter yang kompeten.",
      imageUrl: "https://picsum.photos/400/300?random=3"
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-unugha-green-dark mb-4">Program Studi Unggulan</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami menawarkan jenjang pendidikan kedokteran yang komprehensif untuk mencetak dokter masa depan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {programsData.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
