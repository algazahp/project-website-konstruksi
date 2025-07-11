import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-teal-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-teal-700 text-white shadow-lg pt-32 pb-28">
        {/* pt-32 agar konten tidak tertutup Navbar sticky, dan tidak ada border atau background hitam */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            Membangun Impian Anda dengan
            <span className="text-yellow-400"> Kualitas Terbaik</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-10 text-blue-100 max-w-2xl mx-auto">
            Kontraktor profesional dengan pengalaman puluhan tahun dalam konstruksi bangunan dan proyek besar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg text-lg transition-colors"
            >
              Konsultasi Gratis
            </Link>
            <Link
              href="/layanan"
              className="border-2 border-white hover:bg-white hover:text-blue-700 font-bold py-4 px-10 rounded-full text-lg transition-colors"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan konstruksi dengan standar kualitas tinggi dan teknologi modern.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 text-center hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="flex justify-center mb-4">
                <span className="text-5xl">🏗️</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                Konstruksi Bangunan
              </h3>
              <p className="text-gray-600">
                Pembangunan rumah, gedung, dan infrastruktur dengan teknologi modern dan tim profesional.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-teal-600 text-center hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="flex justify-center mb-4">
                <span className="text-5xl">🔨</span>
              </div>
              <h3 className="text-2xl font-bold text-teal-800 mb-3">
                Renovasi & Perbaikan
              </h3>
              <p className="text-gray-600">
                Renovasi rumah dan gedung dengan desain terkini, material berkualitas, dan pengerjaan rapi.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-yellow-400 text-center hover:scale-105 hover:shadow-2xl transition-transform">
              <div className="flex justify-center mb-4">
                <span className="text-5xl">📐</span>
              </div>
              <h3 className="text-2xl font-bold text-yellow-600 mb-3">
                Desain & Konsultasi
              </h3>
              <p className="text-gray-600">
                Konsultasi arsitektur dan perencanaan bangunan sesuai kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-b-4 border-blue-600 hover:shadow-2xl transition">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">
                Kualitas Terjamin
              </h3>
              <p className="text-gray-600">
                Material premium dan pengerjaan profesional untuk hasil terbaik.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-b-4 border-teal-600 hover:shadow-2xl transition">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">
                Tepat Waktu
              </h3>
              <p className="text-gray-600">
                Komitmen menyelesaikan proyek sesuai jadwal yang disepakati.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-b-4 border-yellow-400 hover:shadow-2xl transition">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-yellow-600 mb-2">
                Berpengalaman
              </h3>
              <p className="text-gray-600">
                Puluhan tahun pengalaman dalam industri konstruksi dan proyek besar.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border-b-4 border-gray-400 hover:shadow-2xl transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Harga Kompetitif
              </h3>
              <p className="text-gray-600">
                Penawaran harga terbaik tanpa mengurangi kualitas dan layanan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik dari tim profesional kami.
          </p>
          <Link
            href="/kontak"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg text-lg transition-colors inline-block"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
