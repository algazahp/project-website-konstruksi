import Link from 'next/link';

export default function LayananPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-blue-700 text-white py-20 shadow-lg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Layanan Kami</h1>
          <p className="text-xl text-teal-100 mb-2 max-w-2xl mx-auto">
            Solusi konstruksi lengkap untuk segala kebutuhan bangunan Anda
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Apa yang Kami Tawarkan?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Layanan profesional, terintegrasi, dan berstandar tinggi untuk setiap proyek konstruksi Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 text-center hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="flex justify-center mb-4">
                <span className="text-5xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">Konstruksi Bangunan Baru</h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>Rumah Tinggal</li>
                <li>Gedung Perkantoran</li>
                <li>Pusat Perbelanjaan</li>
                <li>Fasilitas Industri</li>
                <li>Infrastruktur Umum</li>
              </ul>
              <p className="text-gray-600">
                Pembangunan dari nol dengan teknologi modern dan material berkualitas tinggi.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-teal-600 text-center hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="flex justify-center mb-4">
                <span className="text-5xl">🔨</span>
              </div>
              <h3 className="text-2xl font-bold text-teal-800 mb-3">Renovasi & Perbaikan</h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>Renovasi Total & Parsial</li>
                <li>Perbaikan Struktural</li>
                <li>Upgrade Fasilitas</li>
                <li>Pemeliharaan Berkala</li>
              </ul>
              <p className="text-gray-600">
                Memperbaharui dan meningkatkan kualitas bangunan existing dengan pendekatan efisien.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-yellow-400 text-center hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="flex justify-center mb-4">
                <span className="text-5xl">📐</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-3">Desain & Konsultasi</h3>
              <ul className="text-gray-600 mb-4 space-y-1">
                <li>Desain Arsitektur</li>
                <li>Analisis Struktural</li>
                <li>Perhitungan RAB</li>
                <li>Perizinan & IMB</li>
                <li>Pengawasan Proyek</li>
              </ul>
              <p className="text-gray-600">
                Layanan konsultasi menyeluruh dari tahap perencanaan hingga pelaksanaan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Proses Kerja Kami</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Metodologi terbukti untuk hasil yang optimal
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-bold text-blue-800 mb-2">Konsultasi</h3>
              <p className="text-gray-600">Diskusi kebutuhan dan analisis lokasi</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-bold text-teal-800 mb-2">Perencanaan</h3>
              <p className="text-gray-600">Desain detail dan penyusunan RAB</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-bold text-yellow-600 mb-2">Pelaksanaan</h3>
              <p className="text-gray-600">Konstruksi dengan pengawasan ketat</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-400 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-bold text-gray-700 mb-2">Serah Terima</h3>
              <p className="text-gray-600">Quality control dan garansi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-700 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Butuh Konsultasi Lebih Lanjut?
          </h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Tim ahli kami siap membantu mewujudkan proyek impian Anda
          </p>
          <Link
            href="/kontak"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg text-lg transition-colors inline-block"
          >
            Konsultasi Gratis
          </Link>
        </div>
      </section>
    </div>
  );
}
