import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-20 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Tentang Kami</h1>
          <p className="text-xl text-blue-100 mb-2 max-w-2xl mx-auto">
            Membangun kepercayaan melalui kualitas dan integritas.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Perjalanan Kami</h2>
            <p className="text-lg text-gray-600 mb-6">
              ZeusKonstruksi didirikan dengan visi untuk menjadi kontraktor terdepan di Indonesia. Dengan pengalaman lebih dari 20 tahun, kami telah menyelesaikan ratusan proyek konstruksi dengan standar kualitas internasional.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Tim ahli kami terdiri dari insinyur berpengalaman, arsitek profesional, dan tenaga kerja terampil yang berkomitmen untuk memberikan hasil terbaik bagi setiap klien.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">20+</div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Proyek Selesai</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Kepuasan Klien</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl h-96 flex items-center justify-center border-t-4 border-blue-600">
            <span className="text-gray-400 text-lg">[Foto Kantor / Tim]</span>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-teal-600 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-teal-800 mb-4">Visi Kami</h3>
            <p className="text-gray-600">
              Menjadi perusahaan konstruksi terkemuka yang dipercaya untuk membangun masa depan yang berkelanjutan melalui inovasi dan keunggulan dalam setiap proyek.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-10 border-t-4 border-yellow-400 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Misi Kami</h3>
            <p className="text-gray-600">
              Memberikan solusi konstruksi berkualitas tinggi dengan teknologi terdepan, menjaga komitmen tepat waktu, dan membangun hubungan jangka panjang dengan klien.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Tim Profesional Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bertemu dengan para ahli yang akan mewujudkan proyek impian Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-blue-600">
              <div className="bg-gray-200 w-32 h-32 mx-auto rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-500">Foto</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Alfian Kurniawan</h3>
              <p className="text-blue-600 mb-2">Direktur Utama</p>
              <p className="text-gray-600">20+ tahun pengalaman dalam manajemen proyek konstruksi</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-teal-600">
              <div className="bg-gray-200 w-32 h-32 mx-auto rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-500">Foto</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Alfian Kurniawan</h3>
              <p className="text-teal-600 mb-2">Kepala Teknik</p>
              <p className="text-gray-600">Spesialis dalam desain struktural dan analisis teknis</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-t-4 border-yellow-400">
              <div className="bg-gray-200 w-32 h-32 mx-auto rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-500">Foto</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Alfian Kurniawan</h3>
              <p className="text-yellow-600 mb-2">Manajer Proyek</p>
              <p className="text-gray-600">Ahli dalam koordinasi dan pelaksanaan proyek lapangan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Siap Berkolaborasi dengan Kami?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Mari diskusikan proyek Anda dengan tim ahli kami
          </p>
          <Link
            href="/kontak"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg text-lg transition-colors inline-block"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  );
}
