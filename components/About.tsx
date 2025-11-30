
import React from 'react';
import { AcademicCapIcon, SparklesIcon, UsersIcon } from './icons/Icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-unugha-green-dark mb-4">Selamat Datang di FK UNUGHA</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fakultas Kedokteran Universitas Nahdlatul Ulama Al Ghazali (UNUGHA) berkomitmen untuk menyelenggarakan pendidikan kedokteran yang unggul, inovatif, dan berakhlakul karimah.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img src="https://images.unsplash.com/photo-1580281657527-47f249e8f4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" alt="Gedung Fakultas Kedokteran" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-unugha-green-dark mb-2">Visi Kami</h3>
              <p className="text-gray-600">
                Menjadi Fakultas Kedokteran yang unggul dalam pendidikan, penelitian, dan pengabdian masyarakat di tingkat nasional yang berlandaskan nilai-nilai Islam Ahlussunnah wal Jama'ah pada tahun 2035.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-unugha-green-dark mb-2">Misi Kami</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Menyelenggarakan pendidikan kedokteran yang berkualitas untuk menghasilkan dokter yang profesional dan berakhlakul karimah.</li>
                <li>Mengembangkan penelitian inovatif yang berorientasi pada pemecahan masalah kesehatan masyarakat.</li>
                <li>Melaksanakan pengabdian kepada masyarakat berbasis hasil penelitian untuk meningkatkan derajat kesehatan.</li>
                <li>Membangun tata kelola fakultas yang akuntabel dan transparan.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
            <h3 className="text-3xl font-bold text-unugha-green-dark mb-12">Mengapa Memilih Kami?</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-6">
                    <div className="bg-unugha-green text-white rounded-full p-4 mb-4">
                        <AcademicCapIcon />
                    </div>
                    <h4 className="text-xl font-semibold text-unugha-green-dark mb-2">Kurikulum Modern</h4>
                    <p className="text-gray-600">Kurikulum berbasis kompetensi yang terintegrasi dengan nilai-nilai keislaman.</p>
                </div>
                <div className="flex flex-col items-center p-6">
                    <div className="bg-unugha-green text-white rounded-full p-4 mb-4">
                        <UsersIcon />
                    </div>
                    <h4 className="text-xl font-semibold text-unugha-green-dark mb-2">Dosen Berpengalaman</h4>
                    <p className="text-gray-600">Tenaga pengajar ahli di bidangnya yang siap membimbing mahasiswa.</p>
                </div>
                <div className="flex flex-col items-center p-6">
                     <div className="bg-unugha-green text-white rounded-full p-4 mb-4">
                        <SparklesIcon />
                    </div>
                    <h4 className="text-xl font-semibold text-unugha-green-dark mb-2">Fasilitas Lengkap</h4>
                    <p className="text-gray-600">Didukung fasilitas modern untuk menunjang kegiatan akademik dan praktik.</p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;
